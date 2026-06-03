"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./types.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function ExhibitionTypesPage() {
  const t = useTranslation();
  const types = [
    {
      title: t("飲食", "Food"),
      en: "food",
      icon: "/imgs/icon-food.svg",
      text: t(
        "飲食物を調理・販売する出展形態です。",
        "A pop-up stall that prepares and sells food."
      ),
      submissions: [
        t("参加同意書", "Participation agreement"),
        t("調理工程表", "Cooking process sheet"),
        t("調理者名簿", "Cook roster"),
        t("レンタルフォーム", "Rental form"),
        t("検便", "Stool test"),
        t("提供食品名簿フォーム", "Food item list form"),
        t("電源申請フォーム", "Power supply request form"),
        t("パンフレット/webページ掲載情報フォーム", "Pamphlet / web page listing form"),
      ],
    },
    {
      title: t("物販", "Goods"),
      en: "goods",
      icon: "/imgs/icon-goods.svg",
      text: t(
        "講義室および屋外スペースで物品の販売を行い、金銭の授受を伴う活動を行う出展形態です。\n飲食物は除きます。",
        "An exhibition type for selling goods in classrooms and outdoor spaces, involving the exchange of money. \nFood is excluded."
      ),
      submissions: [
        t("参加同意書", "Participation agreement"),
        t("レンタルフォーム", "Rental form"),
        t("電源申請フォーム", "Power supply request form"),
        t("パンフレット/webページ掲載情報フォーム", "Pamphlet / web page listing form"),
      ],
    },
    {
      title: t("展示", "Exhibition"),
      en: "exhibition",
      icon: "/imgs/icon-exhibition.svg",
      text: t(
        "講義室および屋外スペースで作品を展示し、金銭の授受を伴わない活動を行う出展形態です。",
        "An exhibition type for displaying works in classrooms and outdoor spaces, without involving the exchange of money."
      ),
      submissions: [
        t("参加同意書", "Participation agreement"),
        t("レンタルフォーム", "Rental form"),
        t("電源申請フォーム", "Power supply request form"),
        t("パンフレット/webページ掲載情報フォーム", "Pamphlet / web page listing form"),
      ],
    },
    {
      title: t("体験", "Experience"),
      en: "experience",
      icon: "/imgs/icon-experience.svg",
      text: t(
        "飲食物や物品の販売を行わず、来場者の方が体験できる出展を行う出展形態です。",
        "An exhibition type that does not involve the sale of food or goods, but offers experiences for visitors."
      ),
      submissions: [
        t("参加同意書", "Participation agreement"),
        t("レンタルフォーム", "Rental form"),
        t("パンフレット/webページ掲載情報フォーム", "Pamphlet / web page listing form"),
      ],
    },
    {
      title: t("パフォーマンス", "Performance"),
      en: "performance",
      icon: "/imgs/icon-performance.svg",
      text: t(
        "音楽演出、ダンス、演劇等のパフォーマンスを行う出展形態です。\nメインステージ、センターホール、屋内講義室、ストリートパフォーマンスでの出展が可能です。",
        "An exhibition type for performances such as music, dance, and theater.\nExhibitors can perform on the main stage, center hall, indoor classrooms, or as street performances."
      ),
      submissions: [
        t("参加同意書", "Participation agreement"),
        t("ステージセッティングシート", "Stage setting sheet"),
        t("パンフレット/webページ掲載情報フォーム", "Pamphlet / web page listing form"),
      ],
    },
    {
      title: t("手づくりテント", "Handmade Tent"),
      en: "handmade tent",
      icon: "/imgs/icon-tent.svg",
      text: t(
        "出展者自身が設計・施工するテントを使用して出展を行う出展形態です。",
        "An exhibition type that uses tents designed and constructed by the exhibitors themselves."
      ),
      submissions: [
        t("参加同意書", "Participation agreement"),
        t("手づくりテント設計図", "Handmade tent blueprint"),
        t("手づくりテント希望区画フォーム", "Preferred plot form for handmade tent"),
        t("レンタルフォーム", "Rental form"),
        t("電源申請フォーム", "Power supply request form"),
        t("単管申請フォーム", "Pipe application form"),
        t("パンフレット/webページ掲載情報フォーム", "Pamphlet / web page listing form"),
      ],
    },
    {
      title: t("個人出展", "Solo Exhibition"),
      en: "solo exhibition",
      icon: "/imgs/icon-solo.svg",
      text: t(
        "個人で物販や展示を行う出展形態です。",
        "Solo exhibitor format for selling goods or displaying works."
      ),
      submissions: [
        t("参加同意書", "Participation agreement"),
        t("パンフレット/webページ掲載情報フォーム", "Pamphlet / web page listing form"),
      ],
    },
  ];
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={40} height={28} className={styles.sprout} />
              <h1 className={styles.title}>{t("出展形態の紹介", "Exhibition Types")}</h1>
            </div>
            <p className={styles.lead}>{t("各出展形態の概要と必要な提出物をご案内します。\n複数の出展形態を兼ねることも可能です。", "An overview of each exhibition type and the submissions required.\nMultiple exhibition types can be combined.")}</p>
            <Link href="/diagnosis" className={styles.soloCta}>
              <span className={styles.soloCtaLabel}>
                {t("出展形態診断はこちら", "Take the exhibition type quiz")}
              </span>
              <span className={styles.soloCtaArrow} aria-hidden="true">
                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FFFFFF" fillOpacity="0.5" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M17 12.5L25 20L17 27.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </header>
          <ul className={styles.list}>
            {types.map((type) => (
              <li key={type.en} className={styles.card}>
                <header className={styles.cardHead}>
                  <Image src={type.icon} alt={type.title} width={28} height={28} className={styles.cardIcon} />
                  <h2>{type.title}</h2>
                  <span className={styles.tag}>{type.en}</span>
                </header>
                <p className={styles.cardText}>{type.text}</p>
                <div className={styles.subBlock}>
                  <span className={styles.subLabel}>{t("必要な提出物", "Required submissions")}</span>
                  <ul className={styles.subList}>
                    {type.submissions.map((s) => (
                      <li key={s}>・{s}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
