"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./guide.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

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

export default function GuidePage() {
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
              <h1 className={styles.title}>{t("出展ガイド", "Exhibitor Guide")}</h1>
            </div>
            <p className={styles.lead}>
              {t(
                "出展申込みから、松ヶ崎祭当日までの流れをご案内します。",
                "A walkthrough from application to the day of the Matsugasaki Festival."
              )}
            </p>
            <Link href="/guide/individual" className={styles.soloCta}>
              <span className={styles.soloCtaLabel}>
                {t("個人出展専用ガイドはこちら", "Guide for individual exhibitors")}
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
                <h2 className={styles.stepTitle}>{t("出展団体説明会への参加", "Attend the exhibitor briefing")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "出展を希望する団体は参加が必須です。責任者１〜２名を立てて必ずご参加ください。\n出展団体説明会の詳細は「お知らせ」をご確認ください。",
                      "Attendance is required for all groups wishing to exhibit. Please designate one or two representatives and be sure to attend.\nFor details on the exhibitor briefing, please check the News page."
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
              <span className={styles.stepNum}>2</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("出展形態の確認", "Confirm your exhibition type")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "自分の団体の出展形態をご確認ください。\n出展形態の判断に迷った場合は、「出展形態の紹介」や「出展形態診断」を参考にしてください。",
                      "Please confirm which exhibition type applies to your group.\nIf you are unsure which type fits, refer to \"Exhibition types\" or the \"Exhibition type diagnosis\"."
                    )}
                  </p>
                  <div className={styles.stepCtaGroup}>
                    <Link href="/exhibition-types" className={styles.stepCta}>
                        {t("出展形態の紹介", "Exhibition types")}
                        <StepCtaArrow />
                    </Link>
                    <Link href="/diagnosis" className={styles.stepCta}>
                        {t("出展形態診断", "Exhibition type diagnosis")}
                        <StepCtaArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("出展規約の確認", "Review the exhibitor rules")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "出展申込み前に、出展規約を必ずご確認ください。\n出展規約に同意する団体が松ヶ崎祭に出展できます。",
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
              <span className={styles.stepNum}>4</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("出展申込み", "Submit the exhibitor application")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {highlight(
                      t(
                        "出展団体説明会後に公開される「出展申込みフォーム」に必要事項を入力し、お申し込みください。\nお申し込みいただいた団体には、後日管理番号とパスワードが発行されます。",
                        "Fill in the required fields on the exhibitor application form, which is released after the exhibitor briefing, and submit your application.\nGroups that apply will later be issued a management number and password."
                      ),
                      [t("管理番号", "management number"), t("パスワード", "password")]
                    )}
                  </p>
                  <p className={styles.stepNote}>
                    {t(
                      "※出展申込みフォームは、ぴよナビ上で公開されません。管理番号とパスワードで、マイページへログインできます。",
                      "* The exhibitor application form is not published on PiyoNavi. You can log in to My Page with your management number and password."
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>5</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("参加保証金の納入", "Pay the participation deposit")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "お申込みにあたり参加保証金(10,000円)を納入していただきます。\n参加保証金は、松ヶ崎祭終了後に団体の出展ブース等原状回復がされていることを確認したのち、後日返金させていただきます。",
                      "A participation deposit (10,000 yen) must be paid when you apply.\nThe deposit will be refunded at a later date, after we confirm following the Matsugasaki Festival that your exhibition booth and other items have been restored to their original condition."
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>6</span>
              <div className={styles.stepBody}>
                <h2 className={styles.stepTitle}>{t("各種提出物の提出", "Submit required materials")}</h2>
                <div className={styles.stepCard}>
                  <p className={styles.stepText}>
                    {t(
                      "マイページにログインし、期限までに必要な書類などを提出してください。",
                      "Log in to My Page and submit the required documents by the deadlines."
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>7</span>
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
                      "松ヶ崎祭の後日、出展ブース等の原状回復がされていた団体に返金させていただきます。",
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
