'use client'
import {useState, useEffect} from 'react';
import NextCors from 'nextjs-cors';

import {MdArrowForwardIos} from "react-icons/md";

import AnimePoster from "./anime-poster";
import {NextResponse} from "next/server";


export default function AnimeSection(props) {
    const [anime, setAnime] = useState([]);
    const [FetchingStatus, setFetchingStatus] = useState(true);

    const BASE_API = "http://127.0.0.1:8000";

    useEffect(() => {
        if (FetchingStatus) {
            getAnimeList();
        }
        return setFetchingStatus(false);
        // getAnimeList();
    });

    async function getAnimeList(req, res) {
        try {
            await NextCors(req, res, {
                // Options
                methods: ['GET'],
                origin: '*',
                optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
            });
            res = await fetch("http://127.0.0.1:8000");
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            setAnime(res.json());
            
        } catch (err) {
            console.error(`Fetching API failed! Because: ${err}`);
        }
    }

    return <section id="anime-section" className="w-full h-max pb-4 bg-white">
        <div className="relative flex flex-row items-center h-12 mb-4 bg-gradient-to-r from-rose-400 to-yellow-300">
            <h1 className="ml-8 text-2xl text-white">Name section</h1>
            <a className="absolute right-8 flex flex-row items-center text-2xl text-white underline">Xem
                thêm <MdArrowForwardIos
                    className="text-xl"/><MdArrowForwardIos className="text-xl"/></a>
        </div>
        <ul className="grid grid-cols-5">
            {
                anime.map((e, i) => <AnimePoster key={i} poster={e.Poster} title={e.Title}/>)
            }
        </ul>
    </section>
}