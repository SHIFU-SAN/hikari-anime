'use client'

import Image from "next/image"

import {MdMenu, MdSearch} from "react-icons/md";
import Logo from "../assets/Images/Logo/HikariAnimeLogo.svg"

import UserExMenu from "../components/usr-ex-menu"
import NavMenu from "./nav-menu"

export default function NavBar(props) {
    function changeUserExMenu() {
        const UsrExMenu = document.getElementById("usr-ex-menu");
        if (UsrExMenu.classList.contains("invisible")) {
            UsrExMenu.classList.remove("invisible");
            UsrExMenu.classList.add("visible");
        } else {
            UsrExMenu.classList.remove("visible");
            UsrExMenu.classList.add("invisible");
        }
    }

    function changeNavMenu() {
        const NavMenu = document.getElementById("nav-menu");
        if(!NavMenu.classList.contains('hidden')) {
            NavMenu.classList.add('hidden');
        } else {
            NavMenu.classList.remove('hidden');
        }

        const Container = document.getElementById("container");
        if(Container.classList.contains("left-[20rem]") && Container.classList.contains("w-[calc(100%-20rem)]")) {
            Container.classList.remove("left-[20rem]");
            Container.classList.remove("w-[calc(100%-20rem)]");
            Container.classList.add("w-full");
        } else {
            Container.classList.add("left-[20rem]");
            Container.classList.add("w-[calc(100%-20rem)]");
            Container.classList.remove("w-full");
        }
    }

    return <>
        <header className="fixed z-10 grid grid-cols-4 items-center w-full h-16 px-4 bg-white shadow">
            <div className="flex flex-row items-center">
                <button onClick={changeNavMenu}
                        className="justify-center items-center p-1 size-10 rounded-full text-3xl hover:bg-rose-500 hover:text-white">
                    <MdMenu/>
                </button>
                <a href="#"><Image src={Logo} width={200} alt="Hikari Anime logo"/></a>
            </div>
            <form action="" className="flex flex-row items-center col-span-2 border-2 border-rose-400 rounded-lg">
                <label htmlFor="" className="sr-only">Search</label>
                <input type="search" placeholder="Tìm kiếm..."
                       className="w-full px-2 bg-transparent focus:outline-none"/>
                <button
                    className="flex justify-center items-center size-8 bg-rose-400 text-xl text-white hover:bg-rose-500">
                    <MdSearch/></button>
            </form>
            <div onClick={changeUserExMenu}
                 className="relative justify-self-end size-12 border-2 border-zinc-500 rounded-full bg-zinc-300 cursor-pointer">
                <UserExMenu/>
            </div>
            <NavMenu/>
        </header>
    </>
}