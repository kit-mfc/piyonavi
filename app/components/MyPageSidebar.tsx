"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./mypage-sidebar.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function MyPageSidebar() {
  const pathname = usePathname();
  const t = useTranslation();

  const items = [
    { label: t("ホーム", "Home"), href: "/mypage", icon: "/imgs/icon-home.svg" },
    { label: t("タスク管理", "Tasks"), href: "/mypage/tasks", icon: "/imgs/icon-task.svg" },
    { label: t("WEB公開情報", "Web Info"), href: "/mypage/web-info", icon: "/imgs/icon-web.svg" },
    { label: t("支払い情報", "Payment"), href: "/mypage/payment", icon: "/imgs/icon-payment.svg" },
    { label: t("おしらせ", "Notices"), href: "/mypage/notice", icon: "/imgs/icon-notice.svg" },
    { label: t("お問い合わせ", "Contact"), href: "/mypage/contact", icon: "/imgs/icon-contact.svg" },
  ];

  const logoutLines = t("ログアウト\nする", "Log\nout").split("\n");

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>{t("マイページ", "My Page")}</div>
      <nav>
        <ul className={styles.list}>
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.item} ${active ? styles.itemActive : ""}`}
                >
                  <Image src={item.icon} alt={item.label} width={24} height={24} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.logoutWrap}>
        <Link href="/" className={styles.logout}>
          {logoutLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < logoutLines.length - 1 && <br />}
            </span>
          ))}
        </Link>
      </div>
    </aside>
  );
}
