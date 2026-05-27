import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./guide.module.css";

const steps = [
  {
    title: "出展団体説明会への参加",
    text: "出展希望者全員に説明会のご参加をお願いしております。\n日程等は「お知らせ」にて後日告知いたします。",
  },
  {
    title: "出展形態の確認",
    text: "飲食、物販、展示、パフォーマンスなど、出展形態をご確認ください。\n各形態の紹介はこちらをご確認ください。",
    cta: { label: "出展形態の紹介 ›", href: "/exhibition-types" },
  },
  {
    title: "出展規約の確認",
    text: "出展にあたっての規約を必ずご確認ください。\n規約に同意の上、お申込みをお願いします。",
    cta: { label: "出展規約を確認 ›", href: "/rules" },
  },
  {
    title: "出展申し込みフォーム",
    text: "出展団体説明会でご案内する出展申し込みフォームより必要事項を記入し、お申込みください。\n申し込み後、団体番号とパスワードが発行されます。",
  },
  {
    title: "各種提出物の提出",
    text: "マイページにログインし、期限までに必要な提出物を提出してください。\n参加同意書、パンフレット掲載用アイコンなどの提出が必要です。",
  },
  {
    title: "出展料の納入",
    text: "指定の期日までに出展料を納入してください。\n納入金額などはマイページから確認できます。",
  },
  {
    title: "レンタル物品の受け取り",
    text: "レンタルを申請した物品は、指定の日時・場所にて受け取ってください。",
  },
  {
    title: "松ヶ崎祭当日",
    text: "準備を万全にして、松ヶ崎祭当日をお迎えください。\n不明点は松ヶ崎祭実行委員までお問い合わせください。",
  },
];

export default function GuidePage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image
                src="/imgs/sprout.svg"
                alt=""
                width={40}
                height={28}
                className={styles.sprout}
              />
              <h1 className={styles.title}>出展ガイド</h1>
            </div>
            <p className={styles.lead}>
              出展申込から、松ヶ崎祭当日までの流れをご案内します。
            </p>
          </header>

          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <div className={styles.stepBody}>
                  <h2 className={styles.stepTitle}>{s.title}</h2>
                  <div className={styles.stepCard}>
                    <p className={styles.stepText}>{s.text}</p>
                    {s.cta && (
                      <Link href={s.cta.href} className={styles.stepCta}>
                        {s.cta.label}
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}
