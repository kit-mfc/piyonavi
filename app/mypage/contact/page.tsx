import Image from "next/image";
import styles from "../mypage.module.css";

export default function MyPageContactPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>お問い合わせ</h1>
      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>ご質問・ご相談はこちらから</h3>
          <p>担当より2〜3営業日でご連絡いたします。</p>
        </div>
        <span className={styles.taskBadge}>問い合わせる</span>
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
