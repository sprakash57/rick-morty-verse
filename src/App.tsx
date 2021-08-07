import Navigation from "./components/Navigation"
import { fetchCharacters } from "./helpers/api";
import { useQuery } from "react-query";
import Character from "./components/Character";
import styles from "./styles/App.module.css";
import { QueryKeys } from "./constants";

const App = () => {

  const { data, status } = useQuery(
    [QueryKeys.CHARACTERS],
    () => fetchCharacters()
  )

  if (status === "loading") return <div>Loaing...</div>;

  if (status === "success" && data) {
    const { results } = data;
    return (
      <main>
        <Navigation />
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

  return <p>Something went wrong...</p>
}

export default App;
