export default function ExMenu(props) {
    return <>
        <div className="invisible group-hover:visible absolute top-9">
            <div className="overflow-auto p-4 bg-white border-t-4 border-t-green-600">
                <ul className="grid grid-cols-3 gap-4 w-max h-24 text-sm before:block before:absolute before:-top-2 before:left-8 before:border-b-8 before:border-b-green-600 before:border-x-8 before:border-x-transparent">
                    {props.content.map(e => <li>{e}</li>)}
                </ul>
            </div>
        </div>
    </>
}