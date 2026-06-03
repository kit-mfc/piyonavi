"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function MyPageContactPage() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.pageTitle}>{t("お問い合わせ", "Contact")}</h1>
      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>{t("ご質問・ご相談はこちらから", "Questions and inquiries here")}</h3>
          <p>{t("担当より2〜3営業日でご連絡いたします。", "A staff member will respond within 2–3 business days.")}</p>
        </div>
        <span className={styles.taskBadge}>{t("問い合わせる", "Inquire")}</span>
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt={t("眠っているマスコット", "Sleeping mascot")} width={150} height={150} />
      </div>
    </>
  );
}
