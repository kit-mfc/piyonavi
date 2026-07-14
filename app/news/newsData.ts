export type Localized = { ja: string; en: string };

export type NewsItem = {
  id: string;
  date: string;
  title: Localized;
  /** 各段落を配列で保持。改行は段落として表示されます。 */
  body: Localized[];
};

export const newsItems: NewsItem[] = [
  {
    id: "20260713001",
    date: "2026-07-13",
    title: {
      ja: "参加保証金納入のお知らせ",
      en: "Notice: Payment of Participation Deposit",
    },
    body: [
      {
        ja: "本日から7/17(金)まで、参加保証金の納入期間となります。昼休みまたは5限後に学友会室にお越しください。出展団体の皆さまは、期日までに必ず納入をお願いいたします。",
        en: "The payment period for the participation deposit will be from today until Friday, July 17. Please drop by the student council room during the lunch break. All exhibitor groups are requested to make the payment by the deadline.",
      },
    ],
  },
  {
    id: "20260603002",
    date: "2026-06-03",
    title: {
      ja: "第1回出展団体説明会開催のお知らせ",
      en: "Notice: 1st Exhibitor Group Briefing",
    },
    body: [
      {
        ja: "第1回出展団体説明会を以下の通り実施します。",
        en: "The 1st Exhibitor Group Briefing will be held as follows.",
      },
      {
        ja: "【日時】7月1日(水)、2日(木)18:00〜",
        en: "[Date & Time] Wed, July 1 and Thu, July 2, from 18:00",
      },
      {
        ja: "【場所】0331講義室",
        en: "[Venue] Lecture Room 0331",
      },
      {
        ja: "【備考】\n･第56回松ヶ崎祭への出展を考えている団体は本説明会への参加が必須です。責任者1-2名を立ててご参加ください。\n･2日程とも内容は同一です。ご都合の良い日程でご参加ください。\n･個人での出展を考えている方は本説明会への参加は不要です。後日開催される「個人出展説明会」にご参加ください。",
        en: "[Notes]\n- Groups considering exhibiting at the 56th Matsugasaki Festival are required to attend this briefing. Please attend with one or two representatives.\n- The content is identical on both days. Please attend on whichever day is convenient for you.\n- Those considering exhibiting as individuals do not need to attend this briefing. Please attend the \"Individual Exhibitor Briefing\" to be held at a later date.",
      },
    ],
  },
  {
    id: "20260603001",
    date: "2026-06-03",
    title: {
      ja: "松ヶ崎祭出展者用ポータル『ぴよナビ』が公開されました！",
      en: "The Matsugasaki Festival exhibitor portal “Piyo Navi” has been released!",
    },
    body: [
      {
        ja: "松ヶ崎祭の出展者の皆さま向けポータルサイト『ぴよナビ』を公開しました。出展申込みから当日までの流れ、各種お知らせ、マイページでの手続きなどをこちらでご案内します。",
        en: "We have launched “Piyo Navi,” the portal site for Matsugasaki Festival exhibitors. Here you can find the flow from application to the day of the event, various announcements, and procedures available on My Page.",
      },
      {
        ja: "出展に関する大切なお知らせは随時こちらのページに掲載します。定期的にご確認いただきますようお願いいたします。",
        en: "Important announcements about exhibiting will be posted on this page from time to time. Please check back regularly.",
      },
      {
        ja: "ご不明な点がございましたら、お問い合わせフォームよりご連絡ください。",
        en: "If you have any questions, please contact us via the inquiry form.",
      },
    ],
  },
];

export function getNewsItem(id: string): NewsItem | undefined {
  return newsItems.find((item) => item.id === id);
}
