import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

export default function RQSuperHeroes() {
  function fetchResults() {
    let res = axios.get("http://localhost:4000/superheroes");
    console.log(res);
    return res;
  }
  const {
    isLoading,
    data: heros,
    isError,
  } = useQuery("super-heroes", fetchResults);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an Error with your Data...</h2>;
  }
  return (
    <div>
      <h2>RQ Supre Hero Page</h2>
      {heros.data.map((hero) => (
        <h4 key={hero.name}>{hero.name}</h4>
      ))}
    </div>
  );
}
