"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./rules.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function RulesPage() {
  const t = useTranslation();
  const lead = t(
    "出展にあたり以下の規約を必ずご確認ください。\n出展申込みをもって、本規約に同意したものとみなします。",
    "Please review the following rules before exhibiting.\nSubmitting an application is taken as agreement to these rules."
  ).split("\n");
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t("出展規約", "Exhibitor Rules")}</h1>
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
              href="/第56回松ヶ崎祭出展規約.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.soloCta}
            >
              <span className={styles.soloCtaLabel}>
                {t("出展規約を確認する", "View the exhibitor rules")}
              </span>
              <span className={styles.soloCtaArrow} aria-hidden="true">
                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FFFFFF" fillOpacity="0.5" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M17 12.5L25 20L17 27.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
          <div className={styles.buttonWrap}>
            <a
              href="/第56回松ヶ崎祭個人出展規約.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.soloCta}
            >
              <span className={styles.soloCtaLabel}>
                {t("個人出展規約を確認する", "View the individual exhibitor rules")}
              </span>
              <span className={styles.soloCtaArrow} aria-hidden="true">
                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FFFFFF" fillOpacity="0.5" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M17 12.5L25 20L17 27.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
