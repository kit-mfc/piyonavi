import Image from "next/image";
import styles from "./mypage.module.css";

export default function MyPageHome() {
  return (
    <>
      <h1 className={styles.greeting}>こんにちは、出展団体Aさん</h1>
      <p className={styles.groupId}>団体番号　0000</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardLabel}>未提出タスク</span>
          <Image src="/imgs/icon-task.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>期限間近</span>
          <Image src="/imgs/icon-deadline.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>未払い金額</span>
          <Image src="/imgs/icon-payment.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>WEB公開情報</span>
          <Image src="/imgs/icon-web.svg" alt="" width={28} height={28} className={styles.cardIcon} />
        </div>
      </div>

      <div className={styles.gridSecondary}>
        <div className={styles.taskCard}>
          <div className={styles.cardHead}>
            <h3>締切の近いタスク</h3>
            <Image src="/imgs/icon-task.svg" alt="" width={20} height={20} />
          </div>
          <p className={styles.note}>提出期限の早い順に表示しています。</p>
          <div className={styles.taskItem}>
            <span className={styles.taskName}>パンフレット掲載用画像の提出</span>
            <span className={styles.taskMeta}>締切：2026/08/31 23:59　<strong>残り100日</strong></span>
          </div>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
        </div>
        <div className={styles.noticeCard}>
          <div className={styles.cardHead}>
            <h3>おしらせ</h3>
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
