import Image from "next/image";
import Link from "next/link";
import {MdBookmarkAdd, MdPlayCircle, MdStar, MdStarHalf, MdStarOutline, MdVideoLibrary} from "react-icons/md";

import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import AnimeSection from "../components/anime-section";

import NGE_Poster from "../assets/Images/Posters/NeonGenesisEvangelion/NeonGenesisEvangelion_vertical_poster.jpg";
import NGE_Wall from "../assets/Images/Posters/NeonGenesisEvangelion/NeonGenesisEvangelion_horizontal_poster.jpg";

export default function Page(props) {
    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem]">
            <section className="relative flex flex-row justify-center w-full h-max">
                <Image src={NGE_Wall} alt="Neon Genesis Evangelion wallpaper"
                       style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
                       className="absolute -z-10"/>
                <div className="absolute -z-10 w-full h-full bg-black opacity-50"></div>
                <div className="w-max mx-4 my-12">
                    <div className="relative">
                        <Image src={NGE_Poster} alt="Neon Genesis Evangelion poster" style={{width: '12.5rem'}}
                               className="border-2 border-white rounded-xl"/>
                        <button
                            className="absolute top-3 left-3 flex flex-row items-center pl-1 pr-2 py-1 rounded-tl-md rounded-bl-md rounded-tr-lg rounded-br-lg bg-sky-400 text-white">
                            <MdBookmarkAdd/>Theo dõi
                        </button>
                    </div>
                    <Link href="/player"
                        className="flex flex-row justify-center items-center w-[12.5rem] h-10 mt-4 rounded-lg bg-red-500 text-xl text-white">
                        <MdPlayCircle className="mr-1"/>Xem ngay
                    </Link>
                </div>
                <div className="w-1/2 mt-8 p-4 text-white">
                    <h1 className="text-4xl font-bold">Neon Genesis Evangelion</h1>
                    <div className="flex flex-row items-center my-4">
                        <p className="w-max px-4 py-2 border-2 border-white rounded-lg bg-rose-400 text-xl font-bold">26/26</p>
                        <div className="flex flex-row ml-12 px-4 py-2 h-max rounded-full bg-white text-3xl text-yellow-400">
                            <MdStar/>
                            <MdStar/>
                            <MdStar/>
                            <MdStar/>
                            <MdStarHalf/>
                        </div>
                    </div>
                    <h2 className="mb-2 text-xl font-bold italic">Thể loại: Khoa học viễn tưỡng, tâm lý, chính kịch,
                        người máy, hành động</h2>
                    <p className="overflow-auto h-32">Vào năm 2015, Angel (Thiên Thần), những sinh vật hung tợn to lớn mạnh mẽ và không rõ nguồn gốc,
                        lần thứ hai xuất hiện tại thành phố Tokyo-3. Hi vọng duy nhất cho sự tồn tại của nhân loại được
                        đặt vào Evangelion, một cỗ máy chiến đấu dạng người được phát triển bởi NERV, cơ quan đặc vụ của
                        Liên Hiệp Quốc. Có khả năng chống trả lại các đòn công kích của Angel nhưng điểm yếu sót lại của
                        Evangelion là chỉ một vài người có tố chất mới có thể điều khiển được. Đó phải là những thanh
                        thiếu niên được sinh ra vào 14 năm trước, 9 tháng sau khi lần đầu tiên Angel xuất hiện.</p>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <h3 className="flex flex-row items-center text-2xl font-bold"><MdVideoLibrary className="mr-1"/>Phần phim:</h3>
                        <p className="px-2 py-1 border-2 border-white rounded-lg bg-white text-black font-bold cursor-pointer">Truyền hình</p>
                        <p className="px-2 py-1 border-2 border-white rounded-lg text-white font-bold cursor-pointer">Chiếu rạp 1</p>
                        <p className="px-2 py-1 border-2 border-white rounded-lg text-white font-bold cursor-pointer">Chiếu rạp 2</p>
                        <p className="px-2 py-1 border-2 border-white rounded-lg text-white font-bold cursor-pointer">Chiếu rạp 3</p>
                    </div>
                </div>
                <div className="w-max border-l-4 border-white text-xl pl-4 py-12 text-white">
                    <p className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Tác giả:</h3>
                        Anno Hideaki
                    </p>
                    <p className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Đạo diễn:</h3>
                        Anno Hideaki
                    </p>
                    <p className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Nhà sản xuất:</h3>
                        TV Tokyo, NAS
                    </p>
                    <p className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Ngày phát sóng:</h3>
                        4/10/1995
                    </p>
                    <p className="flex flex-row my-2">
                        <h3 className="mr-2 font-bold">Định dạng</h3>
                        Phim truyền hình
                    </p>
                </div>
            </section>
            <AnimeSection/>
            <Footer/>
        </div>
    </>
}