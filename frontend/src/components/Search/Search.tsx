import styles from "./Search.module.css";
import {
  useContinentsQuery,
  useAddCountryMutation,
  NewCountryInput,
} from "@/types/graphql";

export default function Search() {
  const { data: continent } = useContinentsQuery();

  //   const [addNewCountry] = useAddCountryMutation();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);

  //     const data = Object.fromEntries(formData);
  //     if (data.name && data.code && data.emoji) {
  //       addNewCountry({
  //         variables: {
  //           data: {
  //             name: data.name as string,
  //             code: data.code as string,
  //             emoji: data.emoji as string,
  //             continent: data.continent as string | undefined,
  //           },
  //         },
  //       });
  //     } else {
  //       //   toast({
  //       //     title: "Champ incomplet !",
  //       //     variant: "destructive",
  //       //   });
  //     }
  //   };

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
      </div>
      <button className={styles.search_btn}>Add</button>
    </form>
  );
}
