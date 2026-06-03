"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import { useTranslation } from "./i18n/LanguageProvider";

export default function HomePage() {
  const t = useTranslation();
  const lead = t(
    "出展者向けの情報提供・提出物管理ポータルサイトです。\n出展に必要な情報の確認・各種出展物の管理を行えます。",
    "An information and submission portal for exhibitors.\nCheck the information you need and manage your exhibitor materials."
  ).split("\n");
  const topics = [
    {
      title: t("松ヶ崎祭とは", "About Matsugasaki Festival"),
      text: t(
        "松ヶ崎祭の概要を\nご紹介します。",
        "Learn about the overview of the Matsugasaki Festival."
      ),
      href: "/matsufes",
    },
    {
      title: t("ぴよナビとは", "About Piyo Navi"),
      text: t(
        "ポータルの使い方や機能を\nご紹介します。",
        "Learn how to use this portal and its features."
      ),
      href: "/about",
    },
    {
      title: t("出展ガイド", "Exhibitor Guide"),
      text: t(
        "申込みから当日までの流れを\nご案内します。",
        "A walkthrough from application to the day of the festival."
      ),
      href: "/guide",
    },
    {
      title: t("出展形態診断", "Exhibition Type Quiz"),
      text: t(
        "あなたの出展形態がわかる\n診断チャート。",
        "A chart that helps you find your exhibition type."
      ),
      href: "/diagnosis",
    },
    {
      title: t("m-1グランプリについて", "About the m-1 Grand Prix"),
      text: t(
        "m-1グランプリに\n関する情報はこちら。",
        "Information about the m-1 Grand Prix."
      ),
      href: "/m-1",
    },
  ];
  const news = [
    {
      date: "2026-06-03",
      text: t(
        "松ヶ崎祭出展者用ポータル『ぴよナビ』が公開されました！",
        "The Matsugasaki Festival exhibitor portal “Piyo Navi” has been released!"
      ),
    },
  ];

  return (
    <div className="page-wrap">
      <Header />
      <main className="page-main">
        <section className={styles.hero}>
          <Link href="/login" className={styles.heroLoginCard}>
            <span className={styles.heroLoginCardIcon}>
              <Image
                src="/imgs/login-child.svg"
                alt={t("ログインするひよこ", "Chick logging in")}
                width={64}
                height={64}
              />
            </span>
            <span className={styles.heroLoginCardText}>
              <span>{t("ログインは", "Log in")}</span>
              <span>{t("こちらから", "from here")}</span>
            </span>
          </Link>
          <h1 className={styles.heroTitle}>
            <Image
              src="/imgs/piyo-navi-logo-2.svg"
              alt={t("ぴよナビ", "Piyo Navi")}
              width={350}
              height={77}
              priority
            />
          </h1>
          <Image
            className={styles.heroSprout}
            src="/imgs/icon.svg"
            alt={t("ぴよナビのアイコン", "Piyo Navi icon")}
            width={48}
            height={32}
          />
          <p className={styles.heroLead}>
            {lead.map((line, i) => (
              <span key={i}>
                {line}
                {i < lead.length - 1 && <br />}
              </span>
            ))}
          </p>
          <Link href="/login" className="btn btn--green">{t("団体ログイン", "Exhibitor Login")}</Link>
          <div className={styles.scrollIndicator} aria-hidden="true">
            <span className={styles.scrollIndicatorText}>{t("SCROLL", "SCROLL")}</span>
            <span className={styles.scrollIndicatorDot} />
            <span className={styles.scrollIndicatorLine} />
            <svg className={styles.scrollIndicatorArrow} viewBox="0 0 12 8" fill="none">
              <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
            </svg>
          </div>
        </section>

        <section className={styles.topics}>
          <div className={styles.sectionHeading}>
            <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={32} height={32} className={styles.sectionSprout} />
            <h2 className={styles.sectionTitle}>{t("トピックス", "Topics")}</h2>
          </div>
          <div className={styles.topicsGrid}>
            {topics.map((topic) => {
              const suffix = "について";
              const hasSuffix = topic.title.endsWith(suffix);
              const main = hasSuffix ? topic.title.slice(0, -suffix.length) : topic.title;
              return (
                <Link key={topic.href} href={topic.href} className={styles.topicCard}>
                  <h3>
                    {main}
                    {hasSuffix && <span className={styles.topicCardTitleSuffix}>{suffix}</span>}
                  </h3>
                  <p>{topic.text}</p>
                  <span className={styles.topicCardArrow} aria-hidden="true">
                    <svg viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32.5" cy="32.5" r="32" fill="white" stroke="#828282"/>
                      <path d="M28.0598 44L40 33.1312" stroke="#828282" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M28 22L39.9402 32.8688" stroke="#828282" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className={styles.news}>
          <div className={styles.sectionHeading}>
            <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={32} height={32} className={styles.sectionSprout} />
            <h2 className={styles.sectionTitle}>{t("お知らせ", "News")}</h2>
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
          <Image src="/imgs/matsu-flying.png" alt={t("空を飛ぶマスコット", "Flying mascot")} width={140} height={140} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
