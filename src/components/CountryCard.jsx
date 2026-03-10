import React from "react";

function CountryCard({ country }) {
  return (
    <div className="border rounded p-3 shadow">
      <img  src={country.flags.png} alt="" className="w-full h-32 object-cover"/>
      <h3 className="font-bold mt-2">{country.name.common}</h3>
      <p><b>Capital:</b> {country.capital?.[0]}</p>
      <p><b>Population:</b> {country.population}</p>
      <p><b>Region:</b> {country.region}</p>
    </div>
  );
}

export default CountryCard;