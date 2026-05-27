"use client";

import Image from "next/image";
import styles from "./mypage.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function MyPageHome() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.greeting}>{t.pages.mypageHome.greeting}</h1>
      <p className={styles.groupId}>{t.pages.mypageHome.groupId}</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t.pages.mypageHome.cards.tasks}</span>
          <Image src="/imgs/icon-task.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t.pages.mypageHome.cards.deadline}</span>
          <Image src="/imgs/icon-deadline.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t.pages.mypageHome.cards.unpaid}</span>
          <Image src="/imgs/icon-payment.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>{t.pages.mypageHome.cards.web}</span>
          <Image src="/imgs/icon-web.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
      </div>

      <div className={styles.gridSecondary}>
        <div className={styles.taskCard}>
          <div className={styles.cardHead}>
            <h3>{t.pages.mypageHome.tasksHeading}</h3>
            <Image src="/imgs/icon-task.svg" alt="" width={20} height={20} />
          </div>
          <p className={styles.note}>{t.pages.mypageHome.tasksNote}</p>
          <div className={styles.taskItem}>
            <span className={styles.taskName}>{t.pages.mypageHome.sampleTaskName}</span>
            <span className={styles.taskMeta}>
              {t.pages.mypageHome.sampleTaskMeta}
              <strong>{t.pages.mypageHome.sampleTaskMetaRemaining}</strong>
            </span>
          </div>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
        </div>
        <div className={styles.noticeCard}>
          <div className={styles.cardHead}>
            <h3>{t.pages.mypageHome.noticeHeading}</h3>
            <Image src="/imgs/icon-notice.svg" alt="" width={20} height={20} />
          </div>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
        </div>
      </div>

      <div className={styles.mascot}>
        <Image src="/imgs/matsu-reading.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
