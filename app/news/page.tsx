"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../about/about.module.css";
import { useLanguage } from "../i18n/LanguageProvider";
import { newsItems } from "./newsData";

export default function NewsPage() {
  const { t, lang } = useLanguage();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>{t("お知らせ", "News")}</span>
            </div>
          </div>
          <ul className={styles.newsList}>
            {newsItems.map((n) => (
              <li key={n.id}>
                <Link href={`/news/${n.id}`} className={styles.newsLink}>
                  <span className={styles.newsDate}>{n.date}</span>
                  <span className={styles.newsTitle}>{n.title[lang]}</span>
                  <span className={styles.newsArrow} aria-hidden="true">
                    <svg viewBox="0 0 8 12" width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
