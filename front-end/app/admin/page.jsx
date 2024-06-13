"use client";
import {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdClose} from "react-icons/md";

import NavBar from "../components/nav-bar";
import Footer from "../components/footer";

const BASE_API = "http://127.0.0.1:8000";

function imageLoader({src, width, quality}) {
    return `https://iili.io/${src}?w=${width}&q=${quality || 75}`;
}

export default function AdminPage() {
    const [animeList, setAnimeList] = useState([]);

    async function addAnime(anime) {
        try {
            await fetch(`${BASE_API}/anime/add`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: anime
            }).then(res => res.json())
                .then(data => setAnimeList([...animeList, data]));
        } catch (err) {
            console.error(`Failed to add anime: ${err}`);
        }
    }

    async function getAnimeList() {
        try {
            await fetch(`${BASE_API}/anime`)
                .then(res => res.json())
                .then(data => setAnimeList(data));
        } catch (err) {
            console.error(`Failed to get anime list! Because: ${err}`);
        }
    }

    async function updateAnime(id, new_content) {
        try {
            await fetch(`${BASE_API}/anime/${id}`, {
                method: `PUT`,
                headers: {
                    "Content-Type": "application/json"
                },
                body: new_content
            });
        } catch (err) {
            console.error(`Failed to update anime ${id}! Because: ${err}`)
        }
    }

    async function deleteAnime(anime_id) {
        try {
            await fetch(`${BASE_API}/video/delete/anime/${anime_id}`, {
                method: "DELETE"
            }).then(res => res.json())

            await fetch(`${BASE_API}/anime/delete/${anime_id}`, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => setAnimeList(Anime => Anime.filter(anime => anime.ID != data.ID)));
        } catch (err) {
            console.error(`Failed to delete anime! Because: ${err}`);
        }
    }

    function handleAddButtonForm() {
        const add_window = document.getElementById("add-window");
        add_window.classList.add("hidden");

        const id = document.getElementById("ID").value;
        const name = document.getElementById("Name").value;
        const author = document.getElementById("Author").value;
        const director = document.getElementById("Director").value;
        const studio = document.getElementById("Studio").value;
        const producer = document.getElementById("Producer").value;
        const releaseDate = document.getElementById("ReleaseDate").value;
        const genre = document.getElementById("Genre").value;
        const format = document.getElementById("Format").value;
        const episodes = document.getElementById("Episodes").value;
        const ranking = document.getElementById("Ranking").value;
        const season = document.getElementById("Season").value;
        const story = document.getElementById("Story").value;
        const poster = document.getElementById("Poster").value;
        const wallpaper = document.getElementById("Wallpaper").value;

        const anime = JSON.stringify(
            {
                ID: id,
                Name: name,
                Author: author,
                Director: director,
                Studio: studio,
                Producer: producer,
                ReleaseDate: releaseDate,
                Genre: genre,
                Format: format,
                Episodes: episodes,
                Ranking: ranking,
                Season: season,
                Story: story,
                Poster: poster,
                Wallpaper: wallpaper,
            }
        );

        addAnime(anime);
    }

    function handleUpdateButton() {
        const add_window = document.getElementById("add-window");
        add_window.classList.add("hidden");

        const id = document.getElementById("ID").value;
        let name = document.getElementById("Name").value;
        let author = document.getElementById("Author").value;
        let director = document.getElementById("Director").value;
        let studio = document.getElementById("Studio").value;
        let producer = document.getElementById("Producer").value;
        let releaseDate = document.getElementById("ReleaseDate").value;
        let genre = document.getElementById("Genre").value;
        let format = document.getElementById("Format").value;
        let episodes = document.getElementById("Episodes").value;
        let ranking = document.getElementById("Ranking").value;
        let season = document.getElementById("Season").value;
        let story = document.getElementById("Story").value;
        let poster = document.getElementById("Poster").value;
        let wallpaper = document.getElementById("Wallpaper").value;

        if (name.length === 0) {
            name = null;
        }
        if (author.length === 0) {
            author = null;
        }
        if (director.length === 0) {
            director = null;
        }
        if (studio.length === 0) {
            studio = null;
        }
        if (producer.length === 0) {
            studio = null;
        }
        if (releaseDate.length === 0) {
            releaseDate = null;
        }
        if (genre.length === 0) {
            genre = null;
        }
        if (format.length === 0) {
            format = null;
        }
        if (episodes === 0) {
            episodes = null;
        }
        if (ranking === 0) {
            episodes = null;
        }
        if (season.length === 0) {
            season = null;
        }
        if (story.length === 0) {
            story = null;
        }
        if (poster.length === 0) {
            poster = null;
        }
        if (wallpaper.length === 0) {
            wallpaper = null;
        }


        const new_content = JSON.stringify(
            {
                Name: name,
                Author: author,
                Director: director,
                Studio: studio,
                Producer: producer,
                ReleaseDate: releaseDate,
                Genre: genre,
                Format: format,
                Episodes: episodes,
                Ranking: ranking,
                Season: season,
                Story: story,
                Poster: poster,
                Wallpaper: wallpaper,
            }
        );

        updateAnime(id, new_content);
    }

    useEffect(() => {
        getAnimeList();
    }, []);

    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem]">
            <div className="w-1/2 mx-auto py-4">
                <button className="px-4 py-2 rounded-lg bg-rose-400 text-2xl text-white font-bold" onClick={() => {
                    const add_window = document.getElementById('add-window');
                    add_window.classList.remove("hidden");
                    const update_btn = document.getElementById("update-btn");
                    update_btn.classList.add("hidden");
                }}>Thêm Anime
                </button>
            </div>
            <ul className="w-1/2 mx-auto overflow-auto h-[54rem]">
                {animeList.map(anime => <li className="relative flex flex-row items-center bg-white mb-2">
                        <Link href={`/admin/videos/${anime.ID}`} className="flex flex-row items-center gap-2">
                            <Image
                                loader={imageLoader}
                                src={anime.Poster}
                                alt={`${anime.Name} poster`}
                                width={100}
                                height={240}
                            />
                            <div>
                                <h2 className="text-md font-bold">ID: {anime.ID}</h2>
                                <h2 className="text-xl font-bold">{anime.Name}</h2>
                            </div>
                        </Link>
                        <div className="absolute right-8 ">
                            <button onClick={() => {
                                const add_window = document.getElementById("add-window");
                                add_window.classList.remove("hidden");
                                const add_btn = document.getElementById("add-btn");
                                add_btn.classList.add("hidden");
                                document.getElementById("ID").value = anime.ID;
                            }} className="mr-2 px-2 py-1 rounded-lg bg-cyan-400 text-white font-bold shadow-lg">Sửa
                            </button>
                            <button onClick={event => {
                                event.stopPropagation();
                                deleteAnime(anime.ID);
                            }}
                                    className="bg-red-500 text-white font-bold rounded-lg px-2 py-1 shadow-lg">Xóa
                            </button>
                        </div>
                    </li>
                )}
            </ul>
            {/*Add Window*/}

            <div id="add-window"
                 className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center w-1/2 px-8 py-12 border-2 border-black rounded-lg bg-white overflow-auto hidden">
                <label htmlFor="HTML" className="w-full pl-2">ID</label>
                <input type="text" id="ID" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Tên</label>
                <input type="text" id="Name" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Tác giả</label>
                <input type="text" id="Author" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Đạo diễn</label>
                <input type="text" id="Director" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Xưởng phim</label>
                <input type="text" id="Studio" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Nhà sản xuất</label>
                <input type="text" id="Producer" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Ngày phát hành</label>
                <input type="text" id="ReleaseDate" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Thể loại</label>
                <input type="text" id="Genre" className="w-full h-12 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Định dạng</label>
                <input type="text" id="Format" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Số tập</label>
                <input type="number" id="Episodes" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Xếp hạng</label>
                <input type="number" id="Ranking" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Mùa</label>
                <input type="text" id="Season" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Cốt truyện</label>
                <input type="text" id="Story" className="w-full h-20 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Áp phích</label>
                <input type="text" id="Poster" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>
                <label htmlFor="HTML" className="w-full pl-2">Ảnh nền</label>
                <input type="text" id="Wallpaper" className="w-full h-8 border-2 border-black rounded-lg mb-4"/>

                <button onClick={() => {
                    handleAddButtonForm();
                }} id="add-btn" className="px-4 py-2 rounded-lg bg-rose-400 text-2xl text-white font-bold"
                >Thêm
                </button>

                <button onClick={() => {
                    handleUpdateButton();
                }} id="update-btn" className="px-4 py-2 rounded-lg bg-rose-400 text-2xl text-white font-bold">Sửa
                </button>

                <button onClick={() => {
                    const add_window = document.getElementById('add-window');
                    add_window.classList.add('hidden');
                }} className="absolute top-2 right-2 p-2 rounded-lg bg-red-500 text-white font-bold"><MdClose/></button>
            </div>
            <Footer/>
        </div>
    </>
}