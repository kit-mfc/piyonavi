"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./matsupiyo.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function MatsupiyoPage() {
  const t = useTranslation();

  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <div className={styles.cloudTitleWrap}>
            <div className={styles.cloudTitle}>
              <span>{t("まつぴよについて", "About Matsupiyo")}</span>
            </div>
          </div>

          <section className={styles.profile}>
            <div className={styles.characters}>
              <Image
                src="/imgs/matsupiyo-chars.svg"
                alt={t("まつぴよ", "Matsupiyo")}
                width={431}
                height={360}
                className={styles.charactersImg}
                priority
              />
            </div>

            <div className={styles.detail}>
              <Image
                src="/imgs/matsupiyo-logo.png"
                alt={t("まつぴよ ロゴ", "Matsupiyo logo")}
                width={700}
                height={320}
                className={styles.logo}
              />

              <div className={styles.introRow}>
                <div className={styles.introCard}>
                  {t(
                    "松ヶ崎祭実行委員会のメンバー。\n常に疲れている。",
                    "A member of the Matsugasaki Festival Committee.\nAlways tired."
                  )
                    .split("\n")
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                </div>

                <div className={styles.social}>
                  <div className={styles.socialIcons}>
                    <a
                      href="https://www.instagram.com/matsupiyo_piyo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Image src="/imgs/instagram-line.svg" alt="Instagram" width={37} height={37} />
                    </a>
                    <a
                      href="https://x.com/matsupiyo_piyo"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                    >
                      <Image src="/imgs/x-line.svg" alt="X" width={34} height={31} />
                    </a>
                  </div>
                  <span className={styles.socialHandle}>@matsupiyo_piyo</span>
                </div>
              </div>

              <dl className={styles.traits}>
                <div className={styles.trait}>
                  <dt className={styles.traitLabel}>
                    <Image src="/imgs/icon-heart.svg" alt="" width={28} height={23} aria-hidden="true" />
                    {t("好き", "Likes")}
                  </dt>
                  <dd className={styles.traitCard}>{t("からあげクン", "Karaage-kun")}</dd>
                </div>
                <div className={styles.trait}>
                  <dt className={styles.traitLabel}>
                    <Image src="/imgs/icon-cross.svg" alt="" width={25} height={25} aria-hidden="true" />
                    {t("苦手", "Dislikes")}
                  </dt>
                  <dd className={styles.traitCard}>
                    {t(
                      "レポートの締め切りと課題講評の前夜",
                      "Report deadlines and the night before a critique"
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section className={styles.support}>
            <h2 className={styles.supportTitle}>
              <Image
                src="/imgs/sprout.svg"
                alt=""
                width={40}
                height={28}
                aria-hidden="true"
                className={styles.supportSprout}
              />
              {t("まつぴよを応援してくださる皆さまへ", "To everyone who supports Matsupiyo")}
            </h2>

            <a
              href="/matupiyo-guideline.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.guidelineBtn}
            >
              <span className={styles.guidelineLabel}>
                {t("まつぴよガイドライン", "Matsupiyo Guidelines")}
              </span>
              <span className={styles.guidelineArrow} aria-hidden="true">
                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FFFFFF" fillOpacity="0.5" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M17 12.5L25 20L17 27.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <p className={styles.supportText}>
              {t(
                "今後も皆さまが楽しく創作活動を続けられるよう、まつぴよを使用する際は必ずご一読ください。\nまつぴよと皆さまの大切な約束です。",
                "Please be sure to read this before using Matsupiyo, so that everyone can keep enjoying their creative work.\nIt is an important promise between Matsupiyo and you."
              )
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
