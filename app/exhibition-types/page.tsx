"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./types.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function ExhibitionTypesPage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t.pages.exhibitionTypes.title}</h1>
            </div>
            <p className={styles.lead}>{t.pages.exhibitionTypes.lead}</p>
            <Link href="/diagnosis" className={styles.diagnosisBtn}>
              <Image src="/imgs/sprout.svg" alt="" width={20} height={14} className={styles.diagnosisIcon} />
              {t.pages.exhibitionTypes.diagnosisButton}
              <span className={styles.diagnosisArrow} aria-hidden="true">→</span>
            </Link>
          </header>
          <ul className={styles.list}>
            {t.pages.exhibitionTypes.types.map((type) => (
              <li key={type.en} className={styles.card}>
                <header className={styles.cardHead}>
                  <Image src={type.icon} alt="" width={28} height={28} className={styles.cardIcon} />
                  <h2>{type.title}</h2>
                  <span className={styles.tag}>{type.en}</span>
                </header>
                <p className={styles.cardText}>{type.text}</p>
                <div className={styles.subBlock}>
                  <span className={styles.subLabel}>{t.pages.exhibitionTypes.submissionsLabel}</span>
                  <ul className={styles.subList}>
                    {type.submissions.map((s) => (
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
