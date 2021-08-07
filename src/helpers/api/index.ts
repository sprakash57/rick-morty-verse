import { CHARACTER_URL } from "../../constants";

export const fetchCharacters = async (page: number = 1): Promise<{ info: Info, results: CharacterResponse[] }> => {
    const response = await fetch(`${CHARACTER_URL}?page=${page}`);
    return response.json();
}
export const fetchLocations = async (url: string): Promise<LocationResponse> => {
    const response = await fetch(url);
    return response.json();
}

export const fetchEpisodes = async (url: string): Promise<EpisodeResponse> => {
    const response = await fetch(url);
    return response.json();
}
