import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./page.module.css";

const topics = [
  { title: "松ヶ崎祭とは", text: "松ヶ崎祭の概要や歴史をご紹介します。", href: "/matsufes" },
  { title: "ぴよナビとは", text: "ポータルの使い方や機能をご紹介します。", href: "/about" },
  { title: "出展ガイド", text: "申し込みから当日までの流れをご案内します。", href: "/guide" },
  { title: "出展形態診断", text: "あなたの出展形態がわかる診断チャート。", href: "/diagnosis" },
  { title: "m-1グランプリについて", text: "m-1グランプリに関する情報はこちら。", href: "/m-1" },
];

const news = [
  { date: "2026-05-30", text: "松ヶ崎祭出展団体ポータル『ぴよナビ』が公開されました！" },
];

export default function HomePage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="page-main">
        <section className={styles.hero}>
          <Link href="/login" className={styles.heroLoginCard}>
            <span className={styles.heroLoginCardIcon}>
              <Image
                src="/imgs/login-child.svg"
                alt=""
                width={64}
                height={64}
              />
            </span>
            <span className={styles.heroLoginCardText}>
              <span>ログインは</span>
              <span>こちらから</span>
            </span>
          </Link>
          <h1 className={styles.heroTitle}>
            <Image
              src="/imgs/piyo-navi-logo-2.svg"
              alt="ぴよナビ"
              width={350}
              height={77}
              priority
            />
          </h1>
          <Image
            className={styles.heroSprout}
            src="/imgs/icon.svg"
            alt=""
            width={48}
            height={32}
          />
          <p className={styles.heroLead}>
            出展者向けの情報提供・提出物管理ポータルサイトです。<br />
            出展に必要な情報の確認・各種出展物の管理を行えます。
          </p>
          <Link href="/login" className="btn btn--green">団体ログイン</Link>
          <div className={styles.scrollIndicator} aria-hidden="true">
            <span className={styles.scrollIndicatorText}>SCROLL</span>
            <span className={styles.scrollIndicatorDot} />
            <span className={styles.scrollIndicatorLine} />
            <svg className={styles.scrollIndicatorArrow} viewBox="0 0 12 8" fill="none">
              <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
            </svg>
          </div>
        </section>

        <section className={styles.topics}>
          <div className={styles.sectionHeading}>
            <Image src="/imgs/sprout.svg" alt="" width={32} height={32} className={styles.sectionSprout} />
            <h2 className={styles.sectionTitle}>トピックス</h2>
          </div>
          <div className={styles.topicsGrid}>
            {topics.map((t) => {
              const suffix = "について";
              const hasSuffix = t.title.endsWith(suffix);
              const main = hasSuffix ? t.title.slice(0, -suffix.length) : t.title;
              return (
              <Link key={t.title} href={t.href} className={styles.topicCard}>
                <h3>
                  {main}
                  {hasSuffix && <span className={styles.topicCardTitleSuffix}>{suffix}</span>}
                </h3>
                <p>{t.text}</p>
                <span className={styles.topicCardArrow} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 7l8 5-8 5V7z" fill="#828282"/>
                  </svg>
                </span>
              </Link>
              );
            })}
          </div>
        </section>

        <section className={styles.news}>
          <div className={styles.sectionHeading}>
            <Image src="/imgs/sprout.svg" alt="" width={32} height={32} className={styles.sectionSprout} />
            <h2 className={styles.sectionTitle}>お知らせ</h2>
          </div>
          <div className={styles.newsList}>
            {news.map((n, i) => (
              <Link key={i} href="/news" className={styles.newsItem}>
                <span className={styles.newsDate}>{n.date}</span>
                <span className={styles.newsText}>{n.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className={styles.mascotRow}>
          <Image src="/imgs/matsu-flying.png" alt="" width={140} height={140} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
