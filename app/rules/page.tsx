import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./rules.module.css";

export default function RulesPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>出展規約</h1>
            </div>
            <p className={styles.lead}>
              出展にあたり以下の規約を必ずご確認ください。<br />
              出展申し込みをもって、本規約に同意したものとみなします。
            </p>
          </header>
          <div className={styles.buttonWrap}>
            <a
              href="/出展規約.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--green btn--with-arrow ${styles.btn}`}
            >
              出展規約を確認する
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
