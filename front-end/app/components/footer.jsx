import Image from "next/image";
import Link from "next/link";

import {MdOutlineCopyright} from "react-icons/md";

import Logo from "../assets/Images/Logo/HikariAnimeWhiteLogo.svg";

export default function Footer() {
    return <footer className="py-4 bg-rose-400 text-white">
        <Link href="/">
            <Image src={Logo} width={200} alt="Hikari Anime logo" className="mx-auto my-2"/>
        </Link>
        <h3 className="flex flex-row items-center justify-center"><MdOutlineCopyright/>Copyright 2024 Hikari Anime. All
            rights serverved</h3>
    </footer>
}