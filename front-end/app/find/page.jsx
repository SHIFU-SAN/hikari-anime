"use client";
import {useState, useEffect} from "react";
import {useSearchParams} from "next/navigation";

import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import AnimePoster from "../components/anime-poster";

const BASE_API = "http://127.0.0.1:8000";

export default function FindPage() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const filter = searchParams.get("filter");

    const [anime_list, setAnimeList] = useState([]);

    async function getAnimeList() {
        try {
            await fetch(`${BASE_API}/anime`)
                .then((res) => res.json())
                .then(data => {
                    if (name !== null) {
                        setAnimeList(data.filter(anime => anime.Name === name))
                    } else if (filter !== null) {
                        if (filter === "Phim truyền hình" || filter === "Phim điện ảnh") {
                            setAnimeList(data.filter(anime => anime.Format === filter));
                        } else {
                            const temp = []
                            data.map(anime => {
                                anime.Genre.map(genre => {
                                    if (genre === filter) {
                                        temp.push(anime);
                                    }
                                })
                            });
                            setAnimeList(temp);
                        }
                    }
                })
        } catch (err) {
            console.error(`Failed to get anime list with name! Because: ${err}`);
        }
    }


    useEffect(() => {
        getAnimeList();
    }, [])

    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem]">
            {anime_list.length === 0 ?
                <div className="flex justify-center items-center w-full h-40 bg-white">
                    <h1 className="text-2xl font-bold">Không tìm thấy anime nào phù hợp với kết quả tìm kiếm!</h1>
                </div> : null}
            <ul className="grid grid-cols-5">
                {

                    anime_list.map(anime => <AnimePoster id={anime.ID} name={anime.Name} poster={anime.Poster}/>)
                }
            </ul>
            <Footer/>
        </div>
    </>
}