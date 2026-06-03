"use client";

import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./not-found.module.css";
import { useTranslation } from "./i18n/LanguageProvider";

export default function NotFound() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>
            {t("ページが見つかりませんでした", "Page not found")}
          </h1>
          <p className={styles.lead}>
            {t(
              "お探しのページは移動または削除された可能性があります。\nURLをご確認のうえ、もう一度お試しください。",
              "The page you are looking for may have been moved or deleted.\nPlease check the URL and try again."
            )}
          </p>
          <Link href="/" className="btn btn--green">
            {t("トップページへ戻る", "Back to home")}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
