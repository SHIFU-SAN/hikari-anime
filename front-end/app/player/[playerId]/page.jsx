"use client";

import {useState, useEffect} from 'react';

import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";

const BASE_API = "http://127.0.0.1:8000";

export default function Page({params}) {
    const [anime, setAnime] = useState({});
    const [episodes_list, setEpisodesList] = useState([]);
    const [video_index, setVideoIndex] = useState(0);

    async function getEpisodesList() {
        try {
            await fetch(`${BASE_API}/video/anime/${params.playerId}`)
                .then(res => res.json())
                .then(data => setEpisodesList(data));
        } catch (err) {
            console.error(`Failed to get episodes list! Because: ${err}`);
        }
    }

    async function getAnimeInfo() {
        try {
            await fetch(`${BASE_API}/anime/${params.playerId}`)
                .then(res => res.json())
                .then(data => setAnime(data));
        } catch (err) {
            console.error(`Failed to get anime info! Because: ${err}`);
        }
    }

    useEffect(() => {
        getEpisodesList();
        getAnimeInfo();
    }, []);
    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem] pt-2">
            <section className="w-1/2 bg-white mx-auto py-4 mb-2 rounded-xl">
                <iframe className='sproutvideo-player mx-auto rounded-xl'
                        src={episodes_list[video_index]?.Source} width='786'
                        height='435' allowFullScreen referrerPolicy='no-referrer-when-downgrade'
                        title='Video Player'></iframe>
                <div className="w-[786px] mx-auto mt-5">
                    <h1 className="mb-4 text-2xl font-bold">{`${anime.Name} - ${episodes_list[video_index]?.Name}`}</h1>
                    <ul className="grid grid-cols-12 gap-4 ">
                        {episodes_list?.map((episode, index) => <div
                            onClick={()=>{setVideoIndex(index)}}
                            className="justify-self-center flex justify-center items-center w-max min-w-12 px-4 py-2 rounded-lg bg-rose-400 font-bold text-white shadow-lg cursor-pointer"
                        >
                            {index + 1}
                        </div>)}
                    </ul>
                </div>
            </section>
            <Footer/>
        </div>
    </>
}