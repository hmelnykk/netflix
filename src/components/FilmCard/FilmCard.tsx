import { createPortal } from "react-dom";
import { ModalWindow } from "../ModalWindow";

interface FilmTemplate {
    id: string,
    name: string,
    description: string,
    category: string,
    tags: string[],
    globalRating: number,
    countryRating: object[],
    poster: string
}

const FilmCard = ( film: {film: FilmTemplate}) => {
    const filmObject: FilmTemplate = film.film;
    const posterId: string = filmObject.poster;

    let posterClass;

    switch (posterId) {
        case "cruella-poster":
            posterClass = 'bg-cruella-poster';
            break;
        case "dune-poster":
            posterClass = 'bg-dune-poster';
            break;
        case "father3-poster":
            posterClass = 'bg-father3-poster';
            break;
        case "nttd-poster":
            posterClass = 'bg-nttd-poster';
            break;
        case "sc-poster":
            posterClass = 'bg-sc-poster';
            break;
        case "gk-poster":
            posterClass = 'bg-gk-poster';
            break;
    }

    const ap = document.getElementById('app');
    const modalWindow = document.getElementById('modal-window');

    return (
        <div className={`w-[214px] h-[300px] bg-slate-300 rounded-[6px] transition-all duration-[400ms] hover:scale-105`}>
            <div className={`w-[100%] h-[100%] rounded-[6px] ${posterClass} bg-cover`}
            onClick={(e) => {
                e.stopPropagation();
                if (modalWindow) modalWindow.classList.remove('hidden');
            }}></div>
            {ap ? createPortal(<ModalWindow film={film}/>, ap) : <></>}
        </div>
    );
}

export default FilmCard;
