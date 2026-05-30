export type Language = "ja" | "en";

export const LANGUAGES: Language[] = ["ja", "en"];

export type Translation = {
  common: {
    header: {
      logoAlt: string;
      brandLine1: string;
      brandLine2: string;
      menuOpen: string;
      langSwitch: string;
    };
    menu: {
      label: string;
      close: string;
      items: {
        home: string;
        news: string;
        guide: string;
        exhibitionTypes: string;
        rules: string;
        faq: string;
        contact: string;
      };
    };
    footer: {
      description: string;
      university: string;
      committee: string;
      linksHeading: string;
      committeeHeading: string;
      links: {
        guide: string;
        rules: string;
        faq: string;
        contact: string;
        relatedLinks: string;
        login: string;
      };
      copyright: string;
    };
    mypageSidebar: {
      title: string;
      items: {
        home: string;
        tasks: string;
        webInfo: string;
        payment: string;
        notice: string;
        contact: string;
      };
      logout: string;
    };
  };
  pages: {
    home: {
      loginCardLine1: string;
      loginCardLine2: string;
      logoAlt: string;
      lead: string;
      loginButton: string;
      scroll: string;
      topicsHeading: string;
      newsHeading: string;
      topics: {
        matsufes: { title: string; text: string };
        about: { title: string; text: string };
        guide: { title: string; text: string };
        diagnosis: { title: string; text: string };
        m1: { title: string; text: string };
      };
      news: { date: string; text: string }[];
    };
    about: {
      title: string;
      paragraphs: string[];
    };
    contact: {
      title: string;
      lead: string;
      labels: {
        name: string;
        email: string;
        groupName: string;
        groupNumber: string;
        category: string;
        body: string;
      };
      placeholders: {
        groupNumber: string;
        bodyText: string;
      };
      categoryOptions: {
        select: string;
        general: string;
        payment: string;
        other: string;
      };
      submit: string;
    };
    diagnosis: {
      title: string;
      lead: string;
      detailButton: string;
      chartAlt: string;
    };
    exhibitionTypes: {
      title: string;
      lead: string;
      diagnosisButton: string;
      submissionsLabel: string;
      types: {
        title: string;
        en: string;
        icon: string;
        text: string;
        submissions: string[];
      }[];
    };
    faq: {
      title: string;
      qaLabel: string;
      faqs: { q: string; a: string }[];
    };
    guide: {
      title: string;
      lead: string;
      steps: {
        title: string;
        text: string;
        cta?: { label: string; href: string };
      }[];
    };
    links: {
      title: string;
      label: string;
      groups: {
        title: string;
        items: { name: string; url: string; description?: string }[];
      }[];
    };
    login: {
      closeAlt: string;
      logoAlt: string;
      title: string;
      placeholders: {
        groupNumber: string;
        password: string;
      };
      submit: string;
      submitLine2: string;
      error: string;
    };
    m1: {
      title: string;
      paragraphs: string[];
    };
    matsufes: {
      title: string;
      paragraphs: string[];
    };
    news: {
      title: string;
      items: { date: string; title: string }[];
    };
    rules: {
      title: string;
      lead: string;
      button: string;
    };
    mypageHome: {
      greeting: string;
      groupId: string;
      cards: {
        tasks: string;
        deadline: string;
        unpaid: string;
        web: string;
      };
      tasksHeading: string;
      tasksNote: string;
      sampleTaskName: string;
      sampleTaskMeta: string;
      sampleTaskMetaRemaining: string;
      noticeHeading: string;
    };
    mypageTasks: {
      title: string;
      sampleTaskName: string;
      sampleTaskDeadline: string;
      badge: string;
    };
    mypageWebInfo: {
      title: string;
      cardTitle: string;
      cardBody: string;
      badge: string;
    };
    mypagePayment: {
      title: string;
      cardTitle: string;
      cardBody: string;
      badge: string;
    };
    mypageNotice: {
      title: string;
      items: { date: string; title: string }[];
      badge: string;
    };
    mypageContact: {
      title: string;
      cardTitle: string;
      cardBody: string;
      badge: string;
    };
  };
};

