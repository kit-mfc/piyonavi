import Image from "next/image";
import styles from "../mypage.module.css";

export default function TasksPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>タスク管理</h1>

      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>パンフレット掲載用画像の提出</h3>
          <p>締切：2026/08/31 23:59</p>
        </div>
        <span className={styles.taskBadge}>残り100日</span>
      </div>

      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
