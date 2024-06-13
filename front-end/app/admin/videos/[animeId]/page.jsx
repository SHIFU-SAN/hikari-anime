"use client";
import {useState, useEffect} from 'react';
import Link from "next/link";
import {MdAddCircle, MdClose} from "react-icons/md";

import NavBar from "../../../components/nav-bar";
import Footer from "../../../components/footer";

const BASE_API = "http://127.0.0.1:8000";

export default function VideosPage({params}) {
    const [episodes, setEpisodes] = useState([]);

    async function addEpisode(episode) {
        try {
            await fetch(`${BASE_API}/video/add`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: episode
            }).then(res => res.json())
                .then(data => setEpisodes([...episodes, data]));
        } catch (err) {
            console.error(`Failed to add new epidsode for anime ${params.animeId}! Because: ${err}`);
        }
    }

    async function updateEpisode(video_id, new_content) {
        try {
            await fetch(`${BASE_API}/video/${video_id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: new_content
            });
        } catch (err) {
            console.error(`Failed to update episode ${video_id}! Because: ${err}`);
        }
    }

    async function getEpisodes(id) {
        try {
            await fetch(`${BASE_API}/video/anime/${id}`)
                .then(res => res.json())
                .then(data => setEpisodes(data));
        } catch (err) {
            console.error(`Failed to get episodes of anime with ID: ${id}! Because: ${err}`);
        }
    }

    async function deleteEpisode(id) {
        try {
            await fetch(`${BASE_API}/video/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => setEpisodes(episodes => episodes.filter(episode => episode.VideoID != data.VideoID)));
        } catch (err) {
            console.error(`Failed to delete episode! Because: ${err}`);
        }
    }

    function handleAddFormButton() {
        let anime_id = params.animeId;
        let video_id = document.getElementById("video-id").value;
        let name = document.getElementById("name").value;
        let src = document.getElementById("src").value;

        const episode = JSON.stringify({
            VideoID: video_id,
            Name: name,
            Source: src,
            AnimeID: anime_id
        });

        addEpisode(episode);

        const video_form = document.getElementById("video-form");
        video_form.classList.add('hidden');
    }

    function handleUpdateFormButton() {
        let video_id = document.getElementById("video-id").value;
        let name = document.getElementById("name").value;
        let src = document.getElementById("src").value;

        if (name.length === 0) {
            name = null;
        }
        if (src.length === 0) {
            src = null;
        }

        const new_content = JSON.stringify({
            Name: name,
            Source: src,
            AnimeID: params.animeId,
        });

        updateEpisode(video_id, new_content);

        const video_form = document.getElementById("video-form");
        video_form.classList.add('hidden');
    }

    useEffect(() => {
        getEpisodes(params.animeId);
    }, []);

    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem]">
            <div className="flex flex-row items-center w-[68rem] mx-auto mb-4 pt-2">
                <Link href="/admin"
                      className="flex justify-center items-center w-max mr-4 px-4 py-2 rounded-lg bg-rose-400 text-xl text-white font-bold">Trang
                    quản lý</Link>
                <button onClick={() => {
                    const video_form = document.getElementById("video-form");
                    video_form.classList.remove('hidden');

                    const update_form_btn = document.getElementById("update-form-btn");
                    update_form_btn.classList.add('hidden');
                }}
                        className="flex flex-row items-center px-4 py-2 rounded-lg bg-rose-400 text-xl text-white font-bold">
                    <MdAddCircle className="mr-1"/>Thêm video
                </button>
            </div>
            <ul className="grid grid-cols-4 gap-4 w-[68rem] max-h-[52.96rem] mx-auto overflow-auto">
                {episodes.map((episode) => <li
                    className="relative flex flex-row items-center w-64 h-16 bg-white rounded-lg">
                    <h2 className="pl-4 text-xl font-bold">{episode.Name}</h2>
                    <div className="absolute right-4">
                        <button onClick={() => {
                            const video_form = document.getElementById("video-form");
                            video_form.classList.remove('hidden');

                            const add_form_btn = document.getElementById("add-form-btn");
                            add_form_btn.classList.add('hidden');

                            const update_form_btn = document.getElementById("update-form-btn");
                            update_form_btn.classList.remove('hidden');

                            document.getElementById("video-id").value = episode.VideoID;
                        }} className="mr-2 px-2 py-1 rounded-lg bg-cyan-500 text-white font-bold">Sửa
                        </button>
                        <button onClick={(event) => {
                            event.stopPropagation();
                            deleteEpisode(episode.VideoID);
                        }} className="px-2 py-1 rounded-lg bg-red-500 text-white font-bold">Xóa
                        </button>
                    </div>
                </li>)}
            </ul>

            <div id="video-form"
                 className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center w-1/2 px-8 py-12 border-2 border-black rounded-lg bg-white hidden">
                <button onClick={() => {
                    const video_form = document.getElementById("video-form");
                    video_form.classList.add('hidden');
                }} className="absolute top-2 right-2 p-2 rounded-lg bg-red-500 text-white font-bold"><MdClose/></button>

                <h2 className="w-full mb-4 text-xl font-bold">Anime ID: {params.animeId}</h2>
                <label htmlFor="HTML" className="w-full">Video ID:</label>
                <input type="text" id="video-id" className="w-full h-10 mb-4 pl-2 border-2 border-black rounded-lg"/>
                <label htmlFor="HTML" className="w-full">Tên:</label>
                <input type="text" id="name" className="w-full h-10 mb-4 pl-2 border-2 border-black rounded-lg"/>
                <label htmlFor="HTML" className="w-full">Nguồn:</label>
                <input type="text" id="src" className="w-full h-12 mb-8 pl-2 border-2 border-black rounded-lg"/>

                <button onClick={() => {
                    handleAddFormButton();
                }} id="add-form-btn"
                        className="w-max px-4 py-2 rounded-lg bg-rose-400 text-2xl text-white font-bold">Thêm
                </button>

                <button onClick={() => {
                    handleUpdateFormButton();
                }} id="update-form-btn"
                        className="w-max px-4 py-2 rounded-lg bg-rose-400 text-2xl text-white font-bold">Sửa
                </button>
            </div>
            <Footer/>
        </div>
    </>
}