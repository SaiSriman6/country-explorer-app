import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch countries
  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);

        let res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        let data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Country Explorer</h1>
      <SearchBar onSearch={setQuery} />
      {loading && <p>Loading countries...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;