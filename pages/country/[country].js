import React, { useContext, useEffect, useState } from "react";
import { RoutePatch } from "../_app";
import Image from "next/image";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [route] = useContext(RoutePatch);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${route}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, []);

  const { name, alpha2Code, capital, flag, population, region } = country;

  console.log(country);
  return (
    <div className="flex flex-col w-2/5 mx-auto text-center">
      <h2 className="text-3xl text-center my-10">{name}</h2>
      <img
        className="mx-auto"
        src={flag}
        width={400}
        height={360}
        alt=""
        loading="lazy"
      />
      <p>{alpha2Code}</p>
      <p>{capital}</p>
      <p>{population}</p>
      <p>{region}</p>
    </div>
  );
};

export default Country;
