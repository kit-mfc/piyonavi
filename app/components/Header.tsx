"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Header({ wave = true }: { wave?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`site-header${wave ? "" : " site-header--no-wave"}`}>
        <Link href="/" className="site-header__brand">
          <Image
            src="/imgs/icon.svg"
            alt="松ヶ崎祭ロゴ"
            width={50}
            height={50}
            className="site-header__brand-logo"
          />
          <div className="site-header__brand-text">
            <strong>松ヶ崎祭</strong>
            <strong>出展団体用ポータル</strong>
          </div>
        </Link>
        <div className="site-header__actions">
          <button className="lang-switch" type="button">JA/EN</button>
          <button
            className="menu-btn"
            type="button"
            aria-label="メニューを開く"
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
