import Image from "next/image";
import styles from "../mypage.module.css";

const notices = [
  { date: "2026-05-30", title: "出展団体ポータル『ぴよナビ』が公開されました！" },
  { date: "2026-05-15", title: "出展申込フォームの受付を開始しました。" },
  { date: "2026-04-01", title: "松ヶ崎祭2026 開催決定のお知らせ" },
];

export default function NoticePage() {
  return (
    <>
      <h1 className={styles.pageTitle}>おしらせ</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {notices.map((n, i) => (
          <div key={i} className={styles.singleTaskCard}>
            <div className={styles.singleTaskText}>
              <h3>{n.title}</h3>
              <p>{n.date}</p>
            </div>
            <span className={styles.taskBadge}>詳細を見る</span>
          </div>
        ))}
      </div>
      <div className={styles.mascot}>
        <Image src="/imgs/matsu-sleeping.png" alt="" width={150} height={150} />
      </div>
    </>
  );
}
