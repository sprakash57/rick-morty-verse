export const fetchCharacters = async (page: number = 1): Promise<{ info: Info, results: CharacterResponse[] }> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    return response.json();
}
export const fetchLocations = async (url: string): Promise<LocationResponse> => {
    const response = await fetch(url);
    return response.json();
}