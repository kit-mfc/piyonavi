import Image from "next/image";
import styles from "../mypage.module.css";

export default function WebInfoPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>WEB公開情報</h1>
      <div className={styles.singleTaskCard}>
        <div className={styles.singleTaskText}>
          <h3>パンフレット・公式サイトへの掲載情報</h3>
          <p>未編集の項目があります</p>
        </div>
        <span className={styles.taskBadge}>編集する</span>
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
