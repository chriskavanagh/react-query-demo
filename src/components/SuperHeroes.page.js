import React, { useState } from "react";
import axios from "axios";

export default function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  return (
    <div>
      <h2>Super Hero Page</h2>
    </div>
  );
}
