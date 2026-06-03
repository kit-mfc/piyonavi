"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function PaymentPage() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.pageTitle}>{t("支払い情報", "Payment")}</h1>
      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>{t("出展料 / レンタル料の未払いはありません", "No outstanding exhibitor or rental fees")}</h3>
          <p>{t("最終更新：2026/05/26", "Last updated: 2026/05/26")}</p>
        </div>
        <span className={styles.taskBadge}>{t("支払い済み", "Paid")}</span>
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt={t("眠っているマスコット", "Sleeping mascot")} width={150} height={150} />
      </div>
    </>
  );
}
