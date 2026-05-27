import Header from "../components/Header";
import MyPageSidebar from "../components/MyPageSidebar";
import styles from "./mypage.module.css";

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-wrap">
      <Header />
      <div className={styles.layout}>
        <MyPageSidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
