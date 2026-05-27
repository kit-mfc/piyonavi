import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./types.module.css";

const types = [
  {
    title: "飲食",
    en: "food",
    icon: "/imgs/icon-food.svg",
    text: "飲食物を調理・販売する模擬店です。食品衛生に関する規定を遵守してください。",
    submissions: ["参加同意書", "調理工程表", "調理者名簿", "レンタルフォーム", "提供食品名簿フォーム", "電源申請フォーム", "パンフレット/webページ掲載情報フォーム"],
  },
  {
    title: "物販",
    en: "goods",
    icon: "/imgs/icon-goods.svg",
    text: "飲食以外の物品を販売する模擬店です。",
    submissions: ["参加同意書", "レンタルフォーム", "電源申請フォーム", "パンフレット/webページ掲載情報フォーム"],
  },
  {
    title: "パフォーマンス",
    en: "performance",
    icon: "/imgs/icon-performance.svg",
    text: "音楽・ダンス・演劇等のパフォーマンスを行う出展形態です。",
    submissions: ["参加同意書", "ステージ使用リクエスト", "パンフレット/webページ掲載情報フォーム"],
  },
  {
    title: "展示",
    en: "exhibition",
    icon: "/imgs/icon-exhibition.svg",
    text: "教室や屋外スペースでの展示を行う出展形態です。",
    submissions: ["参加同意書", "レンタルフォーム", "電源申請フォーム", "パンフレット/webページ掲載情報フォーム"],
  },
  {
    title: "手作りテント",
    en: "handmade tent",
    icon: "/imgs/icon-tent.svg",
    text: "手作りのテントを設計して出展する形態です。",
    submissions: ["参加同意書", "手作りテント設計図", "手作りテント希望区画フォーム", "レンタルフォーム", "発電申請フォーム", "パンフレット/webページ掲載情報フォーム"],
  },
  {
    title: "体験",
    en: "experience",
    icon: "/imgs/icon-experience.svg",
    text: "来場者の方が体験できる出展を行う形態です。",
    submissions: ["参加同意書", "レンタルフォーム", "パンフレット/webページ掲載情報フォーム"],
  },
  {
    title: "個人出展",
    en: "solo exhibition",
    icon: "/imgs/icon-solo.svg",
    text: "個人で物販や展示を行う出展形態です。",
    submissions: ["参加同意書", "パンフレット/webページ掲載情報フォーム"],
  },
];

export default function ExhibitionTypesPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>出展形態の紹介</h1>
            </div>
            <p className={styles.lead}>各出展形態の概要と必要な提出物をご案内します。</p>
            <Link href="/diagnosis" className={styles.diagnosisBtn}>
              <Image src="/imgs/sprout.svg" alt="" width={20} height={14} className={styles.diagnosisIcon} />
              出展形態診断はこちら
              <span className={styles.diagnosisArrow} aria-hidden="true">→</span>
            </Link>
          </header>
          <ul className={styles.list}>
            {types.map((t) => (
              <li key={t.title} className={styles.card}>
                <header className={styles.cardHead}>
                  <Image src={t.icon} alt="" width={28} height={28} className={styles.cardIcon} />
                  <h2>{t.title}</h2>
                  <span className={styles.tag}>{t.en}</span>
                </header>
                <p className={styles.cardText}>{t.text}</p>
                <div className={styles.subBlock}>
                  <span className={styles.subLabel}>必要な提出物</span>
                  <ul className={styles.subList}>
                    {t.submissions.map((s) => (
                      <li key={s}>・{s}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
