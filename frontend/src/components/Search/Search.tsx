import styles from "./Search.module.css";
import {
  useContinentsQuery,
  useAddCountryMutation,
  NewCountryInput,
} from "@/types/graphql";
import { FormEvent, useState } from "react";

export default function Search() {
  const { data: continent } = useContinentsQuery();

  const [addNewCountry] = useAddCountryMutation();

  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const formJSON: any = Object.fromEntries(formData.entries());
    setError("");
    try {
      if (formJSON.name && formJSON.code && formJSON.emoji) {
        await addNewCountry({ variables: { data: { ...formJSON } } });
      }
    } catch (err) {
      console.error(err);
      setError("une erreur s'est produite");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search_container}>
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
      {/* <div className={styles.input_container}>
        <label htmlFor="continent">Continent</label>
        <select
          name="continent"
          id="continent"
          className={styles.search_select_box}
        >
          {continent?.continents.map((continent) => (
            <option key={continent.id} value={continent.id}>
              {continent.name}
            </option>
          ))}
        </select>
      </div> */}
      <p>{error}</p>
      <button className={styles.search_btn}>Add</button>
    </form>
  );
}
