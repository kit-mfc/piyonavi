"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./faq.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function FaqPage() {
  const t = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(1);

  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <span className={styles.qa}>{t.pages.faq.qaLabel}</span>
              <h1 className={styles.title}>{t.pages.faq.title}</h1>
            </div>
          </header>

          <ul className={styles.list}>
            {t.pages.faq.faqs.map((item, i) => {
              const open = openIdx === i;
              return (
                <li key={i} className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
                  <button
                    type="button"
                    className={styles.qBtn}
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className={styles.qMark}>Q</span>
                    <span className={styles.qText}>{item.q}</span>
                    <span className={`${styles.caret} ${open ? styles.caretOpen : ""}`} aria-hidden="true">
                      ﹀
                    </span>
                  </button>
                  <div className={`${styles.aWrap} ${open ? styles.aWrapOpen : ""}`}>
                    <div className={styles.aInner}>
                      <div className={styles.aBody}>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
