const key = 'ff95d80756471c49faed37afeef18a5d'

const getMovies = async (section, lang) => {
    const key = 'ff95d80756471c49faed37afeef18a5d' //Paste your api key
    const url = `https://api.themoviedb.org/3/movie/`

    const res = await fetch(`${url}${section}?api_key=${key}&language=${lang}&page=1`);
    return await res.json();
}

const getSerie = async (section, lang) => {
    const key = 'ff95d80756471c49faed37afeef18a5d' //Paste your api key
    const url = `https://api.themoviedb.org/3/tv/`

    const res = await fetch(`${url}${section}?api_key=${key}&language=${lang}&page=1`);
    return await res.json();
}

export {key, getMovies, getSerie}