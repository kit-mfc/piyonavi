"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./about.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function AboutPage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>{t.pages.about.title}</span>
            </div>
          </div>
          <div className={styles.body}>
            {t.pages.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
