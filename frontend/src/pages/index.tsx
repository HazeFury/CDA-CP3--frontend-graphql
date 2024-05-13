import AddCountry from "@/components/AddCountry/AddCountry";
import CountryCard from "@/components/CountryCard/CountryCard";
import { useCountriesQuery } from "@/types/graphql";

export default function Home() {
  const { data } = useCountriesQuery();

  return (
    <>
      <AddCountry />
      <section className="countries-section">
        {data?.countries.length > 0 ? (
          data?.countries.map((country) => (
            <CountryCard key={country.id} data={country} />
          ))
        ) : (
          <p>rien à affficher</p>
        )}
      </section>
    </>
  );
}
