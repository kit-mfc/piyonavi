"use client";

import Image from "next/image";
import styles from "../mypage.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

export default function TasksPage() {
  const t = useTranslation();
  return (
    <>
      <h1 className={styles.pageTitle}>{t.pages.mypageTasks.title}</h1>

      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>{t.pages.mypageTasks.sampleTaskName}</h3>
          <p>{t.pages.mypageTasks.sampleTaskDeadline}</p>
        </div>
        <span className={styles.taskBadge}>{t.pages.mypageTasks.badge}</span>
      </div>

      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
