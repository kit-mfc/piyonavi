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
    { label: t.common.menu.items.home, href: "/" },
    { label: t.common.menu.items.news, href: "/news" },
    { label: t.common.menu.items.guide, href: "/guide" },
    { label: t.common.menu.items.exhibitionTypes, href: "/exhibition-types" },
    { label: t.common.menu.items.rules, href: "/rules" },
    { label: t.common.menu.items.faq, href: "/faq" },
    { label: t.common.menu.items.contact, href: "/contact" },
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
      aria-label={t.common.menu.label}
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
        aria-label={t.common.menu.close}
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
