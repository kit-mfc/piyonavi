"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function WebInfoPage() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.pageTitle}>{t("WEB公開情報", "Web Info")}</h1>
      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>{t("パンフレット・公式サイトへの掲載情報", "Pamphlet & official site listing")}</h3>
          <p>{t("未編集の項目があります", "There are unedited items.")}</p>
        </div>
        <span className={styles.taskBadge}>{t("編集する", "Edit")}</span>
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt={t("眠っているマスコット", "Sleeping mascot")} width={150} height={150} />
      </div>
    </>
  );
}
