import { useRouter } from "next/router";
import { useCountryQuery } from "@/types/graphql";

export default function Country() {
  const router = useRouter();
  const { countryCode } = router.query;

  const { data } = useCountryQuery({
    variables: { code: countryCode as string },
  });

  console.log(data);

  return (
    <section className="country-page">
      <p>
        {data?.country.name} ({data?.country.code})
      </p>
      <p>{data?.country.emoji}</p>
      <p>{data?.country.continent?.name}</p>
    </section>
  );
}
