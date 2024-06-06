"use client";

import {useState, useEffect} from "react";

import {MdArrowForwardIos} from "react-icons/md";

import AnimePoster from "./anime-poster";

const BASE_API = "http://127.0.0.1:8000";

export default function AnimeSection(props) {
    const [anime_list, setAnimeList] = useState([]);

    async function getAnimeList() {
        try {
            await fetch(`${BASE_API}/anime`)
                .then(res => res.json())
                .then(data => setAnimeList(data));
        } catch (err) {
            console.error(`Failed to get anime list: ${err}`);
        }
    }

    useEffect(() => {
        getAnimeList();
    }, []);

    return <section id="anime-section" className="w-full h-max pb-4 bg-white">
        <div className="relative flex flex-row items-center h-12 mb-4 bg-gradient-to-r from-rose-400 to-yellow-300">
            <h1 className="ml-8 text-2xl text-white">Danh sách anime</h1>
            {/*<a className="absolute right-8 flex flex-row items-center text-2xl text-white underline">Xem*/}
            {/*    thêm <MdArrowForwardIos*/}
            {/*        className="text-xl"/><MdArrowForwardIos className="text-xl"/></a>*/}
        </div>
        <ul className="grid grid-cols-5">
            {anime_list?.map(anime=><AnimePoster id={anime.ID} name={anime.Name} poster={anime.Poster}/>)}
        </ul>
    </section>
}