import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/SuperHeroes")}>
        Go To Super Heroes!
      </button>
      <button onClick={() => navigate("/RQSuperHeroes")}>
        Go To RQSuperHero
      </button>
    </div>
  );
}
