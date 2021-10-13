import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import "./App.css";

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
        <Link to="/RQSuperHeroesPage">RQSuperHeroesPage</Link>
      </nav>
    </div>
  );
}

export default App;
