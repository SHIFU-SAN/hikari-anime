'use client';
import {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdBookmarkAdd, MdPlayCircle, MdStar, MdStarHalf, MdStarOutline, MdVideoLibrary} from "react-icons/md";

import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import AnimeSection from "../../components/anime-section";

const BASE_API = "http://127.0.0.1:8000" || "http://127.0.1.1:8080";

export default function AnimePage({params}) {
    const [Anime, setAnime] = useState({});

    async function getAnime(id) {
        try {
            await fetch(`${BASE_API}/anime/${id}`)
                .then(res => res.json())
                .then(data => setAnime(data));
        } catch (err) {
            console.error(`Failed to get anime ${id}! Because: ${err}`);
        }
    }

    useEffect(() => {
        getAnime(params.animeId);
    });

    function loadImageFromURL({src, width, quality}) {
        return `https://iili.io/${src}?w=${width}&q=${quality || 75}`
    }


    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem]">
            <section className="relative flex flex-row justify-center w-full h-max">
                <Image
                    loader={loadImageFromURL}
                    src={Anime.Wallpaper}
                    alt="Neon Genesis Evangelion wallpaper"
                    fill={true}
                    style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
                    className="absolute -z-10"
                />
                <div className="absolute -z-10 w-full h-full bg-black opacity-50"></div>
                <div className="w-max mx-4 my-12">
                    <div className="relative">
                        <Image
                            loader={loadImageFromURL}
                            src={Anime.Poster} alt="Neon Genesis Evangelion poster" width={240} height={360}
                            style={{width: '12.5rem'}}
                            className="border-2 border-white rounded-xl"
                        />
                        {/*<button*/}
                        {/*    className="absolute top-3 left-3 flex flex-row items-center pl-1 pr-2 py-1 rounded-tl-md rounded-bl-md rounded-tr-lg rounded-br-lg bg-sky-400 text-white">*/}
                        {/*    <MdBookmarkAdd/>Theo dõi*/}
                        {/*</button>*/}
                    </div>
                    <Link href={`/player/${params.animeId}`}
                          className="flex flex-row justify-center items-center w-[12.5rem] h-10 mt-4 rounded-lg bg-red-500 text-xl text-white">
                        <MdPlayCircle className="mr-1"/>Xem ngay
                    </Link>
                </div>
                <div className="w-1/2 mt-8 p-4 text-white">
                    <h1 className="text-4xl font-bold">{Anime.Name}</h1>
                    <div className="flex flex-row items-center my-4">
                        <p className="w-max px-4 py-2 border-2 border-white rounded-lg bg-rose-400 text-xl font-bold">{Anime.Episodes}</p>
                        <div
                            className="flex flex-row ml-12 px-4 py-2 h-max rounded-full bg-white text-3xl text-yellow-400">
                            <MdStar/>
                            <MdStar/>
                            <MdStar/>
                            <MdStar/>
                            <MdStarHalf/>
                        </div>
                    </div>
                    <h2 className="flex flex-row gap-2 mb-2 text-xl font-bold italic">
                        {Anime.Genre?.map(e => <div>{e}/</div>)}
                    </h2>
                    <p className="overflow-auto h-32">{Anime.Story}</p>
                    {/*<div className="flex flex-row items-center gap-4 mt-4">*/}
                    {/*    <h3 className="flex flex-row items-center text-2xl font-bold"><MdVideoLibrary className="mr-1"/>Phần*/}
                    {/*        phim:</h3>*/}
                    {/*    <p className="px-2 py-1 border-2 border-white rounded-lg bg-white text-black font-bold cursor-pointer">Truyền*/}
                    {/*        hình</p>*/}
                    {/*    <p className="px-2 py-1 border-2 border-white rounded-lg text-white font-bold cursor-pointer">Chiếu*/}
                    {/*        rạp 1</p>*/}
                    {/*    <p className="px-2 py-1 border-2 border-white rounded-lg text-white font-bold cursor-pointer">Chiếu*/}
                    {/*        rạp 2</p>*/}
                    {/*    <p className="px-2 py-1 border-2 border-white rounded-lg text-white font-bold cursor-pointer">Chiếu*/}
                    {/*        rạp 3</p>*/}
                    {/*</div>*/}
                </div>
                <div className="w-max border-l-4 border-white text-xl pl-4 py-12 text-white">
                    <div className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Tác giả:</h3>
                        {Anime.Author}
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Đạo diễn:</h3>
                        {Anime.Director}
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Hãng phim:</h3>
                        {Anime.Studio?.map(e => <div className="mr-2">{e}/</div>)}
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Nhà sản xuất:</h3>
                        {Anime.Producer?.map(e => <div className="mr-2">{e}/</div>)}
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Ngày phát sóng:</h3>
                        {Anime.ReleaseDate}
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Định dạng</h3>
                        {Anime.Format}
                    </div>
                </div>
            </section>
            {/*<AnimeSection/>*/}
            <Footer/>
        </div>
    </>
}