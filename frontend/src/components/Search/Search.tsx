import styles from "./Search.module.css";

export default function Search() {
  return (
    <form className={styles.search_container}>
      <div className={styles.input_container}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="emoji">Emoji</label>
        <input type="text" name="emoji" id="emoji" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="code">Code</label>
        <input type="text" name="code" id="code" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="continent">Continent</label>
        <select name="continent" id="continent" className={styles.search_select_box}>
            <option value="1">Europe</option>
            <option value="1">Asie</option>
            <option value="1">Afrique</option>
        </select>
      </div>
      <button className={styles.search_btn}>Add</button>
    </form>
  );
}
