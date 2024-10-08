import { useEffect, useState } from "react";
import filmsService from "../../services/films.service";

const TestComponent = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        filmsService.getFilms({})
            .then(data => setFilms(data.data))

    }, [films?.length])
    return <></>
}

export default TestComponent;
