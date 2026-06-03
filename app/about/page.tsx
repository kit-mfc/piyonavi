"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./about.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function AboutPage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>{t("ぴよナビとは", "About Piyo Navi")}</span>
            </div>
          </div>
          <div className={styles.body}>
            {[
              t(
                "松ヶ崎祭における、出展者向けのポータルサイトです。",
                "An exhibitor portal site for the Matsugasaki Festival."
              ),
              t(
                "ぴよナビでは、出展申込みから松ヶ崎祭当日までに必要な情報を、ひとつの場所でまとめて確認・管理することができます。各種提出物の管理、お支払い情報の確認、最新のお知らせの受け取りなど、出展者の皆さまの負担を少しでも軽くできるよう設計しています。",
                "Piyo Navi lets you check and manage all the information you need from application through the day of the festival, all in one place. From managing submissions and confirming payment information to receiving the latest announcements, it is designed to lighten the load for exhibitor groups."
              ),
              t(
                "ご不明点やご相談は、お問い合わせフォームよりお気軽にお寄せください。松ヶ崎祭実行委員会一同、皆さまのご出展を心よりお待ちしております。",
                "If you have any questions or concerns, please feel free to reach us via the contact form. The Matsugasaki Festival Committee looks forward to welcoming your exhibit."
              ),
            ].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
