"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../i18n/LanguageProvider";

export default function Footer() {
  const t = useTranslation();
  const description = t(
    "松ヶ崎祭のポータルサイトです。\n出展に必要な情報の確認・各種提出物管理を行えます。",
    "The official portal for the Matsugasaki Festival.\nCheck information and manage exhibitor materials all in one place."
  ).split("\n");

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h2>
            <Image
              src="/imgs/piyo-navi-logo.svg"
              alt="ぴよナビ"
              width={350}
              height={77}
              className="site-footer__logo"
            />
          </h2>
          <p>
            {description.map((line, i) => (
              <span key={i}>
                {line}
                {i < description.length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="footer-univ">
            {t("国立大学法人京都工芸繊維大学", "Kyoto Institute of Technology")}<br />
            {t("松ヶ崎祭実行委員会", "Matsugasaki Festival Committee")}
          </div>
          <Image
            src="/imgs/matsu-festival-logo.svg"
            alt={t("松ヶ崎祭", "Matsugasaki Festival")}
            width={160}
            height={60}
            className="site-footer__matsu-logo"
          />
        </div>

        <div className="site-footer__col">
          <h3>{t("リンク", "Links")}</h3>
          <ul>
            <li><Link href="/guide">{t("出展ガイド", "Exhibitor Guide")}</Link></li>
            <li><Link href="/rules">{t("出展規約", "Exhibitor Rules")}</Link></li>
            <li><Link href="/faq">{t("よくある質問", "FAQ")}</Link></li>
            <li><Link href="/contact">{t("お問い合わせ", "Contact")}</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>{t("委員会関連", "Committee")}</h3>
          <ul>
            <li><Link href="/links">{t("関連リンク", "Related Links")}</Link></li>
            <li><Link href="/login">{t("出展者ログイン", "Exhibitor Login")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__socials">
          <a href="https://www.instagram.com/kit_matsufes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src="/imgs/Instagram.svg" alt={t("Instagram", "Instagram")} width={24} height={24} />
          </a>
          <a href="https://x.com/matsufes_info" target="_blank" rel="noopener noreferrer" aria-label="X">
            <Image src="/imgs/X.svg" alt={t("X（旧Twitter）", "X (formerly Twitter)")} width={24} height={24} />
          </a>
          {/* <a href="mailto:kit.matsufes@gmail.com" aria-label="Mail">
            <Image src="/imgs/mail.svg" alt={t("メール", "Email")} width={24} height={24} />
          </a> */}
        </div>
        <small>{t("© 松ヶ崎祭実行委員会", "© Matsugasaki Festival Committee")}</small>
      </div>
    </footer>
  );
}
