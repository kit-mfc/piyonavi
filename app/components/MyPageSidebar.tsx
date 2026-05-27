"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./mypage-sidebar.module.css";

const items = [
  { label: "ホーム", href: "/mypage", icon: "/imgs/icon-home.svg" },
  { label: "タスク管理", href: "/mypage/tasks", icon: "/imgs/icon-task.svg" },
  { label: "WEB公開情報", href: "/mypage/web-info", icon: "/imgs/icon-web.svg" },
  { label: "支払い情報", href: "/mypage/payment", icon: "/imgs/icon-payment.svg" },
  { label: "おしらせ", href: "/mypage/notice", icon: "/imgs/icon-notice.svg" },
  { label: "お問い合わせ", href: "/mypage/contact", icon: "/imgs/icon-contact.svg" },
];

export default function MyPageSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>マイページ</div>
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
          ログアウト<br />する
        </Link>
      </div>
    </aside>
  );
}
