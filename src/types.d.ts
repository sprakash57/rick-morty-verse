interface Location {
    name: string;
    url: string;
}
interface CharacterResponse {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    episode: string[];
    location: {
        name: string;
        url: string;
    };
    origin: {
        name: string;
        url: string;
    };
}
interface Info {
    pages: number;
    next: string | null;
    prev: string | null;
}