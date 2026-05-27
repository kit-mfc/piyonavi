import Image from "next/image";
import styles from "../mypage.module.css";

export default function PaymentPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>支払い情報</h1>
      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>出展料 / レンタル料の未払いはありません</h3>
          <p>最終更新：2026/05/26</p>
        </div>
        <span className={styles.taskBadge}>支払い済み</span>
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
