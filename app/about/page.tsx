import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>ぴよナビとは</span>
            </div>
          </div>
          <div className={styles.body}>
            <p>松ヶ崎祭における、出展者向けのポータルサイトです。</p>
            <p>
              ぴよナビでは、出展申込から松ヶ崎祭当日までに必要な情報を、
              ひとつの場所でまとめて確認・管理することができます。
              各種提出物の管理、お支払い情報の確認、最新のお知らせの受け取りなど、
              出展団体の皆さまの負担を少しでも軽くできるよう設計しています。
            </p>
            <p>
              ご不明点やご相談は、お問い合わせフォームよりお気軽にお寄せください。
              松ヶ崎祭実行委員会一同、皆さまのご出展を心よりお待ちしております。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
