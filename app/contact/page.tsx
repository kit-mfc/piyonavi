"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>お問い合わせ</h1>
            </div>
            <p className={styles.lead}>
              ご不明点やご相談がありましたら、以下のフォームよりお問い合わせください。
            </p>
          </header>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.field}>
              <span className={styles.label}>お名前</span>
              <input type="text" className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>メールアドレス</span>
              <input type="email" className={styles.input} />
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>団体名</span>
                <input type="text" className={styles.input} />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>団体番号 (任意)</span>
                <input type="text" className={styles.input} placeholder="例：A001" />
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>お問い合わせ種別</span>
              <select className={`${styles.input} ${styles.select}`} defaultValue="">
                <option value="" disabled>選択してください</option>
                <option value="general">出展について</option>
                <option value="payment">支払いについて</option>
                <option value="other">その他</option>
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>お問い合わせ内容</span>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                rows={5}
                placeholder="お問い合わせ内容を入力してください。"
              />
            </label>

            <div className={styles.actions}>
              <button type="submit" className="btn btn--green">送信する</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
