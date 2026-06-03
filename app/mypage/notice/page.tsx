"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function NoticePage() {
  const t = useTranslation();
  const items = [
    {
      date: "2026-06-03",
      title: t("出展団体ポータル『ぴよナビ』が公開されました！", "The exhibitor portal “Piyo Navi” has been released!"),
    },
  ];
  return (
    <>
      <h1 className={styles.pageTitle}>{t("おしらせ", "Notices")}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((n, i) => (
          <div key={i} className={styles.singleTaskCard}>
            <div className={styles.singleTaskText}>
              <h3>{n.title}</h3>
              <p>{n.date}</p>
            </div>
            <span className={styles.taskBadge}>{t("詳細を見る", "View details")}</span>
          </div>
        ))}
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt={t("眠っているマスコット", "Sleeping mascot")} width={150} height={150} />
      </div>
    </>
  );
}
