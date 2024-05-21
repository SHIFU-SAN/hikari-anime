'use client'

import {useState, useEffect, useRef} from "react";
import Image from "next/image"
import {MdPlayCircle, MdInfo, MdArrowCircleLeft, MdArrowCircleRight} from "react-icons/md";

import EightySix from "../assets/Images/Posters/86/86_horizontal_poster.png";
import ALDNOAH_Zero from "../assets/Images/Posters/ALDNOAH.Zero/aldnoah.zero_horizontal_poster.jpg";
import Conan from "../assets/Images/Posters/Conan/conan_horizontal_poster.jpg";
import NGE from "../assets/Images/Posters/NeonGenesisEvangelion/NeonGenesisEvangelion_horizontal_poster.jpg";
import Doraemon from "../assets/Images/Posters/Doraemon/doraemin_horizontal_poster.png";

export default function Carousel(props) {
    const Anime_list = [
        {
            'Name': '86',
            'View': '?',
            'Poster': EightySix,
            'Description': "Nước cộng hòa Magnolia đã bị tấn công bởi quốc gia hàng xóm là Đế chế. Bên ngoài 85 quận của Cộng hòa còn có ‘quận 86 không tồn tại’, nơi nam nữ thanh niên tiếp tục chiến đấu. Sheen chỉ đạo hành động của những kẻ đánh bom tự sát trẻ tuổi, trong khi Lena là một người quản lý người Hồi giáo. Câu chuyện về cuộc đấu tranh bi thảm giữa hai người này bắt đầu!"
        },
        {
            'Name': "ALDNOAH.Zero",
            'View': '?',
            'Poster': ALDNOAH_Zero,
            'Description': "Năm 1972, Apollo 17 phát hiện ra một Hypergate đang tiến đến sao Hỏa trên bề mặt của mặt trăng. Sau đó công chúa Lys đến Địa Cầu để đàm phán như do một số gián điệp từ hỏa tinh tạo kế hoạch ám sát công chúa, sau đó một cuộc chiến tranh nổ ra giữa Trái Đất và sao Hỏa. Liệu công chúa của chúng ta còn sống hay không? mời các bạn xem anime Aldnoah Zero để biết thêm."
        },
        {
            'Name': 'Conan',
            'View': '?',
            'Poster': Conan,
            'Description': "Mở đầu câu truyện, cậu học sinh trung học 17 tuổi Shinichi Kudo bị biến thành cậu bé Conan Edogawa. Shinichi trong phần đầu của Thám tử lừng danh Conan được miêu tả là một thám tử học đường xuất sắc. Trong một lần đi chơi công viên \"Miền Nhiệt đới\" với cô bạn từ thuở nhỏ Ran Mori, cậu tình cờ chứng kiến vụ một án giết người, Kishida - một hành khách trong trò chơi Chuyến tàu tốc hành đã bị giết một cách dã man. Cậu đã giúp cảnh sát làm sáng tỏ vụ án. Trên đường về nhà, cậu vô tình phát hiện một vụ làm ăn mờ ám của những người đàn ông mặc toàn đồ đen. Khi chúng phát hiện ra cậu, Shinichi đã bị đánh ngất đi. Sau đó những người đàn ông áo đen đó đã cho cậu uống một thứ thuốc độc chưa qua thử nghiệm là Apotoxin-4869 (APTX 4869) với mục đích thủ tiêu cậu. Tuy nhiên chất độc đã không giết chết Kudo. Khi tỉnh lại, cậu bàng hoàng nhận thấy mình đã bị teo nhỏ lại thành hình dạng của một cậu học sinh tiểu học. Theo lời khuyên của Tiến sĩ Hiroshi Agasa, Shinichi đã che giấu tung tích, để tránh việc Tổ chức Áo đen có thể phát hiện ra rằng cậu vẫn còn sống. Khi Ran hỏi tên cậu, Shinichi đã ghép \"Conan\" trong tên của Sir Arthur Conan Doyle và \"Edogawa\" trong tên của Edogawa Rampo, buột miệng nói ra tên mình là \"Conan Edogawa\". Tiến sĩ Agasa đã nói Conan là một người cháu của mình, nhưng hiện ông đang quá bận rộn không thể chăm sóc cho chú bé nên đã nhờ Ran trông nom Conan giúp mình. Ran nhận lời và từ đó Conan sống tại nhà của Ran tức văn phòng thám tử Mori, vừa che giấu thân phận vừa điều tra tung tích của Tổ chức Áo đen và tìm kiếm thuốc giải độc."
        },
        {
            'Name': "Neon Genesis Evangelion",
            'View': '?',
            'Poster': NGE,
            'Description': "Vào năm 2015, Angel (Thiên Thần), những sinh vật hung tợn to lớn mạnh mẽ và không rõ nguồn gốc, lần thứ hai xuất hiện tại thành phố Tokyo-3. Hi vọng duy nhất cho sự tồn tại của nhân loại được đặt vào Evangelion, một cỗ máy chiến đấu dạng người được phát triển bởi NERV, cơ quan đặc vụ của Liên Hiệp Quốc. Có khả năng chống trả lại các đòn công kích của Angel nhưng điểm yếu sót lại của Evangelion là chỉ một vài người có tố chất mới có thể điều khiển được. Đó phải là những thanh thiếu niên được sinh ra vào 14 năm trước, 9 tháng sau khi lần đầu tiên Angel xuất hiện."
        },
        {
            'Name': 'Doraemon',
            'View': '?',
            'Poster': Doraemon,
            'Description': "Các câu chuyện trong Doraemon thường có một công thức chung, đó là xoay quanh những rắc rối hay xảy ra với cậu bé Nobita học lớp bốn, nhân vật chính thứ nhì của bộ truyện. Doraemon có một chiếc túi thần kỳ trước bụng với đủ loại bảo bối của tương lai. Cốt truyện thường gặp nhất sẽ là Nobita trở về nhà khóc lóc với những rắc rối mà cậu gặp phải ở trường hoặc với bạn bè. Sau khi bị cậu bé van nài hoặc thúc giục, Doraemon sẽ đưa ra một bảo bối giúp Nobita giải quyết những rắc rối của mình, hoặc là để trả đũa hay khoe khoang với bạn bè của cậu. Nobita sẽ lại thường đi quá xa so với dự định ban đầu của Doraemon, thậm chí với những bảo bối mới cậu còn gặp rắc rối lớn hơn trước đó. Đôi khi những người bạn của Nobita, thường là Suneo (Xêkô) hoặc Jaian (Chaien) lại lấy trộm những bảo bối và sử dụng chúng không đúng mục đích. Tuy nhiên thường thì ở cuối mỗi câu chuyện, những ai sử dụng sai mục đích bảo bối sẽ phải chịu hậu quả do mình gây ra, và người đọc sẽ rút ra được bài học từ đó."
        }
    ]

    const [index, setIndex] = useState(0);

    let slideTimer = useRef();

    useEffect(() => {
        slideTimer.current = setInterval(() => {
            forwardSlide();
            console.log(index);
        }, 1000);
        return () => clearInterval(slideTimer.current);
    });

    function pauseSlideTimer() {
        clearInterval(slideTimer.current)
    }

    function resumeSlideTimer() {
        slideTimer.current = setInterval(() => {
            forwardSlide();
        }, 1000);
        return () => clearInterval(slideTimer.current);
    }

    function goToSlide(SlideIndex) {
        for (let i = 0; i < 5; i++) {
            const slide = document.getElementById(`point-${i}`);
            if (slide.classList.contains("bg-white")) {
                slide.classList.remove("bg-white");
                slide.classList.add("bg-zinc-400");
            }
        }
        const destinationSlide = document.getElementById(`point-${SlideIndex}`)
        destinationSlide.classList.remove("bg-zinc-400");
        destinationSlide.classList.add("bg-white");
        setIndex(SlideIndex)
    }

    function backSlide() {
        const isFirstSLide = index === 0;
        const prevIndex = isFirstSLide ? 4 : index - 1;
        goToSlide(prevIndex);
    }

    function forwardSlide() {
        const isLastSlide = index === 4;
        const nextIndex = isLastSlide ? 0 : index + 1;
        goToSlide(nextIndex);
    }

    return <section id="carousel" className="relative w-full h-full">
        <Image src={Anime_list[index].Poster} alt={Anime_list[index].Name + "poster"} fill={true}
               className="object-cover object-top"/>
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <div className="absolute bottom-32 left-40 w-1/2 text-white">
            <h1 className="text-[4rem]">{Anime_list[index].Name}</h1>
            <p onMouseOver={pauseSlideTimer} onMouseOut={resumeSlideTimer} className="overflow-auto max-h-40 h-max text-xl">{Anime_list[index].Description}</p>
            <div className="flex flex-row items-center gap-16 mt-8">
                <button
                    className="flex flex-row justify-center items-center w-40 h-12 border-2 border-white rounded-lg bg-red-500 text-xl">
                    <MdPlayCircle/>Xem ngay
                </button>
                <button
                    className="flex flex-row justify-center items-center w-40 h-12 border-2 border-black rounded-lg bg-white text-xl text-black">
                    <MdInfo/>Chi tiết
                </button>
            </div>
        </div>
        <button onClick={() => {
            backSlide();
            pauseSlideTimer();
        }} className="absolute top-1/2 -translate-y-1/2 left-8 text-[4rem] text-white">
            <MdArrowCircleLeft/>
        </button>
        <button onClick={() => {
            forwardSlide();
            pauseSlideTimer();
        }} className="absolute top-1/2 -translate-y-1/2 right-8 text-[4rem] text-white">
            <MdArrowCircleRight/>
        </button>
        <ul className="absolute bottom-20 left-40 flex flex-row gap-4">
            <li>
                <button onClick={() => {
                    goToSlide(0)
                }} id="point-0" className="size-5 rounded-full bg-white cursor-pointer"></button>
            </li>
            <li>
                <button onClick={() => {
                    goToSlide(1)
                }} id="point-1" className="size-5 rounded-full bg-zinc-400 cursor-pointer"></button>
            </li>
            <li>
                <button onClick={() => {
                    goToSlide(2)
                }} id="point-2" className="size-5 rounded-full bg-zinc-400 cursor-pointer"></button>
            </li>
            <li>
                <button onClick={() => {
                    goToSlide(3)
                }} id="point-3" className="size-5 rounded-full bg-zinc-400 cursor-pointer"></button>
            </li>
            <li>
                <button onClick={() => {
                    goToSlide(4)
                }} id="point-4" className="size-5 rounded-full bg-zinc-400 cursor-pointer"></button>
            </li>
        </ul>
    </section>
}