"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../guide.module.css";
import { useTranslation } from "../../i18n/LanguageProvider";

function StepCtaArrow() {
  return (
    <span className={styles.stepCtaArrow} aria-hidden="true">
      <svg viewBox="0 0 8 12" width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function highlight(text: string, words: string[]) {
  const targets = words.filter(Boolean);
  if (!targets.length) return text;
  const re = new RegExp(`(${targets.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(re).map((part, i) =>
    targets.includes(part) ? (
      <span key={i} className={styles.stepHighlight}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function GuideIndividualPage() {
  const t = useTranslation();
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main ${styles.wrap}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image
                src="/imgs/sprout.svg"
                alt={t("まつぴよの頭", "Sprout icon")}
                width={40}
                height={28}
                className={styles.sprout}
              />
              <h1 className={styles.title}>{t("個人出展専用ガイド", "Individual Exhibitor Guide")}</h1>
            </div>
            <p className={styles.lead}>
              {t(
                "個人出展の、出展申込みから松ヶ崎祭当日までの流れをご案内します。",
                "This guide will walk you through the process for individual exhibitors, from application to the day of the Matsugasaki Festival."
              )}
            </p>
            <Link href="/guide" className={styles.soloCta}>
              <span className={styles.soloCtaLabel}>
                {t("通常の団体はこちら", "Guide for regular groups")}
              </span>
              <span className={styles.soloCtaArrow} aria-hidden="true">
                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FFFFFF" fillOpacity="0.5" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M17 12.5L25 20L17 27.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </header>

          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("個人出展規約の確認", "Review the individual exhibitor rules")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "出展申込み前に出展規約と個人出展規約を必ずご確認ください。\n個人出展規約に同意する方が松ヶ崎祭に出展できます。",
                      "Be sure to review the exhibitor rules.\nPlease apply only after agreeing to the rules."
                    )}
                  </p>
                  <Link href="/rules" className={styles.stepCta}>
                    {t("出展規約を確認", "Review the rules")}
                    <StepCtaArrow />
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("出展申込み", "Submit the exhibitor application")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {highlight(
                      t(
                        "「個人出展申込みフォーム」に必要事項を入力し、お申し込みください。\nお申し込みいただいた団体には、後日管理番号とパスワードが発行されます。",
                        "Fill in the required fields on the individual exhibitor application form and submit your application.\nGroups that apply will later be issued a group number and password."
                      ),
                      [t("管理番号", "group number"), t("パスワード", "password")]
                    )}
                  </p>
                  <p className={styles.stepNote}>
                    {t(
                      "※出展申込みフォームは、ぴよナビ上で公開されません。管理番号とパスワードで、マイページへログインできます。",
                      "* The exhibitor application form is not published on PiyoNavi. You can log in to My Page with your group number and password."
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("参加保証金の納入", "Pay the participation deposit")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "お申込みにあたり参加保証金(2,000円)を納入していただきます。\n参加保証金は、松ヶ崎祭終了後に出展ブース等原状回復がされていることを確認したのち、後日返金させていただきます。",
                      "A participation deposit (2,000 yen) must be paid when you apply.\nThe deposit will be refunded at a later date, after we confirm following the Matsugasaki Festival that your exhibition booth and other items have been restored to their original condition."
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>4</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("個人出展説明会への参加", "Attend the individual exhibitor briefing")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "個人出展説明会に必ずご参加ください。\n説明会の詳細は「お知らせ」をご確認ください。",
                      "Please attend the individual exhibitor briefing.\nFor details about the briefing, please check the \"News\" page."
                    )}
                  </p>
                  <Link href="/news" className={styles.stepCta}>
                    {t("「お知らせ」はこちら", "News")}
                    <StepCtaArrow />
                  </Link>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>5</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("出展料の納入", "Pay the exhibitor fee")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "指定の期日までに出展料を納入してください。\n納入金額などはマイページから確認できます。",
                      "Please pay the exhibitor fee by the specified deadline.\nThe amount due can be confirmed from My Page."
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>8</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("松ヶ崎祭当日", "Matsugasaki Festival day")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "準備を万全にして、松ヶ崎祭当日をお迎えください。\n不明点は松ヶ崎祭実行委員会までお問い合わせください。",
                      "Come fully prepared for the day of the Matsugasaki Festival.\nFor any questions, please contact the Matsugasaki Festival Committee."
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>9</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("参加保証金の返金", "Refund of the participation deposit")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "松ヶ崎祭の後日、出展ブース等の原状回復がされていた方に返金させていただきます。",
                      "The deposit will be refunded at a later date, after we confirm that your exhibition booth and other items have been restored to their original condition."
                    )}
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}
