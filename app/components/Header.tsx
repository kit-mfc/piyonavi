"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Header({ wave = true }: { wave?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <>
      <header className={`site-header${wave ? "" : " site-header--no-wave"}`}>
        <Link href="/" className="site-header__brand">
          <Image
            src="/imgs/icon.svg"
            alt={t.common.header.logoAlt}
            width={50}
            height={50}
            className="site-header__brand-logo"
          />
          <div className="site-header__brand-text">
            <strong>{t.common.header.brandLine1}</strong>
            <strong>{t.common.header.brandLine2}</strong>
          </div>
        </Link>
        <div className="site-header__actions">
          <button
            className="lang-switch"
            type="button"
            onClick={toggleLang}
            aria-label={lang === "ja" ? "Switch to English" : "日本語に切り替え"}
            aria-pressed={lang === "en"}
          >
            <span className={lang === "ja" ? "lang-switch__active" : undefined}>JA</span>
            <span aria-hidden="true">/</span>
            <span className={lang === "en" ? "lang-switch__active" : undefined}>EN</span>
          </button>
          <button
            className="menu-btn"
            type="button"
            aria-label={t.common.header.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 28 28" fill="none">
              <path d="M4 8h20M4 14h20M4 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
