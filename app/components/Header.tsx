"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Header({ wave = true }: { wave?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${wave ? "" : " site-header--no-wave"}`}>
        <Link href="/" className="site-header__brand">
          <Image
            src="/imgs/icon.svg"
            alt={t("松ヶ崎祭ロゴ", "Matsugasaki Festival logo")}
            width={50}
            height={50}
            className="site-header__brand-logo"
          />
          <div className="site-header__brand-text">
            <strong>{t("松ヶ崎祭", "Matsugasaki Festival")}</strong>
            <strong>{t("出展者用ポータル", "Exhibitor Portal")}</strong>
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
            aria-label={t("メニューを開く", "Open menu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 28 28" fill="none">
              <path d="M4 8h20M4 14h20M4 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>
      <div
        className={`site-header__floating${scrolled ? " is-visible" : ""}`}
        aria-hidden={!scrolled}
      >
        <Link
          href="/"
          className="site-header__floating-brand"
          tabIndex={scrolled ? undefined : -1}
        >
          <Image
            src="/imgs/icon.svg"
            alt={t("松ヶ崎祭ロゴ", "Matsugasaki Festival logo")}
            width={50}
            height={50}
            className="site-header__brand-logo"
          />
        </Link>
        <button
          className="menu-btn site-header__floating-menu"
          type="button"
          aria-label={t("メニューを開く", "Open menu")}
          aria-expanded={menuOpen}
          tabIndex={scrolled ? undefined : -1}
          onClick={() => setMenuOpen(true)}
        >
          <svg viewBox="0 0 28 28" fill="none">
            <path d="M4 8h20M4 14h20M4 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
