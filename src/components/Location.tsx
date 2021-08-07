import { useQuery } from "react-query";
import { fetchLocations } from "../helpers/api";
import Loader from "./common/Loader";

const Location = ({ name, url }: { name: string, url: string }) => {

    const { data, status } = useQuery("location", () => fetchLocations(url));

    if (status === "loading") return <Loader size={10} />

    if (status === "success" && data) {
        const { dimension, residents } = data;
        // If dimension exist in the name already then skip the dimension otherwise concat it
        const renderName = name.includes("(") ? name : `${name} (${dimension})`
        return <small>{renderName}, Population: {residents.length}</small>
    }

    return null;
}

export default Location;
