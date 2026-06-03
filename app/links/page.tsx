"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./links.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function LinksPage() {
  const t = useTranslation();
  const groups: {
    title: string;
    items: { name: string; url: string; description?: string }[];
  }[] = [
    {
      title: t("松ヶ崎祭関連", "Matsugasaki Festival"),
      items: [
        {
          name: t("松ヶ崎祭 公式サイト", "Matsugasaki Festival official site"),
          url: "https://matsufes.info/",
          description: t(
            "松ヶ崎祭の最新情報・企画案内はこちら",
            "Latest news and program information for the Matsugasaki Festival."
          ),
        },
        {
          name: t("松ヶ崎祭 公式Instagram (@kit_matsufes)", "Instagram (@kit_matsufes)"),
          url: "https://www.instagram.com/kit_matsufes/",
          description: "",
        },
        {
          name: t("松ヶ崎祭 公式X (@matsufes_info)", "X (@matsufes_info)"),
          url: "https://x.com/matsufes_info",
          description: "",
        },
      ],
    },
    {
      title: t("委員会公式SNS", "Committee social media"),
      items: [
        {
          name: t("Instagram (@kit_mf_committee)", "Instagram (@kit_mf_committee)"),
          url: "https://www.instagram.com/kit_mf_committee/",
        },
        {
          name: t("X (@kit_mf_committe)", "X (@kit_mf_committe)"),
          url: "https://x.com/kit_mf_committe",
        },
      ],
    },
  ];
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt={t("新芽アイコン", "Sprout icon")} width={40} height={28} className={styles.sprout} />
              <span className={styles.label}>{t("LINKS", "")}</span>
              <h1 className={styles.title}>{t("関連リンク", "Related Links")}</h1>
            </div>
          </header>

          <div className={styles.groups}>
            {groups.map((group) => (
              <section key={group.title} className={styles.group}>
                <h2 className={styles.groupTitle}>{group.title}</h2>
                <ul className={styles.list}>
                  {group.items.map((item) => (
                    <li key={item.url} className={styles.item}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        <span className={styles.linkName}>{item.name}</span>
                        {item.description && (
                          <span className={styles.linkDesc}>{item.description}</span>
                        )}
                        <span className={styles.arrow} aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
