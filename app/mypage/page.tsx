"use client";

import Image from "next/image";
import styles from "./mypage.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function MyPageHome() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.greeting}>{t("こんにちは、出展団体Aさん", "Hello, Exhibitor Group A")}</h1>
      <p className={styles.groupId}>{t("団体番号　0000", "Group No.　0000")}</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t("未提出タスク", "Unsubmitted tasks")}</span>
          <Image src="/imgs/icon-task.svg" alt={t("未提出タスク", "Unsubmitted tasks")} width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t("期限間近", "Upcoming deadlines")}</span>
          <Image src="/imgs/icon-deadline.svg" alt={t("期限間近", "Upcoming deadlines")} width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t("未払い金額", "Unpaid balance")}</span>
          <Image src="/imgs/icon-payment.svg" alt={t("未払い金額", "Unpaid balance")} width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t("WEB公開情報", "Web info")}</span>
          <Image src="/imgs/icon-web.svg" alt={t("WEB公開情報", "Web info")} width={28} height={28} className={styles.cardIcon} />
        </div>
      </div>

      <div className={styles.gridSecondary}>
        <div className={styles.taskCard}>
          <div className={styles.cardHead}>
            <h3>{t("締切の近いタスク", "Tasks with upcoming deadlines")}</h3>
            <Image src="/imgs/icon-task.svg" alt={t("締切の近いタスク", "Tasks with upcoming deadlines")} width={20} height={20} />
          </div>
          <p className={styles.note}>{t("提出期限の早い順に表示しています。", "Sorted by the earliest deadline.")}</p>
          <div className={styles.taskItem}>
            <span className={styles.taskName}>{t("パンフレット掲載用画像の提出", "Submit pamphlet image")}</span>
            <span className={styles.taskMeta}>
              {t("締切：2026/08/31 23:59　", "Deadline: 2026/08/31 23:59　")}
              <strong>{t("残り100日", "100 days left")}</strong>
            </span>
          </div>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
        </div>
        <div className={styles.noticeCard}>
          <div className={styles.cardHead}>
            <h3>{t("おしらせ", "Notices")}</h3>
            <Image src="/imgs/icon-notice.svg" alt={t("おしらせ", "Notices")} width={20} height={20} />
          </div>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
        </div>
      </div>

      <div className={styles.mascot}>
        <Image src="/imgs/matsu-reading.png" alt={t("本を読むマスコット", "Mascot reading a book")} width={150} height={150} />
      </div>
    </>
  );
}
