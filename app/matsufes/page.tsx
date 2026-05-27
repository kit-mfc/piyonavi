import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./matsufes.module.css";

export default function MatsugasakiSaiPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>松ヶ崎祭とは</span>
            </div>
          </div>
          <div className={styles.body}>
            <p>
              松ヶ崎祭は、京都工芸繊維大学松ヶ崎キャンパスで開催される大学祭です。
              学生団体・サークル・研究室などによる多彩な出展が並び、
              学内外から多くの来場者をお迎えする、年に一度のお祭りです。
            </p>
            <p>
              飲食・物販・展示・パフォーマンスなど、さまざまな形態で出展が行われ、
              キャンパス全体が活気に包まれます。
              地域の皆さまや受験生の方々にも、大学の雰囲気を感じていただける機会となっています。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
