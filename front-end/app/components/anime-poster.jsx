import Image from "next/image";
import Link from "next/link";

import NGE from "../assets/Images/Posters/NeonGenesisEvangelion/NeonGenesisEvangelion_vertical_poster.jpg";

export default function AnimePoster(props) {
    return <div className="justify-self-center w-[260px] h-max">
        <Link href="/anime"><Image src={props.poster} width={260} alt={`${props.title} + poster`} className="border-2 border-black rounded-2xl"/></Link>
        <Link href="/anime"><h1 className="mt-2 font-bold">{props.title}</h1></Link>
        <p>Lượt xem: ?</p>
    </div>
}