export const translations: Record<Language, Translation> = {
  ja: {
    common: {
      header: {
        logoAlt: "松ヶ崎祭ロゴ",
        brandLine1: "松ヶ崎祭",
        brandLine2: "出展団体用ポータル",
        menuOpen: "メニューを開く",
        langSwitch: "JA/EN",
      },
      menu: {
        label: "メニュー",
        close: "メニューを閉じる",
        items: {
          home: "ホーム",
          news: "お知らせ",
          guide: "出展ガイド",
          exhibitionTypes: "出展形態",
          rules: "出展規約",
          faq: "よくある質問",
          contact: "お問い合わせ",
        },
      },
      footer: {
        description:
          "松ヶ崎祭のポータルサイトです。\n出展に必要な情報の確認・各種出展物管理を行えます。",
        university: "国立大学法人京都工芸繊維大学",
        committee: "松ヶ崎祭実行委員会",
        linksHeading: "リンク",
        committeeHeading: "委員会関連",
        links: {
          guide: "出展ガイド",
          rules: "出展規約",
          faq: "よくある質問",
          contact: "お問い合わせ",
          relatedLinks: "関連リンク",
          login: "団体ログイン",
        },
        copyright: "© 松ヶ崎祭実行委員会",
      },
      mypageSidebar: {
        title: "マイページ",
        items: {
          home: "ホーム",
          tasks: "タスク管理",
          webInfo: "WEB公開情報",
          payment: "支払い情報",
          notice: "おしらせ",
          contact: "お問い合わせ",
        },
        logout: "ログアウト\nする",
      },
    },
    pages: {
      home: {
        loginCardLine1: "ログインは",
        loginCardLine2: "こちらから",
        logoAlt: "ぴよナビ",
        lead: "出展者向けの情報提供・提出物管理ポータルサイトです。\n出展に必要な情報の確認・各種出展物の管理を行えます。",
        loginButton: "団体ログイン",
        scroll: "SCROLL",
        topicsHeading: "トピックス",
        newsHeading: "お知らせ",
        topics: {
          matsufes: { title: "松ヶ崎祭とは", text: "松ヶ崎祭の概要や歴史をご紹介します。" },
          about: { title: "ぴよナビとは", text: "ポータルの使い方や機能をご紹介します。" },
          guide: { title: "出展ガイド", text: "申し込みから当日までの流れをご案内します。" },
          diagnosis: { title: "出展形態診断", text: "あなたの出展形態がわかる診断チャート。" },
          m1: { title: "m-1グランプリについて", text: "m-1グランプリに関する情報はこちら。" },
        },
        news: [
          { date: "2026-05-30", text: "松ヶ崎祭出展団体ポータル『ぴよナビ』が公開されました！" },
        ],
      },
      about: {
        title: "ぴよナビとは",
        paragraphs: [
          "松ヶ崎祭における、出展者向けのポータルサイトです。",
          "ぴよナビでは、出展申込から松ヶ崎祭当日までに必要な情報を、ひとつの場所でまとめて確認・管理することができます。各種提出物の管理、お支払い情報の確認、最新のお知らせの受け取りなど、出展団体の皆さまの負担を少しでも軽くできるよう設計しています。",
          "ご不明点やご相談は、お問い合わせフォームよりお気軽にお寄せください。松ヶ崎祭実行委員会一同、皆さまのご出展を心よりお待ちしております。",
        ],
      },
      contact: {
        title: "お問い合わせ",
        lead: "ご不明点やご相談がありましたら、以下のフォームよりお問い合わせください。",
        labels: {
          name: "お名前",
          email: "メールアドレス",
          groupName: "団体名",
          groupNumber: "団体番号 (任意)",
          category: "お問い合わせ種別",
          body: "お問い合わせ内容",
        },
        placeholders: {
          groupNumber: "例：A001",
          bodyText: "お問い合わせ内容を入力してください。",
        },
        categoryOptions: {
          select: "選択してください",
          general: "出展について",
          payment: "支払いについて",
          other: "その他",
        },
        submit: "送信する",
      },
      diagnosis: {
        title: "出展形態診断",
        lead: "あなたの出展形態を、こちらのチャートで診断することができます。\n自分の出展形態がわからない方は、ぜひお試しください。",
        detailButton: "出展形態の詳細はこちら",
        chartAlt: "出展形態診断チャート",
      },
      exhibitionTypes: {
        title: "出展形態の紹介",
        lead: "各出展形態の概要と必要な提出物をご案内します。",
        diagnosisButton: "出展形態診断はこちら",
        submissionsLabel: "必要な提出物",
        types: [
          {
            title: "飲食",
            en: "food",
            icon: "/imgs/icon-food.svg",
            text: "飲食物を調理・販売する出展形態です。食品衛生に関する規定を遵守してください。",
            submissions: [
              "参加同意書",
              "調理工程表",
              "調理者名簿",
              "レンタルフォーム",
              "検便",
              "提供食品名簿フォーム",
              "電源申請フォーム",
              "パンフレット/webページ掲載情報フォーム",
            ],
          },
          {
            title: "物販",
            en: "goods",
            icon: "/imgs/icon-goods.svg",
            text: "飲食以外の物品を販売する出展形態です。",
            submissions: [
              "参加同意書",
              "レンタルフォーム",
              "電源申請フォーム",
              "パンフレット/webページ掲載情報フォーム",
            ],
          },
          {
            title: "パフォーマンス",
            en: "performance",
            icon: "/imgs/icon-performance.svg",
            text: "音楽・ダンス・演劇等のパフォーマンスを行う出展形態です。",
            submissions: [
              "参加同意書",
              "ステージセッティングシート",
              "パンフレット/webページ掲載情報フォーム",
            ],
          },
          {
            title: "展示",
            en: "exhibition",
            icon: "/imgs/icon-exhibition.svg",
            text: "教室や屋外スペースでの展示を行う出展形態です。",
            submissions: [
              "参加同意書",
              "レンタルフォーム",
              "電源申請フォーム",
              "パンフレット/webページ掲載情報フォーム",
            ],
          },
          {
            title: "手づくりテント",
            en: "handmade tent",
            icon: "/imgs/icon-tent.svg",
            text: "独自のテントを設営して出展する出展形態です。",
            submissions: [
              "参加同意書",
              "手づくりテント設計図",
              "手づくりテント希望区画フォーム",
              "レンタルフォーム",
              "電源申請フォーム",
              "単管申請フォーム",
              "パンフレット/webページ掲載情報フォーム",
            ],
          },
          {
            title: "体験",
            en: "experience",
            icon: "/imgs/icon-experience.svg",
            text: "来場者の方が体験できる出展を行う出展形態です。",
            submissions: [
              "参加同意書",
              "レンタルフォーム",
              "パンフレット/webページ掲載情報フォーム",
            ],
          },
          {
            title: "個人出展",
            en: "solo exhibition",
            icon: "/imgs/icon-solo.svg",
            text: "個人で物販や展示を行う出展形態です。",
            submissions: ["参加同意書", "パンフレット/webページ掲載情報フォーム"],
          },
        ],
      },
      faq: {
        title: "よくある質問",
        qaLabel: "Q&A",
        faqs: [
          {
            q: "一つのテントで複数の出展形態を兼ねることはできますか？",
            a: "パフォーマンスと個人出展を除き、可能です。例えば、飲食と物販を同時に行うことができます。ただし、両方の形態に必要な提出物を提出していただく必要があります。",
          },
        ],
      },
      guide: {
        title: "出展ガイド",
        lead: "出展申込から、松ヶ崎祭当日までの流れをご案内します。",
        steps: [
          {
            title: "出展団体説明会への参加",
            text: "出展希望者は必ず説明会にご参加ください。参加は責任者のみで構いません。\n出展団体説明会は7/1(水)・7/3(金) です。",
          },
          {
            title: "出展形態の確認",
            text: "松ヶ崎祭には飲食、物販、展示、パフォーマンスなどの出展形態がございます。",
            cta: { label: "出展形態の紹介 ›", href: "/exhibition-types" },
          },
          {
            title: "出展規約の確認",
            text: "出展規約を必ずご確認ください。\n規約に同意のうえ、お申込みをお願いします。",
            cta: { label: "出展規約を確認 ›", href: "/rules" },
          },
          {
            title: "出展申し込み",
            text: "出展申し込みフォームより必要事項を記入し、お申込みください。\nお申込み後、団体番号とパスワードが発行されます。\n※団体番号とパスワードで、マイページへログインできます。",
          },
          {
            title: "参加保証金の納入",
            text: "お申し込みにあたり参加保証金(1万円)を納入していただきます。※個人出展は除く。\n保証金は、松ヶ崎祭終了後に出展ブース等の原状回復がされていることを確認したのち、後日返金させていただきます。",
          },
          {
            title: "各種提出物の提出",
            text: "マイページにログインし、期限までに必要な書類などを提出してください。",
          },
          {
            title: "出展料の納入",
            text: "指定の期日までに出展料を納入してください。\n納入金額などはマイページから確認できます。",
          },
          {
            title: "レンタル物品の受け取り",
            text: "レンタルを申請した方は、物品を指定の日時・場所にて受け取ってください。",
          },
          {
            title: "松ヶ崎祭当日",
            text: "準備を万全にして、松ヶ崎祭当日をお迎えください。\n不明点は松ヶ崎祭実行委員までお問い合わせください。",
          },
          {
            title: "参加保証金の返金",
            text: "出展ブース等の原状回復がされていることを確認したのち、後日返金させていただきます。",
          },
        ],
      },
      links: {
        title: "関連リンク",
        label: "LINKS",
        groups: [
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
              { name: "Instagram (@kit_matsufes)", url: "https://www.instagram.com/kit_matsufes/" },
              { name: "X (@matsufes_info)", url: "https://x.com/matsufes_info" },
            ],
          },
        ],
      },
      login: {
        closeAlt: "閉じる",
        logoAlt: "ぴよナビ",
        title: "ログイン",
        placeholders: {
          groupNumber: "団体番号",
          password: "パスワード",
        },
        submit: "ログイン",
        submitLine2: "する",
        error: "団体番号またはパスワードが異なります",
      },
      m1: {
        title: "m-1グランプリとは",
        paragraphs: [
          "m-1（マツワン）グランプリは、来場者さまの投票によって出展形態ごとのNo.1を決定する、松ヶ崎祭の目玉企画です。来場者さま一人ひとりの「いちばん良かった！」が、各部門の頂点を選び出します。",
          "見事1位に輝いた出展には、栄誉とともに豪華商品が贈られます。",
          "詳細は出展者団体説明会や松ヶ崎祭HPで発表されます。",
        ],
      },
      matsufes: {
        title: "松ヶ崎祭とは",
        paragraphs: [
          "松ヶ崎祭は、京都工芸繊維大学松ヶ崎キャンパスで開催される大学祭です。学生団体・サークル・研究室などによる多彩な出展が並び、学内外から多くの来場者をお迎えする、年に一度のお祭りです。",
          "飲食・物販・展示・パフォーマンスなど、さまざまな形態で出展が行われ、キャンパス全体が活気に包まれます。地域の皆さまや受験生の方々にも、大学の雰囲気を感じていただける機会となっています。",
        ],
      },
      news: {
        title: "お知らせ",
        items: [
          { date: "2026-05-30", title: "出展団体ポータル『ぴよナビ』が公開されました！" },
        ],
      },
      rules: {
        title: "出展規約",
        lead: "出展にあたり以下の規約を必ずご確認ください。\n出展申し込みをもって、本規約に同意したものとみなします。",
        button: "出展規約を確認する",
      },
      mypageHome: {
        greeting: "こんにちは、出展団体Aさん",
        groupId: "団体番号　0000",
        cards: {
          tasks: "未提出タスク",
          deadline: "期限間近",
          unpaid: "未払い金額",
          web: "WEB公開情報",
        },
        tasksHeading: "締切の近いタスク",
        tasksNote: "提出期限の早い順に表示しています。",
        sampleTaskName: "パンフレット掲載用画像の提出",
        sampleTaskMeta: "締切：2026/08/31 23:59　",
        sampleTaskMetaRemaining: "残り100日",
        noticeHeading: "おしらせ",
      },
      mypageTasks: {
        title: "タスク管理",
        sampleTaskName: "パンフレット掲載用画像の提出",
        sampleTaskDeadline: "締切：2026/08/31 23:59",
        badge: "残り100日",
      },
      mypageWebInfo: {
        title: "WEB公開情報",
        cardTitle: "パンフレット・公式サイトへの掲載情報",
        cardBody: "未編集の項目があります",
        badge: "編集する",
      },
      mypagePayment: {
        title: "支払い情報",
        cardTitle: "出展料 / レンタル料の未払いはありません",
        cardBody: "最終更新：2026/05/26",
        badge: "支払い済み",
      },
      mypageNotice: {
        title: "おしらせ",
        items: [
          { date: "2026-05-30", title: "出展団体ポータル『ぴよナビ』が公開されました！" },
          { date: "2026-05-15", title: "出展申込フォームの受付を開始しました。" },
          { date: "2026-04-01", title: "松ヶ崎祭2026 開催決定のお知らせ" },
        ],
        badge: "詳細を見る",
      },
      mypageContact: {
        title: "お問い合わせ",
        cardTitle: "ご質問・ご相談はこちらから",
        cardBody: "担当より2〜3営業日でご連絡いたします。",
        badge: "問い合わせる",
      },
    },
  },
  en: {
    common: {
      header: {
        logoAlt: "Matsugasaki Festival logo",
        brandLine1: "Matsugasaki Festival",
        brandLine2: "Exhibitor Portal",
        menuOpen: "Open menu",
        langSwitch: "JA/EN",
      },
      menu: {
        label: "Menu",
        close: "Close menu",
        items: {
          home: "Home",
          news: "News",
          guide: "Exhibitor Guide",
          exhibitionTypes: "Exhibition Types",
          rules: "Exhibitor Rules",
          faq: "FAQ",
          contact: "Contact",
        },
      },
      footer: {
        description:
          "The official portal for the Matsugasaki Festival.\nCheck information and manage exhibitor materials all in one place.",
        university: "Kyoto Institute of Technology",
        committee: "Matsugasaki Festival Executive Committee",
        linksHeading: "Links",
        committeeHeading: "Committee",
        links: {
          guide: "Exhibitor Guide",
          rules: "Exhibitor Rules",
          faq: "FAQ",
          contact: "Contact",
          relatedLinks: "Related Links",
          login: "Exhibitor Login",
        },
        copyright: "© Matsugasaki Festival Executive Committee",
      },
      mypageSidebar: {
        title: "My Page",
        items: {
          home: "Home",
          tasks: "Tasks",
          webInfo: "Web Info",
          payment: "Payment",
          notice: "Notices",
          contact: "Contact",
        },
        logout: "Log\nout",
      },
    },
    pages: {
      home: {
        loginCardLine1: "Log in",
        loginCardLine2: "from here",
        logoAlt: "Piyo Navi",
        lead: "An information and submission portal for exhibitors.\nCheck the information you need and manage your exhibitor materials.",
        loginButton: "Exhibitor Login",
        scroll: "SCROLL",
        topicsHeading: "Topics",
        newsHeading: "News",
        topics: {
          matsufes: {
            title: "About Matsugasaki Festival",
            text: "Learn about the overview and history of the Matsugasaki Festival.",
          },
          about: {
            title: "About Piyo Navi",
            text: "Learn how to use this portal and its features.",
          },
          guide: {
            title: "Exhibitor Guide",
            text: "A walkthrough from application to the day of the festival.",
          },
          diagnosis: {
            title: "Exhibition Type Quiz",
            text: "A chart that helps you find your exhibition type.",
          },
          m1: {
            title: "About the m-1 Grand Prix",
            text: "Information about the m-1 Grand Prix.",
          },
        },
        news: [
          {
            date: "2026-05-30",
            text: "The Matsugasaki Festival exhibitor portal “Piyo Navi” has been released!",
          },
        ],
      },
      about: {
        title: "About Piyo Navi",
        paragraphs: [
          "An exhibitor portal site for the Matsugasaki Festival.",
          "Piyo Navi lets you check and manage all the information you need from application through the day of the festival, all in one place. From managing submissions and confirming payment information to receiving the latest announcements, it is designed to lighten the load for exhibitor groups.",
          "If you have any questions or concerns, please feel free to reach us via the contact form. The Matsugasaki Festival Executive Committee looks forward to welcoming your exhibit.",
        ],
      },
      contact: {
        title: "Contact",
        lead: "If you have any questions or concerns, please reach out using the form below.",
        labels: {
          name: "Name",
          email: "Email",
          groupName: "Group name",
          groupNumber: "Group number (optional)",
          category: "Inquiry category",
          body: "Message",
        },
        placeholders: {
          groupNumber: "e.g. A001",
          bodyText: "Please enter your message.",
        },
        categoryOptions: {
          select: "Please select",
          general: "About exhibiting",
          payment: "About payment",
          other: "Other",
        },
        submit: "Send",
      },
      diagnosis: {
        title: "Exhibition Type Quiz",
        lead: "Use this chart to find out your exhibition type.\nIf you're unsure which type fits your group, give it a try.",
        detailButton: "See exhibition type details",
        chartAlt: "Exhibition type quiz chart",
      },
      exhibitionTypes: {
        title: "Exhibition Types",
        lead: "An overview of each exhibition type and the submissions required.",
        diagnosisButton: "Take the exhibition type quiz",
        submissionsLabel: "Required submissions",
        types: [
          {
            title: "Food",
            en: "food",
            icon: "/imgs/icon-food.svg",
            text: "A pop-up stall that prepares and sells food. Please follow all food safety regulations.",
            submissions: [
              "Participation agreement",
              "Cooking process sheet",
              "Cook roster",
              "Rental form",
              "Food item list form",
              "Stool test",
              "Power supply request form",
              "Pamphlet / web page listing form",
            ],
          },
          {
            title: "Goods",
            en: "goods",
            icon: "/imgs/icon-goods.svg",
            text: "A pop-up stall selling items other than food.",
            submissions: [
              "Participation agreement",
              "Rental form",
              "Power supply request form",
              "Pamphlet / web page listing form",
            ],
          },
          {
            title: "Performance",
            en: "performance",
            icon: "/imgs/icon-performance.svg",
            text: "An exhibition type for music, dance, theater, and other performances.",
            submissions: [
              "Participation agreement",
              "Stage setting sheet",
              "Pamphlet / web page listing form",
            ],
          },
          {
            title: "Exhibition",
            en: "exhibition",
            icon: "/imgs/icon-exhibition.svg",
            text: "An exhibition held in a classroom or an outdoor space.",
            submissions: [
              "Participation agreement",
              "Rental form",
              "Power supply request form",
              "Pamphlet / web page listing form",
            ],
          },
          {
            title: "Handmade Tent",
            en: "handmade tent",
            icon: "/imgs/icon-tent.svg",
            text: "An exhibition format where exhibitors set up their own tents.",
            submissions: [
              "Participation agreement",
              "Handmade tent blueprint",
              "Preferred plot form for handmade tent",
              "Rental form",
              "Power supply request form",
              "Pipe application form",
              "Pamphlet / web page listing form",
            ],
          },
          {
            title: "Experience",
            en: "experience",
            icon: "/imgs/icon-experience.svg",
            text: "An exhibition format that offers hands-on experiences for visitors.",
            submissions: [
              "Participation agreement",
              "Rental form",
              "Pamphlet / web page listing form",
            ],
          },
          {
            title: "Solo Exhibition",
            en: "solo exhibition",
            icon: "/imgs/icon-solo.svg",
            text: "Individual exhibitor format for selling goods or displaying works.",
            submissions: ["Participation agreement", "Pamphlet / web page listing form"],
          },
        ],
      },
      faq: {
        title: "FAQ",
        qaLabel: "Q&A",
        faqs: [
          {
            q: "Can a single tent be used for multiple exhibition types?",
            a: "Yes, with the exception of Performance and Solo Exhibition formats. For example, you can offer food and goods at the same time. However, you must submit all of the materials required for both formats.",
          },
        ],
      },
      guide: {
        title: "Exhibitor Guide",
        lead: "A walkthrough from application to the day of the Matsugasaki Festival.",
        steps: [
          {
            title: "Attend the exhibitor briefing",
            text: "We ask all prospective exhibitors to attend the briefing session.\nDates will be announced later in the \"News\" section.",
          },
          {
            title: "Confirm your exhibition type",
            text: "Confirm your exhibition type from food, goods, exhibition, performance, and more.\nSee the introduction to each type below.",
            cta: { label: "Exhibition types ›", href: "/exhibition-types" },
          },
          {
            title: "Review the exhibitor rules",
            text: "Be sure to review the rules for exhibiting.\nPlease apply only after agreeing to the rules.",
            cta: { label: "Review the rules ›", href: "/rules" },
          },
          {
            title: "Submit the exhibitor application",
            text: "Fill in and submit the exhibitor application form introduced at the briefing.\nAfter applying, you will be issued a group number and password.",
          },
          {
            title: "Submit required materials",
            text: "Log in to My Page and submit the required materials by the deadlines.\nThis includes the participation agreement and the pamphlet icon, among others.",
          },
          {
            title: "Pay the exhibitor fee",
            text: "Please pay the exhibitor fee by the specified deadline.\nThe amount can be confirmed from My Page.",
          },
          {
            title: "Pick up rental items",
            text: "Rental items you requested should be picked up at the specified date, time, and location.",
          },
          {
            title: "Matsugasaki Festival day",
            text: "Come fully prepared for the day of the Matsugasaki Festival.\nFor any questions, please contact the Matsugasaki Festival Executive Committee.",
          },
        ],
      },
      links: {
        title: "Related Links",
        label: "LINKS",
        groups: [
          {
            title: "Kyoto Institute of Technology",
            items: [
              {
                name: "Kyoto Institute of Technology official site",
                url: "https://www.kit.ac.jp/",
                description: "Official website of Kyoto Institute of Technology.",
              },
            ],
          },
          {
            title: "Matsugasaki Festival",
            items: [
              {
                name: "Matsugasaki Festival official site",
                url: "https://matsufes.info/",
                description: "Latest news and program information for the Matsugasaki Festival.",
              },
            ],
          },
          {
            title: "Committee social media",
            items: [
              { name: "Instagram (@kit_matsufes)", url: "https://www.instagram.com/kit_matsufes/" },
              { name: "X (@matsufes_info)", url: "https://x.com/matsufes_info" },
            ],
          },
        ],
      },
      login: {
        closeAlt: "Close",
        logoAlt: "Piyo Navi",
        title: "Log In",
        placeholders: {
          groupNumber: "Group number",
          password: "Password",
        },
        submit: "Log",
        submitLine2: "in",
        error: "Group number or password is incorrect",
      },
      m1: {
        title: "About the m-1 Grand Prix",
        paragraphs: [
          "The m-1 (Matsu-Wan) Grand Prix is a flagship event of the Matsugasaki Festival, where visitor votes determine the No. 1 exhibitor in each exhibition type. Each visitor's \"my favorite!\" pick chooses the top of each category.",
          "The first-place exhibits receive both recognition and special prizes.",
          "Details will be announced at the exhibitor briefing and on the Matsugasaki Festival website.",
        ],
      },
      matsufes: {
        title: "About Matsugasaki Festival",
        paragraphs: [
          "The Matsugasaki Festival is a university festival held at the Matsugasaki Campus of Kyoto Institute of Technology. With a wide variety of exhibits by student groups, clubs, and labs, it's an annual event that welcomes many visitors from inside and outside the university.",
          "Exhibits take many forms — food, goods, exhibitions, performances, and more — filling the entire campus with energy. It's also a great opportunity for community members and prospective students to experience the atmosphere of the university.",
        ],
      },
      news: {
        title: "News",
        items: [
          {
            date: "2026-05-30",
            title: "The exhibitor portal “Piyo Navi” has been released!",
          },
        ],
      },
      rules: {
        title: "Exhibitor Rules",
        lead: "Please review the following rules before exhibiting.\nSubmitting an application is taken as agreement to these rules.",
        button: "View the exhibitor rules",
      },
      mypageHome: {
        greeting: "Hello, Exhibitor Group A",
        groupId: "Group No.　0000",
        cards: {
          tasks: "Unsubmitted tasks",
          deadline: "Upcoming deadlines",
          unpaid: "Unpaid balance",
          web: "Web info",
        },
        tasksHeading: "Tasks with upcoming deadlines",
        tasksNote: "Sorted by the earliest deadline.",
        sampleTaskName: "Submit pamphlet image",
        sampleTaskMeta: "Deadline: 2026/08/31 23:59　",
        sampleTaskMetaRemaining: "100 days left",
        noticeHeading: "Notices",
      },
      mypageTasks: {
        title: "Tasks",
        sampleTaskName: "Submit pamphlet image",
        sampleTaskDeadline: "Deadline: 2026/08/31 23:59",
        badge: "100 days left",
      },
      mypageWebInfo: {
        title: "Web Info",
        cardTitle: "Pamphlet & official site listing",
        cardBody: "There are unedited items.",
        badge: "Edit",
      },
      mypagePayment: {
        title: "Payment",
        cardTitle: "No outstanding exhibitor or rental fees",
        cardBody: "Last updated: 2026/05/26",
        badge: "Paid",
      },
      mypageNotice: {
        title: "Notices",
        items: [
          {
            date: "2026-05-30",
            title: "The exhibitor portal “Piyo Navi” has been released!",
          },
          { date: "2026-05-15", title: "Exhibitor application form is now open." },
          { date: "2026-04-01", title: "Matsugasaki Festival 2026 confirmed." },
        ],
        badge: "View details",
      },
      mypageContact: {
        title: "Contact",
        cardTitle: "Questions and inquiries here",
        cardBody: "A staff member will respond within 2–3 business days.",
        badge: "Inquire",
      },
    },
  },
};
