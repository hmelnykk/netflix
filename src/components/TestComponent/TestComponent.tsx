import { useEffect, useState } from "react";
import filmsService from "../../services/films.service";
import React from "react";

const TestComponent = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        filmsService.getFilms('/films')
            .then(data => setFilms(data.data))

    }, [films?.length])
    return <></>
}

export default TestComponent;
