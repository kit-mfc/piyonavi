"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../i18n/LanguageProvider";

export default function Footer() {
  const t = useTranslation();
  const description = t.common.footer.description.split("\n");

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
            {t.common.footer.university}<br />
            {t.common.footer.committee}
          </div>
          <Image
            src="/imgs/matsu-festival-logo.svg"
            alt={t.common.header.brandLine1}
            width={160}
            height={60}
            className="site-footer__matsu-logo"
          />
        </div>

        <div className="site-footer__col">
          <h3>{t.common.footer.linksHeading}</h3>
          <ul>
            <li><Link href="/guide">{t.common.footer.links.guide}</Link></li>
            <li><Link href="/rules">{t.common.footer.links.rules}</Link></li>
            <li><Link href="/faq">{t.common.footer.links.faq}</Link></li>
            <li><Link href="/contact">{t.common.footer.links.contact}</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>{t.common.footer.committeeHeading}</h3>
          <ul>
            <li><Link href="/links">{t.common.footer.links.relatedLinks}</Link></li>
            <li><Link href="/login">{t.common.footer.links.login}</Link></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__socials">
          <a href="https://www.instagram.com/kit_matsufes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src="/imgs/Instagram.svg" alt="" width={24} height={24} />
          </a>
          <a href="https://x.com/matsufes_info" target="_blank" rel="noopener noreferrer" aria-label="X">
            <Image src="/imgs/X.svg" alt="" width={24} height={24} />
          </a>
          <a href="mailto:kit.matsufes@gmail.com" aria-label="Mail">
            <Image src="/imgs/mail.svg" alt="" width={24} height={24} />
          </a>
        </div>
        <small>{t.common.footer.copyright}</small>
      </div>
    </footer>
  );
}
