"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./diagnosis.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function DiagnosisPage() {
  const t = useTranslation();
  const lead = t(
    "あなたの出展形態を、こちらのチャートで診断することができます。\n自分の出展形態がわからない方は、ぜひお試しください。\n個人出展以外は、複数の出展形態を兼ねることも可能です。",
    "Use this chart to find out your exhibition type.\nIf you're unsure which type fits your group, give it a try. You can also have multiple exhibition types except for individual exhibits."
  ).split("\n");

  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t("出展形態診断", "Exhibition Type Quiz")}</h1>
            </div>
            <p className={styles.lead}>
              {lead.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < lead.length - 1 && <br />}
                </span>
              ))}
            </p>
            <Link href="/exhibition-types" className={styles.soloCta}>
              <span className={styles.soloCtaLabel}>
                {t("出展形態の詳細はこちら", "See exhibition type details")}
              </span>
              <span className={styles.soloCtaArrow} aria-hidden="true">
                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FFFFFF" fillOpacity="0.5" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M17 12.5L25 20L17 27.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </header>

          <Link href="/exhibition-types" className={styles.chartScroll}>
            <Image
              src="/imgs/diagnosis.svg"
              alt={t("出展形態診断チャート", "Exhibition type quiz chart")}
              width={1346}
              height={1700}
              className={`${styles.chartImage} ${styles.chartImagePc}`}
            />
            <Image
              src="/imgs/diagnosis_sm.svg"
              alt={t("出展形態診断チャート", "Exhibition type quiz chart")}
              width={363}
              height={1232}
              className={`${styles.chartImage} ${styles.chartImageSm}`}
            />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
