import getClient from "../helpers/client"

const getFilms = async (params: any | null) => {
    return getClient().get('/films')
        .then((data) => {
            return data;
        })
}

const filmsService = {
    getFilms,
}

export default filmsService;
