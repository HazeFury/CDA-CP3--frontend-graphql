import styles from "./CountryCard.module.css";
import Link from "next/link";

export default function CountryCard({ data }) {
  return (
    <Link className={styles.header_link} href={`/country/${data.code}`}>
      <figure className={styles.country_card_container}>
        <p className={styles.country_name}>{data.name}</p>
        <p>{data.emoji}</p>
      </figure>
    </Link>
  );
}
