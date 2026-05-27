"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

const faqs = [
  {
    q: "一つのテントで複数の出展形態を兼ねることはできますか？",
    a: "パフォーマンスと個人出展を除き、可能です。例えば、飲食と物販を同時に行うことができます。ただし、両方の形態に必要な提出物を提出していただく必要があります。",
  },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(1);

  return (
    <div className="page-wrap">
      <Header />
      <main className={`page-main has-side-wave ${styles.wrap}`}>
        <div className={`side-wave ${styles.sideWave}`} aria-hidden="true" />
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.titleGroup}>
              <Image src="/imgs/sprout.svg" alt="" width={40} height={28} className={styles.sprout} />
              <span className={styles.qa}>Q&amp;A</span>
              <h1 className={styles.title}>よくある質問</h1>
            </div>
          </header>

          <ul className={styles.list}>
            {faqs.map((item, i) => {
              const open = openIdx === i;
              return (
                <li key={i} className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
                  <button
                    type="button"
                    className={styles.qBtn}
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className={styles.qMark}>Q</span>
                    <span className={styles.qText}>{item.q}</span>
                    <span className={`${styles.caret} ${open ? styles.caretOpen : ""}`} aria-hidden="true">
                      ﹀
                    </span>
                  </button>
                  <div className={`${styles.aWrap} ${open ? styles.aWrapOpen : ""}`}>
                    <div className={styles.aInner}>
                      <div className={styles.aBody}>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
