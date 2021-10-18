import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
//import { useQuery } from "react-query";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SuperHeroes" element={<SuperHeroesPage />} />
        <Route path="/RQSuperHeroes" element={<RQSuperHeroesPage />} />
      </Routes>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/SuperHeroes">SuperHeroes</Link>
        <Link to="/RQSuperHeroes">RQSuperHeroesPage</Link>
      </nav>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
