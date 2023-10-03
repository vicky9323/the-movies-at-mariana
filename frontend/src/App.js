import "./App.css";
import Header from "./components/head/header";
import MovieList from "./components/body/movieList";
import { SearchProvider } from "./context/searchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <MovieList />
      </SearchProvider>
    </div>
  );
}

export default App;
