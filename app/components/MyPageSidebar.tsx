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
    { label: t.common.mypageSidebar.items.home, href: "/mypage", icon: "/imgs/icon-home.svg" },
    { label: t.common.mypageSidebar.items.tasks, href: "/mypage/tasks", icon: "/imgs/icon-task.svg" },
    { label: t.common.mypageSidebar.items.webInfo, href: "/mypage/web-info", icon: "/imgs/icon-web.svg" },
    { label: t.common.mypageSidebar.items.payment, href: "/mypage/payment", icon: "/imgs/icon-payment.svg" },
    { label: t.common.mypageSidebar.items.notice, href: "/mypage/notice", icon: "/imgs/icon-notice.svg" },
    { label: t.common.mypageSidebar.items.contact, href: "/mypage/contact", icon: "/imgs/icon-contact.svg" },
  ];

  const logoutLines = t.common.mypageSidebar.logout.split("\n");

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>{t.common.mypageSidebar.title}</div>
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
                  <Image src={item.icon} alt="" width={24} height={24} />
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
