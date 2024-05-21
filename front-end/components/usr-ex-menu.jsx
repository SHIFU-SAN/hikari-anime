import {MdPerson, MdVideoLibrary, MdLogout} from "react-icons/md"

export default function UserExMenu(props) {
    return <ul id="usr-ex-menu" className="absolute top-12 right-0 w-max bg-white rounded-xl shadow-xl text-xl invisible">
        <li className="px-4 py-2 hover:bg-rose-500 hover:text-white cursor-pointer rounded-tl-lg rounded-tr-lg"><a href="#"><MdPerson className="inline" /> Tài khoản</a></li>
        <li className="px-4 py-2 hover:bg-rose-500 hover:text-white cursor-pointer"><a href="#"><MdVideoLibrary className="inline" /> Tủ phim</a></li>
        <li className="px-4 py-2 hover:bg-rose-500 hover:text-white cursor-pointer rounded-bl-lg rounded-br-lg"><button><MdLogout className="inline" /> Đăng xuất</button></li>
    </ul>
}