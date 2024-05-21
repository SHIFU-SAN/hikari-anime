import NavBar from "../components/nav-bar"
import Carousel from "../components/carousel"

export default function Page() {
    return <>
        <NavBar/>
        <div id="container" className="relative top-16 left-[20rem] w-[calc(100%-20rem)] h-[52.96rem]">
            <Carousel />
        </div>
    </>
}