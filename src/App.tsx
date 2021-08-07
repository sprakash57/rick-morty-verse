import Navigation from "./components/Navigation"
import { fetchCharacters } from "./helpers/api";
import { useQuery } from "react-query";
import Character from "./components/Character";
import styles from "./styles/App.module.css";
import { QueryKeys } from "./constants";
import { useState } from "react";
import Loader from "./components/common/Loader";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [page, setPage] = useState(1); // Starts from page 1.

  const { data, status, isPreviousData } = useQuery(
    [QueryKeys.CHARACTERS, page],
    () => fetchCharacters(page),
    { keepPreviousData: true } //Keep previous data in cache for smooth UI transition
  )

  if (status === "loading") return <Loader label="RickMortiverse approching..." labelClassName={styles.loaderLabel} />;

  if (status === "success" && data) {
    const { results, info } = data;
    const handleNavigate = (navigatedPage: number) => {
      setPage(navigatedPage)
    }
    return (
      <main>
        <Navigation info={info} page={page} isPrevData={isPreviousData} onNavigate={handleNavigate} />
        <section className={styles.characters}>
          {results.map((character) => (
            <Character
              key={character.id}
              character={character} />
          ))}
        </section>
      </main>
    );
  }

  return <ErrorPage />
}

export default App;
