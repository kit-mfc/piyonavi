"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import { useTranslation } from "./i18n/LanguageProvider";

export default function HomePage() {
  const t = useTranslation();
  const lead = t.pages.home.lead.split("\n");
  const topics = [
    { ...t.pages.home.topics.matsufes, href: "/matsufes" },
    { ...t.pages.home.topics.about, href: "/about" },
    { ...t.pages.home.topics.guide, href: "/guide" },
    { ...t.pages.home.topics.diagnosis, href: "/diagnosis" },
    { ...t.pages.home.topics.m1, href: "/m-1" },
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
                alt=""
                width={64}
                height={64}
              />
            </span>
            <span className={styles.heroLoginCardText}>
              <span>{t.pages.home.loginCardLine1}</span>
              <span>{t.pages.home.loginCardLine2}</span>
            </span>
          </Link>
          <h1 className={styles.heroTitle}>
            <Image
              src="/imgs/piyo-navi-logo-2.svg"
              alt={t.pages.home.logoAlt}
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
            {lead.map((line, i) => (
              <span key={i}>
                {line}
                {i < lead.length - 1 && <br />}
              </span>
            ))}
          </p>
          <Link href="/login" className="btn btn--green">{t.pages.home.loginButton}</Link>
          <div className={styles.scrollIndicator} aria-hidden="true">
            <span className={styles.scrollIndicatorText}>{t.pages.home.scroll}</span>
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
            <h2 className={styles.sectionTitle}>{t.pages.home.topicsHeading}</h2>
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
            <h2 className={styles.sectionTitle}>{t.pages.home.newsHeading}</h2>
          </div>
          <div className={styles.newsList}>
            {t.pages.home.news.map((n, i) => (
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
