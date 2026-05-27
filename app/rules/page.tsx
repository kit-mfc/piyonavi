"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./rules.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function RulesPage() {
  const t = useTranslation();
  const lead = t.pages.rules.lead.split("\n");
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t.pages.rules.title}</h1>
            </div>
            <p className={styles.lead}>
              {lead.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < lead.length - 1 && <br />}
                </span>
              ))}
            </p>
          </header>
          <div className={styles.buttonWrap}>
            <a
              href="/出展規約.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--green btn--with-arrow ${styles.btn}`}
            >
              {t.pages.rules.button}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
