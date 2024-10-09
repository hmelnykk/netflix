import getClient from "../helpers/client"

const getFilms = async (url: string) => await getClient().get(url)
        .then((data) => data.data),

 filmsService = {
    getFilms,
}

export default filmsService;
