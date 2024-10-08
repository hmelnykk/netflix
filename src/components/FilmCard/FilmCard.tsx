import { createPortal } from "react-dom";
import { ModalWindow } from "../ModalWindow";
import { useState, useMemo } from "react";
import { FilmTemplate } from "../types";

const FilmCard = ( film: {film: FilmTemplate}) => {
    const filmObject: FilmTemplate = film.film;
    const posterId: string = filmObject.poster;

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const posterClass = useMemo(() => {
        switch (posterId) {
            case "cruella-poster":
                return 'bg-cruella-poster';
            case "dune-poster":
                return 'bg-dune-poster';
            case "father3-poster":
                return 'bg-father3-poster';
            case "nttd-poster":
                return 'bg-nttd-poster';
            case "sc-poster":
                return 'bg-sc-poster';
            case "gk-poster":
                return 'bg-gk-poster';
        }

    }, []);

    const ap = document.getElementById('app');

    return (
        <div className={`min-w-[214px] h-[300px] bg-slate-300 rounded-[6px] transition-all duration-[400ms] hover:scale-105 max-md:mb-4`}>
            <div className={`w-[100%] h-[100%] rounded-[6px] ${posterClass} bg-cover`}
            onClick={(e) => setModalOpen(true)}>
                <div className="w-[100%] h-[100%] rounded-[6px] bg-gradient-to-t from-gray-900 to-black/0 flex items-end p-4 font-bold text-5xl">
                    <h1>{filmObject.id}</h1>
                </div>
            </div>
            {modalOpen ? createPortal(<ModalWindow film={filmObject} isOpen={modalOpen} onClose={setModalOpen}/>, ap ? ap : document.body) : <></>}
        </div>
    );
}

export default FilmCard;
