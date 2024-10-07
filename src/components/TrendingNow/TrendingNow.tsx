import { useEffect, useState } from "react";
import { FilmCard } from "../FilmCard";

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

const TrendingNow = () => {
    const [countryFilter, setCountryFilter] = useState<string>('ukraine');
    const [categoryFilter, setCategoryFilter] = useState<string>('movies');
    const [films, setFilms] = useState<FilmTemplate[]>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/films`)
            .then (response => response.json())
            .then (json => setFilms(json))
            .catch (error => console.log('unable to connect to db'))
    }, [process.env.REACT_APP_BASE_URL])

    return (
        <div className="flex justify-center p-8">
            <div className="text-white w-[1200px] h-[450px]">
                <h1 className="text-3xl font-extrabold mb-4">Trending Now</h1>
                <div className="filters flex gap-4 mb-4">
                    <select className="bg-transparent w-[105px] h-[40px] border border-gray-500 rounded-[6px] p-1" name="country-filter" id="country-filter"
                    onChange={(e) => {
                        setCountryFilter(e.target.value);
                    }}>
                        <option value="ukraine">
                            Ukraine
                        </option>
                        <option value="global">
                            Global
                        </option>
                    </select>
                    <select className="bg-transparent w-[105px] h-[40px] border border-gray-500 rounded-[6px] p-1" name="category-filter" id="category-filter"
                    onChange={(e) => {
                        setCategoryFilter(e.target.value);
                    }}>
                        <option value="movies">
                            Movies
                        </option>
                        <option value="tv-shows">
                            TV Shows
                        </option>
                    </select>
                </div>
                <div className="films flex gap-4">
                    {
                        films.map((film: FilmTemplate) => {
                            return <FilmCard film={film} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default TrendingNow;
