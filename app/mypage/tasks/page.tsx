"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function TasksPage() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.pageTitle}>{t("タスク管理", "Tasks")}</h1>

      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>{t("パンフレット掲載用画像の提出", "Submit pamphlet image")}</h3>
          <p>{t("締切：2026/08/31 23:59", "Deadline: 2026/08/31 23:59")}</p>
        </div>
        <span className={styles.taskBadge}>{t("残り100日", "100 days left")}</span>
      </div>

      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt={t("眠っているマスコット", "Sleeping mascot")} width={150} height={150} />
      </div>
    </>
  );
}
