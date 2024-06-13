import Link from 'next/link';

import {MdHome, MdExpandMore, MdCalendarMonth} from 'react-icons/md';

import NavExMenu from "./nav-ex-menu"

export default function NavMenu(props) {
    const Types = ["Hành động", "Phiêu lưu", "Ác quỷ", "Chính kịch", "Huyền ảo", "Harem", "Phép thuật",
        "Người máy", "Quân sự", "Tâm lý", "Lãng mạn", "Trường học", "Khoa học viễn tưởng", "Thanh thiếu niên", "Đời thường"]
    const Formats = ["Phim truyền hình", "Phim điện ảnh"]
    const Seasons = ["Mùa đông 2024", "Mùa thu 2024", "Mùa hạ 2024", "Mùa xuân 2024",
        "Mùa đông 2023", "Mùa thu 2023", "Mùa hạ 2023", "Mùa xuân 2023",
        "Mùa đông 2022", "Mùa thu 2022", "Mùa hạ 2022", "Mùa xuân 2022",
        "Mùa đông 2021", "Mùa thu 2021", "Mùa hạ 2021", "Mùa xuân 2021",
        "Mùa đông 2020", "Mùa thu 2020", "Mùa hạ 2020", "Mùa xuân 2020",
        "Mùa đông 2019", "Mùa thu 2019", "Mùa hạ 2019", "Mùa xuân 2019"]

    return <ul id="nav-menu" className="hidden absolute flex flex-col items-start top-full w-[20rem] h-dvh bg-white shadow-xl text-2xl">
        <li className="w-full px-6 py-4 cursor-pointer hover:bg-rose-500 hover:text-white group:"><Link href="/" className="flex flex-row items-center"><MdHome className="mr-2 text-[2rem]" /> Trang chủ</Link></li>
        <li className="relative w-full px-6 py-4 cursor-pointer hover:bg-rose-500 hover:text-white group">
            Thể loại <MdExpandMore className="inline" />
            <NavExMenu content={Types} />
        </li>
        <li className="relative w-full px-6 py-4 cursor-pointer hover:bg-rose-500 hover:text-white group">
            Định dạng <MdExpandMore className="inline" />
            <NavExMenu content={Formats} />
        </li>
        <li className="relative w-full px-6 py-4 cursor-pointer hover:bg-rose-500 hover:text-white group">
            Mùa <MdExpandMore className="inline" />
            <NavExMenu content={Seasons} />
        </li>
        <li className="w-full px-6 py-4 cursor-pointer hover:bg-rose-500 hover:text-white group:"><a href="#" className="flex flex-row items-center"><MdCalendarMonth className="mr-2 text-[2rem]" /> Lịch chiếu</a></li>
    </ul>
}