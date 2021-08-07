import { useQuery } from "react-query";
import { fetchLocations } from "../helpers/api";

const Location = ({ name, url }: { name: string, url: string }) => {

    const { data, status } = useQuery("location", () => fetchLocations(url));

    if (status === "loading") return <div>Loading...</div>

    if (status === "success" && data) {
        const { dimension, residents } = data;
        const renderName = name.includes("(") ? name : `${name} (${dimension})`
        return <small>{renderName}, Population: {residents.length}</small>
    }

    return null;
}

export default Location;
