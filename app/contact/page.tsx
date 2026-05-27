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
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t.pages.contact.title}</h1>
            </div>
            <p className={styles.lead}>{t.pages.contact.lead}</p>
          </header>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.field}>
              <span className={styles.label}>{t.pages.contact.labels.name}</span>
              <input type="text" className={styles.input} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t.pages.contact.labels.email}</span>
              <input type="email" className={styles.input} />
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>{t.pages.contact.labels.groupName}</span>
                <input type="text" className={styles.input} />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>{t.pages.contact.labels.groupNumber}</span>
                <input
                  type="text"
                  className={styles.input}
                  placeholder={t.pages.contact.placeholders.groupNumber}
                />
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>{t.pages.contact.labels.category}</span>
              <select className={`${styles.input} ${styles.select}`} defaultValue="">
                <option value="" disabled>{t.pages.contact.categoryOptions.select}</option>
                <option value="general">{t.pages.contact.categoryOptions.general}</option>
                <option value="payment">{t.pages.contact.categoryOptions.payment}</option>
                <option value="other">{t.pages.contact.categoryOptions.other}</option>
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t.pages.contact.labels.body}</span>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                rows={5}
                placeholder={t.pages.contact.placeholders.bodyText}
              />
            </label>

            <div className={styles.actions}>
              <button type="submit" className="btn btn--green">{t.pages.contact.submit}</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
