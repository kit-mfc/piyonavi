"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function NoticePage() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.pageTitle}>{t.pages.mypageNotice.title}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {t.pages.mypageNotice.items.map((n, i) => (
          <div key={i} className={styles.singleTaskCard}>
            <div className={styles.singleTaskText}>
              <h3>{n.title}</h3>
              <p>{n.date}</p>
            </div>
            <span className={styles.taskBadge}>{t.pages.mypageNotice.badge}</span>
          </div>
        ))}
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
