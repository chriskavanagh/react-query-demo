import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import PaginatedColors from "./components/PaginatedColors";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import InfinitePagination from "./components/InfinitePagination";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";

//import { useQuery } from "react-query";

//`https://api.github.com/search/repositories?q=topic:reactjs&per_page=30=page=1`

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SuperHeroes" element={<SuperHeroesPage />} />
        <Route path="/RQSuperHeroes" element={<RQSuperHeroesPage />} />
        <Route path="/colors" element={<PaginatedColors />} />
        <Route path="/icolors" element={<InfinitePagination />} />
        <Route path="/cursor" element={<Cursor />} />
      </Routes>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/SuperHeroes">SuperHeroes</Link>
        <Link to="/RQSuperHeroes">RQSuperHeroesPage</Link>
        <Link to="/colors">Colors</Link>
        <Link to="/icolors">Infinite Colors</Link>
      </nav>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
