"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./m-1.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function M1Page() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>{t("m-1グランプリとは", "About the m-1 Grand Prix")}</span>
            </div>
          </div>
          <div className={styles.body}>
            {[
              t(
                "m-1（マツワン）グランプリは、来場者さまの投票によって部門ごとのNo.1を決定する、松ヶ崎祭の目玉企画です。来場者さま一人ひとりの「いちばん良かった！」が、各部門の頂点を選び出します。",
                'The m-1 (Matsu-Wan) Grand Prix is a flagship event of the Matsugasaki Festival, where visitor votes determine the No. 1 exhibitor in each exhibition type. Each visitor\'s "my favorite!" pick chooses the top of each category.'
              ),
              t(
                "見事1位に輝いた出展団体には、栄誉とともに豪華商品が贈られます。",
                "The first-place exhibits receive both recognition and special prizes."
              ),
              t(
                "詳細は出展者団体説明会や松ヶ崎祭HPで発表されます。",
                "Details will be announced at the exhibitor briefing and on the Matsugasaki Festival website."
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
