import Search from "@/components/Search/Search";
import CountryCard from "@/components/CountryCard/CountryCard";

export default function Home() {
  const countries = [
    {
      id: "1",
      name: "France",
      emoji: "🇫🇷",
    },
    {
      id: "1",
      name: "China",
      emoji: "🇫🇷",
    },
    {
      id: "1",
      name: "Canada",
      emoji: "🇫🇷",
    },
    {
      id: "1",
      name: "Australia",
      emoji: "🇫🇷",
    },
    {
      id: "1",
      name: "Kenya",
      emoji: "🇫🇷",
    },
    {
      id: "1",
      name: "Brazil",
      emoji: "🇫🇷",
    },
  ];
  return (
    <>
      <Search />
      <section className="countries-section">
        {countries.map((country) => (
          <CountryCard data={country} />
        ))}
      </section>
    </>
  );
}
