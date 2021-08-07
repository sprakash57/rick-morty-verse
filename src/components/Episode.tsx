import { useQuery } from "react-query";
import { EPISODE_URL, QueryKeys } from "../constants";
import { fetchEpisodes } from "../helpers/api";
import styles from "../styles/components/Episode.module.css";
import Loader from "./common/Loader";

const Episode = ({ param }: { param: string }) => {

    const { data, status } = useQuery(
        QueryKeys.EPISODES,
        () => fetchEpisodes(`${EPISODE_URL}/${param}`),
        { cacheTime: 1000 } // Always pull fresh data on mount
    );

    if (status === "loading") return <Loader label="Getting Episodes..." size={10} />

    if (status === "success") {
        return (
            <>
                <p className={styles.episodeHeader}>Episodes</p>
                <ul className={styles.episodeList}>
                    {Array.isArray(data)
                        ? data.map(ep => <li key={ep.id}>{ep.name}</li>)
                        : <li>{data?.name}</li>}
                </ul>
            </>
        )
    }

    return <p>No Epidoes Available!!</p>
}

export default Episode;
