"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./diagnosis.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function DiagnosisPage() {
  const t = useTranslation();
  const lead = t.pages.diagnosis.lead.split("\n");

  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t.pages.diagnosis.title}</h1>
            </div>
            <p className={styles.lead}>
              {lead.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < lead.length - 1 && <br />}
                </span>
              ))}
            </p>
            <Link href="/exhibition-types" className={styles.detailBtn}>
              <Image src="/imgs/sprout.svg" alt="" width={20} height={14} className={styles.detailIcon} />
              {t.pages.diagnosis.detailButton}
              <span className={styles.detailArrow} aria-hidden="true">→</span>
            </Link>
          </header>

          <div className={styles.chartScroll}>
            <Image
              src="/imgs/diagnosis.svg"
              alt={t.pages.diagnosis.chartAlt}
              width={1346}
              height={1700}
              className={styles.chartImage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
