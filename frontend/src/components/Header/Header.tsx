import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header_container}>
      <h1>Checkpoint : frontend</h1>
      <Link className={styles.header_link} href="/">
        Countries
      </Link>
    </header>
  );
}
