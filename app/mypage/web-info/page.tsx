"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function WebInfoPage() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.pageTitle}>{t.pages.mypageWebInfo.title}</h1>
      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>{t.pages.mypageWebInfo.cardTitle}</h3>
          <p>{t.pages.mypageWebInfo.cardBody}</p>
        </div>
        <span className={styles.taskBadge}>{t.pages.mypageWebInfo.badge}</span>
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
