import Image from "next/image";
import Link from "next/link";

export default function AnimePoster(props) {
    function loadImageFromUML({src, width, quality}) {
        return `https://iili.io/${src}?w=${width}&q=${quality || 75}`;
    }

    return <div className="justify-self-center w-[260px] h-max">
        <Link href={`/anime/${props.id}`}>
            <Image
                loader={loadImageFromUML}
                src={props.poster}
                width={260}
                height={400}
                alt={`${props.name} + poster`}
                className="border-2 border-black rounded-2xl"/>
        </Link>
        <Link href={`/anime/${props.id}`}><h1 className="mt-2 font-bold">{props.name}</h1></Link>
        <p>Lượt xem: ?</p>
    </div>
}