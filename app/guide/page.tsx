"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./guide.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function GuidePage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image
                src="/imgs/sprout.svg"
                alt=""
                width={40}
                height={28}
                className={styles.sprout}
              />
              <h1 className={styles.title}>{t.pages.guide.title}</h1>
            </div>
            <p className={styles.lead}>{t.pages.guide.lead}</p>
          </header>

          <ol className={styles.steps}>
            {t.pages.guide.steps.map((s, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <div className={styles.stepBody}>
                  <h2 className={styles.stepTitle}>{s.title}</h2>
                  <div className={styles.stepCard}>
                    <p className={styles.stepText}>{s.text}</p>
                    {s.cta && (
                      <Link href={s.cta.href} className={styles.stepCta}>
                        {s.cta.label}
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}
