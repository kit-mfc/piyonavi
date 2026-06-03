import { NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  group?: string;
  category?: string;
  message?: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  general: "松ヶ崎祭全般",
  food: "飲食",
  exhibition: "展示･物販",
  performance: "パフォーマンス",
  tent: "手づくりテント",
  experience: "体験",
  individual: "個人出展",
  research: "研究紹介",
  accounting: "会計",
  other: "その他",
};

const MAIL_TO = process.env.MAIL_TO || "kit.matsufes.syutten@gmail.com";

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }
  return cachedTransporter;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sendToDiscord(args: {
  name: string;
  email: string;
  group: string;
  categoryLabel: string;
  message: string;
}): Promise<void> | null {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return null;

  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "ぴよナビお問い合わせフォーム",
      embeds: [
        {
          title: "📨 " + args.categoryLabel.slice(0, 256) + " についてのお問い合わせ",
          color: 0x6ab04c,
          fields: [
            { name: "お名前", value: args.name.slice(0, 256) },
            { name: "メールアドレス", value: args.email.slice(0, 256) },
            { name: "団体名", value: args.group.slice(0, 256), inline: true },
            { name: "お問い合わせ内容", value: args.message.slice(0, 1024) },
          ],
        },
      ],
    }),
  }).then(async (res) => {
    if (!res.ok) {
      throw new Error(`Discord webhook failed: ${res.status} ${await res.text()}`);
    }
  });
}

function sendToEmail(args: {
  name: string;
  email: string;
  group: string;
  categoryLabel: string;
  message: string;
}): Promise<void> | null {
  const transporter = getTransporter();
  if (!transporter) return null;

  const rows: Array<[string, string]> = [
    ["お名前", args.name],
    ["メールアドレス", args.email],
    ["団体名", args.group],
    ["お問い合わせ種別", args.categoryLabel],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><th style="text-align:left;padding:8px 12px;background:#f3efe6;border:1px solid #e3dccb;white-space:nowrap;">${escapeHtml(
          label,
        )}</th><td style="padding:8px 12px;border:1px solid #e3dccb;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;color:#4A3527;">
  <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">${tableRows}</table>
  <h3 style="margin:0 0 8px;">お問い合わせ内容</h3>
  <div style="padding:12px;background:#faf8f3;border:1px solid #e3dccb;border-radius:8px;white-space:pre-wrap;">${escapeHtml(
    args.message,
  )}</div>
</div>`;

  const text = [
    `お名前: ${args.name}`,
    `メールアドレス: ${args.email}`,
    `団体名: ${args.group}`,
    `お問い合わせ種別: ${args.categoryLabel}`,
    "",
    "お問い合わせ内容:",
    args.message,
  ].join("\n");

  return transporter
    .sendMail({
      from: `ぴよナビお問い合わせフォーム`,
      to: MAIL_TO,
      replyTo: args.email,
      subject: `【ぴよナビお問い合わせフォーム】${args.categoryLabel} - ${args.group}様`,
      html,
      text,
    })
    .then(() => undefined);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const group = (body.group ?? "").trim();
  const category = (body.category ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !group || !category || !message) {
    return NextResponse.json({ ok: false, error: "必須項目が未入力です。" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }

  const args = {
    name,
    email,
    group,
    categoryLabel: CATEGORY_LABELS[category] ?? category,
    message,
  };

  const tasks = [sendToDiscord(args), sendToEmail(args)].filter(
    (task): task is Promise<void> => task !== null,
  );

  if (tasks.length === 0) {
    console.error(
      "Contact form: 送信先が未設定です (DISCORD_WEBHOOK_URL / GMAIL_USER のいずれかを設定してください)",
    );
    return NextResponse.json(
      { ok: false, error: "送信先が設定されていません。管理者にお問い合わせください。" },
      { status: 500 },
    );
  }

  const results = await Promise.allSettled(tasks);
  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("Contact form delivery error:", result.reason);
    }
  });

  const allFailed = results.every((result) => result.status === "rejected");
  if (allFailed) {
    return NextResponse.json(
      { ok: false, error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
