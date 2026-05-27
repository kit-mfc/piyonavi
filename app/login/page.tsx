"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [error, setError] = useState("");

  return (
    <div className={styles.wrap}>
      <div className={styles.patternBg} aria-hidden="true" />

      <Link href="/" className={styles.closeBtn} aria-label="閉じる">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </Link>

      <div className={styles.mascot}>
        <Image src="/imgs/matsu-hurry.png" alt="" width={200} height={200} />
      </div>

      <main className={styles.card}>
        <h1 className={styles.brand}>
          <Image
            src="/imgs/piyo-navi-logo.svg"
            alt="ぴよナビ"
            width={350}
            height={77}
            priority
          />
        </h1>
        <h2 className={styles.title}>ログイン</h2>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setError("団体番号またはパスワードが異なります");
          }}
        >
          <label className={styles.field}>
            <input
              type="text"
              placeholder="団体番号"
              className={styles.input}
            />
          </label>
          <label className={styles.field}>
            <input
              type="password"
              placeholder="パスワード"
              className={styles.input}
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}

          {/* <div className={styles.forgotRow}>
            <Link href="#" className={styles.forgot}>
              パスワードを忘れた場合 <span>›</span>
            </Link>
            <Link href="#" className={styles.forgot}>
              団体番号を忘れた場合 <span>›</span>
            </Link>
          </div> */}

          <div className={styles.submitWrap}>
            <button type="submit" className={styles.submitBtn}>
              ログイン<br />する
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
