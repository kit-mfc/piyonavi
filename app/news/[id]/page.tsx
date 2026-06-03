"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../about/about.module.css";
import { useLanguage } from "../../i18n/LanguageProvider";
import { getNewsItem } from "../newsData";

export default function NewsDetailPage() {
  const { t, lang } = useLanguage();
  const params = useParams<{ id: string }>();
  const item = getNewsItem(params.id);

  if (!item) {
    notFound();
  }

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

          <article className={styles.article}>
            <p className={styles.articleDate}>{item.date}</p>
            <h1 className={styles.articleTitle}>{item.title[lang]}</h1>
            <div className={styles.body}>
              {item.body.map((paragraph, i) => (
                <p key={i}>{paragraph[lang]}</p>
              ))}
            </div>
          </article>

          <Link href="/news" className={styles.backLink}>
            <span className={styles.backArrow} aria-hidden="true">
              <svg viewBox="0 0 8 12" width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 1.5L1.5 6L6.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {t("お知らせ一覧へ戻る", "Back to news list")}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
