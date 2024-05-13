import styles from "./AddCountry.module.css";
import {
  useContinentsQuery,
  useAddCountryMutation,
  useCountriesQuery,
} from "@/types/graphql";
import { useState } from "react";

export default function Search() {
  const { data: continent } = useContinentsQuery(); // to get all continent from the database
  const { refetch } = useCountriesQuery(); // to actualize and see the new country added
  const [addNewCountry] = useAddCountryMutation(); // to add a new country

  const [error, setError] = useState(""); // to handle error

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    emoji: "",
    continent: {
      id: null,
    },
  });

  // to fill the form
  const handleFormData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // to set the countryID as it is in an object
  const handleFormContinent = (e: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      continent: {
        ...prevFormData.continent,
        id: parseInt(e.target.value),
      },
    }));
  };

  // to verify is every inputs are well filled before send a request to server
  const isValidFormat =
    formData.name !== "" &&
    formData.code.length === 2 &&
    formData.emoji.length === 2 &&
    formData.continent.id !== null;

  // function to add a new country
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isValidFormat) {
      setError("Tous les champs ne sont pas correctement remplis");
      return;
    }
    setError("");

    try {
      console.log(formData);
      await addNewCountry({ variables: { data: { ...formData } } }).then(() => {
        refetch();
      });
    } catch (err) {
      console.error(err.message);
      setError("Une erreur s'est produite");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.search_container}>
        <div className={styles.input_container}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleFormData}
            value={formData.name}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="emoji">Emoji</label>
          <input
            type="text"
            name="emoji"
            id="emoji"
            onChange={handleFormData}
            value={formData.emoji}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="code">Code</label>
          <input
            type="text"
            name="code"
            id="code"
            onChange={handleFormData}
            value={formData.code}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="continent">Continent</label>
          <select
            name="continent"
            id="id"
            className={styles.search_select_box}
            onChange={handleFormContinent}
          >
            <option>-- choose a continent --</option>
            {continent?.continents.map((continent) => (
              <option key={continent.id} value={continent.id}>
                {continent.name}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.search_btn}>Add</button>
        {error !== "" && <p className={styles.error_message}>{error}</p>}
      </form>
    </>
  );
}
