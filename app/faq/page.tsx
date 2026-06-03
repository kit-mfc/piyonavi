"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./faq.module.css";
import { useTranslation } from "../i18n/LanguageProvider";

export default function FaqPage() {
  const t = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: t(
        "有志で出展する場合、団体名はどうすればよいですか？",
        "If we exhibit as a volunteer group, how should we decide on a group name?"
      ),
      a: t(
        "団体の方々で相談して決めてください。出展名と団体名は同じでも問題ありません。レンタルなどの際は、出展応募フォームに提出した名称としてください。",
        "Please discuss and decide among your group members. The exhibition name and group name may be the same. For rentals and similar matters, please use the name you submitted on the exhibition application form."
      ),
    },
    {
      q: t(
        "1日目しか出展できないのですが、可能ですか？",
        "We can only exhibit on the first day. Is that possible?"
      ),
      a: t(
        "可能です。ただし、出展料やレンタル料は2日間参加と同額になります。",
        "Yes, it is possible. However, the exhibition fee and rental fees will be the same as for participating both days."
      ),
    },
    {
      q: t(
        "学外の人と一緒に出展することは可能ですか？",
        "Is it possible to exhibit together with people from outside the university?"
      ),
      a: t(
        "本学の学生を含む団体であれば出展は可能です。ですが今年は学内の団体(公認、非公認問わず)の出展を優先させていただきます。",
        "Exhibiting is possible as long as the group includes students of our university. However, this year we will give priority to on-campus groups (whether officially recognized or not)."
      ),
    },
    {
      q: t(
        "参加保証金納入後に出展不可となった場合はどのような対応になりますか？",
        "What happens if exhibiting becomes impossible after the participation deposit has been paid?"
      ),
      a: t(
        "委員会側の都合により出展が不可能になった場合、別途連絡し参加保証金の返金対応をさせていただきます。団体様のご都合による出展取り消しの場合は、参加保証金の返金はできかねますのでご了承ください。",
        "If exhibiting becomes impossible due to circumstances on the committee's side, we will contact you separately and refund the participation deposit. Please note that if the exhibition is cancelled due to your group's own circumstances, the participation deposit cannot be refunded."
      ),
    },
    {
      q: t(
        "テントのサイズが知りたいです",
        "We would like to know the tent sizes."
      ),
      a: t(
        "全面テントの場合、2K×3K(3.6m×5.4m) 、半面テントの場合、2K×1.5K(3.6m×2.7m)です。",
        "A full tent is 2K×3K (3.6m×5.4m), and a half tent is 2K×1.5K (3.6m×2.7m)."
      ),
    },
    {
      q: t(
        "物販・展示で教室を借りる際、２つ以降からかかる出展料はどうなりますか？",
        "When renting classrooms for sales or exhibitions, what is the exhibition fee from the second classroom onward?"
      ),
      a: t(
        "3つ目の教室まで、既定の料金です。4つ以降の教室ごとに追加で1000円いただきます。",
        "Up to the third classroom, the standard fee applies. From the fourth classroom onward, an additional 1,000 yen is charged per classroom."
      ),
    },
    {
      q: t(
        "物販と展示を同じ教室で行いたい場合、出展料はどのようになりますか？",
        "If we want to do both sales and an exhibition in the same classroom, how is the exhibition fee calculated?"
      ),
      a: t(
        "物販の出展料(￥3,000)を徴収させて頂きます。",
        "We will charge the sales exhibition fee (¥3,000)."
      ),
    },
    {
      q: t(
        "飲食物の提供を屋内で行うのは可能ですか？",
        "Is it possible to serve food and drinks indoors?"
      ),
      a: t(
        "飲食物の提供は屋内では禁止しております。飲食物の販売は屋外でお願いいたします。",
        "Serving food and drinks indoors is prohibited. Please sell food and drinks outdoors."
      ),
    },
    {
      q: t(
        "ガスバーナーによる加熱は可能ですか？",
        "Is heating with a gas burner allowed?"
      ),
      a: t(
        "レンタル、持ち込み含め禁止させていただいております。",
        "It is prohibited, including both rentals and bringing your own."
      ),
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
              <Image src="/imgs/sprout.svg" alt={t("まつぴよの頭", "Sprout icon")} width={40} height={28} className={styles.sprout} />
              <span className={styles.qa}>{t("Q&A", "")}</span>
              <h1 className={styles.title}>{t("よくある質問", "FAQ")}</h1>
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
