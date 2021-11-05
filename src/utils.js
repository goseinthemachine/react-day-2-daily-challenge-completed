const apiKey = process.env.API_KEY;
export const getMoviesBySearchTerm = async (searchTerm) => {
    const url = new URL("http://www.omdbapi.com");
    url.searchParams.append("apikey",apiKey);
    url.searchParams.append("s",searchTerm);
    const result = await fetch(url);
    return await result.json();
};

export const getMovieDetailsById = async (id) => {
    const url = new URL("http://www.omdbapi.com");
    url.searchParams.append("apikey",apiKey);
    url.searchParams.append("i",id);
    const result = await fetch(url);
    return result.json();
}

