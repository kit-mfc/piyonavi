"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

type FormState = {
  name: string;
  email: string;
  group: string;
  category: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  group: "",
  category: "",
  message: "",
};

export default function ContactPage() {
  const t = useTranslation();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t("お問い合わせ", "Contact")}</h1>
            </div>
            <p className={styles.lead}>{t("ご不明点やご相談がありましたら、以下のフォームよりお問い合わせください。\nご記入いただいたメールアドレス宛に回答をお送りします。", "If you have any questions or concerns, please reach out using the form below. We will respond to the email address you provide.")}</p>
          </header>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>{t("お名前", "Name")}</span>
              <input type="text" className={styles.input} value={form.name} onChange={update("name")} required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t("メールアドレス", "Email")}</span>
              <input type="email" className={styles.input} value={form.email} onChange={update("email")} required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t("団体名", "Group name")}</span>
              <input
                type="text"
                className={styles.input}
                placeholder={t("個人出展の場合は「個人」とお書きください", 'For individual exhibits, please write "Individual"')}
                value={form.group}
                onChange={update("group")}
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t("お問い合わせ種別", "Inquiry category")}</span>
              <select className={`${styles.input} ${styles.select}`} value={form.category} onChange={update("category")} required>
                <option value="" disabled>{t("選択してください", "Please select")}</option>
                <option value="general">{t("松ヶ崎祭全般", "Matsugasaki Festival (general)")}</option>
                <option value="food">{t("飲食", "Food & drink")}</option>
                <option value="exhibition">{t("展示･物販", "Exhibition & sales")}</option>
                <option value="performance">{t("パフォーマンス", "Performance")}</option>
                <option value="tent">{t("手づくりテント", "Handmade tent")}</option>
                <option value="experience">{t("体験", "Hands-on activities")}</option>
                <option value="individual">{t("個人出展", "Individual exhibit")}</option>
                <option value="research">{t("研究紹介", "Research presentation")}</option>
                <option value="accounting">{t("会計", "Accounting")}</option>
                <option value="other">{t("その他", "Other")}</option>
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t("お問い合わせ内容", "Message")}</span>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                rows={5}
                placeholder={t("お問い合わせ内容を入力してください。", "Please enter your message.")}
                value={form.message}
                onChange={update("message")}
                required
              />
            </label>

            {status === "success" && (
              <p className={`${styles.status} ${styles.statusSuccess}`}>
                {t("送信しました。お問い合わせありがとうございます。", "Your message has been sent. Thank you for contacting us.")}
              </p>
            )}
            {status === "error" && (
              <p className={`${styles.status} ${styles.statusError}`}>
                {t("送信に失敗しました。時間をおいて再度お試しください。", "Failed to send. Please try again later.")}
              </p>
            )}

            <div className={styles.actions}>
              <button type="submit" className="btn btn--green" disabled={status === "sending"}>
                {status === "sending" ? t("送信中…", "Sending…") : t("送信する", "Send")}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
