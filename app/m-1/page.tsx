import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./m-1.module.css";

export default function M1Page() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>m-1グランプリとは</span>
            </div>
          </div>
          <div className={styles.body}>
            <p>
              m-1（マツワン）グランプリは、来場者さまの投票によって出展形態ごとのNo.1を決定する、松ヶ崎祭の目玉企画です。
              来場者さま一人ひとりの「いちばん良かった！」が、各部門の頂点を選び出します。
            </p>
            <p>
              見事1位に輝いた出展には、栄誉とともに豪華商品が贈られます。
            </p>
            <p>
              詳細は出展者団体説明会や松ヶ崎祭HPで発表されます。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
