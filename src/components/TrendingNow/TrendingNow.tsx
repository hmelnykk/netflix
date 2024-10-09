import { useEffect, useState } from "react";
import { FilmCard } from "../FilmCard";
import { FilmTemplate } from "../types";
import filmsService from "../../services/films.service";
import { Carousel } from "../Carousel";
import React from "react";

const TrendingNow = () => {
    //  [countryFilter, setCountryFilter] = useState<string>('ukraine'),
    //  [categoryFilter, setCategoryFilter] = useState<string>('movies'),
    const [films, setFilms] = useState<FilmTemplate[]>([]);

    useEffect(() => {

        let isLoading = true;
        filmsService.getFilms('/films')
            .then(data => {if (isLoading) {setFilms(data)}})

        return () => {isLoading = false};    

    }, [films?.length])

    return (
        <div className="flex justify-center p-8">
            <div className="text-white w-[1200px] h-[450px] max-md:w-[100%] max-md:h-auto">
                <h1 className="text-3xl font-extrabold mb-4">Trending Now</h1>
                <div className="filters flex gap-4 mb-4">
                    <select className="bg-transparent w-[105px] h-[40px] border border-gray-500 rounded-[6px] p-1" name="country-filter" id="country-filter"
                        onChange={() => {
                            // setCountryFilter(e.target.value);
                        }}>
                        <option value="ukraine">
                            Ukraine
                        </option>
                        <option value="global">
                            Global
                        </option>
                    </select>
                    <select className="bg-transparent w-[105px] h-[40px] border border-gray-500 rounded-[6px] p-1" name="category-filter" id="category-filter"
                        onChange={() => {
                            // setCategoryFilter(e.target.value);
                        }}>
                        <option value="movies">
                            Movies
                        </option>
                        <option value="tv-shows">
                            TV Shows
                        </option>
                    </select>
                </div>
                <div className="films flex gap-4 max-md:block">
                    <Carousel toShow={5}>
                        {
                            films.map((film: FilmTemplate) => <FilmCard key={film.id} film={film} />)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default TrendingNow;
