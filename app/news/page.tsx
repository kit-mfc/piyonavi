"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../about/about.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function NewsPage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>{t.pages.news.title}</span>
            </div>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.pages.news.items.map((n, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: "var(--color-white)",
                  borderRadius: 999,
                  padding: "14px 28px",
                  display: "flex",
                  gap: 24,
                  alignItems: "center",
                  fontSize: 13,
                }}
              >
                <span style={{ color: "var(--color-text-muted)", flexShrink: 0 }}>{n.date}</span>
                <span>{n.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
