"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function ContactPage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t("お問い合わせ", "Contact")}</h1>
            </div>
            <p className={styles.lead}>{t("ご不明点やご相談がありましたら、以下のフォームよりお問い合わせください。", "If you have any questions or concerns, please reach out using the form below.")}</p>
          </header>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.field}>
              <span className={styles.label}>{t("お名前", "Name")}</span>
              <input type="text" className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t("メールアドレス", "Email")}</span>
              <input type="email" className={styles.input} />
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>{t("団体名", "Group name")}</span>
                <input type="text" className={styles.input} />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>{t("団体番号 (任意)", "Group number (optional)")}</span>
                <input
                  type="text"
                  className={styles.input}
                  placeholder={t("例：A001", "e.g. A001")}
                />
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>{t("お問い合わせ種別", "Inquiry category")}</span>
              <select className={`${styles.input} ${styles.select}`} defaultValue="">
                <option value="" disabled>{t("選択してください", "Please select")}</option>
                <option value="general">{t("出展について", "About exhibiting")}</option>
                <option value="payment">{t("支払いについて", "About payment")}</option>
                <option value="other">{t("その他", "Other")}</option>
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t("お問い合わせ内容", "Message")}</span>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                rows={5}
                placeholder={t("お問い合わせ内容を入力してください。", "Please enter your message.")}
              />
            </label>

            <div className={styles.actions}>
              <button type="submit" className="btn btn--green">{t("送信する", "Send")}</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
