import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h2>
            <Image
              src="/imgs/piyo-navi-logo.svg"
              alt="ぴよナビ"
              width={350}
              height={77}
              className="site-footer__logo"
            />
          </h2>
          <p>
            松ヶ崎祭のポータルサイトです。<br />
            出展に必要な情報の確認・各種出展物管理を行えます。
          </p>
          <div className="footer-univ">
            国立大学法人京都工芸繊維大学<br />
            松ヶ崎祭実行委員会
          </div>
          <Image
            src="/imgs/matsu-festival-logo.svg"
            alt="松ヶ崎祭"
            width={160}
            height={60}
            className="site-footer__matsu-logo"
          />
        </div>

        <div className="site-footer__col">
          <h3>リンク</h3>
          <ul>
            <li><Link href="/guide">出展ガイド</Link></li>
            <li><Link href="/rules">出展規約</Link></li>
            <li><Link href="/faq">よくある質問</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>委員会関連</h3>
          <ul>
            <li><Link href="/links">関連リンク</Link></li>
            <li><Link href="/login">団体ログイン</Link></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__socials">
          <a href="https://www.instagram.com/kit_matsufes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src="/imgs/Instagram.svg" alt="" width={24} height={24} />
          </a>
          <a href="https://x.com/matsufes_info" target="_blank" rel="noopener noreferrer" aria-label="X">
            <Image src="/imgs/X.svg" alt="" width={24} height={24} />
          </a>
          <a href="mailto:kit.matsufes@gmail.com" aria-label="Mail">
            <Image src="/imgs/mail.svg" alt="" width={24} height={24} />
          </a>
        </div>
        <small>© 松ヶ崎祭実行委員会</small>
      </div>
    </footer>
  );
}
