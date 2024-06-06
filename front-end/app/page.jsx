import NavBar from "./components/nav-bar";
import Carousel from "./components/carousel";
import AnimeSection from "./components/anime-section";
import Footer from "./components/footer";

export default function Page() {

    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem]">
            <Carousel />
            <AnimeSection />
            <Footer />
        </div>
    </>
}