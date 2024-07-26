import Image from "next/image";
import styles from "./css/page.module.css";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}
