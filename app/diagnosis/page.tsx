import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./diagnosis.module.css";

export default function DiagnosisPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>出展形態診断</h1>
            </div>
            <p className={styles.lead}>
              あなたの出展形態を、こちらのチャートで診断することができます。<br />
              自分の出展形態がわからない方は、ぜひお試しください。
            </p>
            <Link href="/exhibition-types" className={styles.detailBtn}>
              <Image src="/imgs/sprout.svg" alt="" width={20} height={14} className={styles.detailIcon} />
              出展形態の詳細はこちら
              <span className={styles.detailArrow} aria-hidden="true">→</span>
            </Link>
          </header>

          <div className={styles.chartScroll}>
            <Image
              src="/imgs/diagnosis.svg"
              alt="出展形態診断チャート"
              width={1346}
              height={1700}
              className={styles.chartImage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
