"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "../i18n/LanguageProvider";

export default function MenuOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslation();
  const menuItems = [
    { label: t("ホーム", "Home"), href: "/" },
    { label: t("お知らせ", "News"), href: "/news" },
    { label: t("出展ガイド", "Exhibitor Guide"), href: "/guide" },
    { label: t("出展形態", "Exhibition Types"), href: "/exhibition-types" },
    { label: t("出展規約", "Exhibitor Rules"), href: "/rules" },
    { label: t("よくある質問", "FAQ"), href: "/faq" },
    { label: t("お問い合わせ", "Contact"), href: "/contact" },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`menu-overlay${isOpen ? " menu-overlay--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={t("メニュー", "Menu")}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="menu-overlay__edge"
        aria-hidden="true"
        onClick={onClose}
      />
      <button
        className="menu-overlay__close"
        type="button"
        aria-label={t("メニューを閉じる", "Close menu")}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <ul
        className="menu-overlay__list"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
