import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./links.module.css";

type LinkItem = {
  name: string;
  url: string;
  description?: string;
};

type LinkGroup = {
  title: string;
  items: LinkItem[];
};

const groups: LinkGroup[] = [
  {
    title: "京都工芸繊維大学",
    items: [
      {
        name: "京都工芸繊維大学 公式サイト",
        url: "https://www.kit.ac.jp/",
        description: "国立大学法人京都工芸繊維大学の公式ウェブサイト",
      },
    ],
  },
  {
    title: "松ヶ崎祭関連",
    items: [
      {
        name: "松ヶ崎祭 公式サイト",
        url: "https://matsufes.info/",
        description: "松ヶ崎祭の最新情報・企画案内はこちら",
      },
    ],
  },
  {
    title: "委員会公式SNS",
    items: [
      {
        name: "Instagram (@kit_matsufes)",
        url: "https://www.instagram.com/kit_matsufes/",
      },
      {
        name: "X (@matsufes_info)",
        url: "https://x.com/matsufes_info",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <span className={styles.label}>LINKS</span>
              <h1 className={styles.title}>関連リンク</h1>
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
