"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./login.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function LoginPage() {
  const t = useTranslation();
  const [error, setError] = useState("");

  return (
    <div className={styles.wrap}>
      <div className={styles.patternBg} aria-hidden="true" />

      <Link href="/" className={styles.closeBtn} aria-label={t.pages.login.closeAlt}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </Link>

      <div className={styles.mascot}>
        <Image src="/imgs/matsu-hurry.png" alt="" width={200} height={200} />
      </div>

      <main className={styles.card}>
        <h1 className={styles.brand}>
          <Image
            src="/imgs/piyo-navi-logo.svg"
            alt={t.pages.login.logoAlt}
            width={350}
            height={77}
            priority
          />
        </h1>
        <h2 className={styles.title}>{t.pages.login.title}</h2>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setError(t.pages.login.error);
          }}
        >
          <label className={styles.field}>
            <input
              type="text"
              placeholder={t.pages.login.placeholders.groupNumber}
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            <input
              type="password"
              placeholder={t.pages.login.placeholders.password}
              className={styles.input}
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.submitWrap}>
            <button type="submit" className={styles.submitBtn}>
              {t.pages.login.submit}<br />{t.pages.login.submitLine2}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
