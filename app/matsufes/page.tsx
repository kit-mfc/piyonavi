"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./matsufes.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function MatsugasakiSaiPage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>{t("松ヶ崎祭とは", "About Matsugasaki Festival")}</span>
            </div>
          </div>
          <div className={styles.body}>
            {[
              t(
                "松ヶ崎祭は、京都工芸繊維大学松ヶ崎キャンパスで開催される大学祭です。学生団体・サークル・研究室などによる多彩な出展が並び、学内外から多くの来場者をお迎えする、年に一度のお祭りです。",
                "The Matsugasaki Festival is a university festival held at the Matsugasaki Campus of Kyoto Institute of Technology. With a wide variety of exhibits by student groups, clubs, and labs, it's an annual event that welcomes many visitors from inside and outside the university."
              ),
              t(
                "飲食・物販・展示・パフォーマンスなど、さまざまな形態で出展が行われ、キャンパス全体が活気に包まれます。地域の皆さまや受験生の方々にも、大学の雰囲気を感じていただける機会となっています。",
                "Exhibits take many forms — food, goods, exhibitions, performances, and more — filling the entire campus with energy. It's also a great opportunity for community members and prospective students to experience the atmosphere of the university."
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
