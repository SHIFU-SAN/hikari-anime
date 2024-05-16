import Image from "next/image"
import {MdHome, MdExpandMore, MdCalendarMonth, MdSearch} from "react-icons/md";

import Logo from "../assets/Images/Logo/HikariAnimeLogo.svg"
import ExMenu from "../components/ex-menu"

export default function NavBar(props) {
    const Types = ["Hành động", "Người máy", "Quân dội", "Fantasy", "Lãng mãn", "Phiêu lưu", "Tâm lý",
        "Khoa học viễn tưởng", "Chính kịch", "Ác quỷ", "Hành động", "Người máy", "Quân dội", "Fantasy", "Lãng mãn", "Phiêu lưu", "Tâm lý",
        "Khoa học viễn tưởng", "Chính kịch", "Ác quỷ"]
    return <>
        <nav className="grid grid-cols-4 h-16 bg-white">
            <a href="#" className="justify-self-end"><Image src={Logo} width={200} alt="Hikari Anime logo"/></a>
            <ul className="justify-self-center col-span-2 flex flex-row items-center gap-12 text-xl">
                <li className="flex flex-row items-center h-8 cursor-pointer"><MdHome className="text-2xl"/> Trang chủ</li>
                <li className="group relative flex flex-row items-center h-8 cursor-pointer">
                    Thể loại <MdExpandMore className="text-2xl"/>
                    <ExMenu content={Types} />
                </li>
                <li className="group relative flex flex-row items-center h-8 cursor-pointer">
                    Định dạng <MdExpandMore className="text-2xl"/>
                    <ExMenu content={Types} />
                </li>
                <li className="group relative flex flex-row items-center h-8 cursor-pointer">
                    Mùa <MdExpandMore className="text-2xl"/>
                    <ExMenu content={Types} />
                </li>
                <li className="flex flex-row items-center h-8 cursor-pointer"><MdCalendarMonth className="text-2xl"/> Lịch chiếu</li>
            </ul>
            <div className="flex flex-row items-center gap-8">
                <button className="flex justify-center items-center size-8 border-2 border-zinc-500 rounded-lg">
                    <MdSearch className="text-xl"/></button>
                <div className="size-12 bg-zinc-300 border-2 border-zinc-500 rounded-full"></div>
            </div>
        </nav>
    </>
}