export default function NavExMenu(props) {
    return <div className="absolute top-4 left-[20.70rem]">
        <ul className="overflow-auto grid grid-cols-3 w-max max-h-36 border-l-4 border-l-rose-500 bg-white text-sm shadow-xl invisible group-hover:visible group-hover:text-black before:block before:absolute before:top-[0.5em] before:-left-[0.75em] before:border-y-[0.75em] before:border-y-transparent before:border-r-[0.75em] before:border-r-rose-500">
            {props.content.map((e, i) => <li key={i} className="px-4 py-2 hover:bg-rose-500 hover:text-white"><a href="#">{e}</a></li>)}
        </ul>
    </div>
}