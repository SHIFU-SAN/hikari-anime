import NavBar from "./components/nav-bar";
import Carousel from "./components/carousel";
import AnimeSection from "./components/anime-section";
import Footer from "./components/footer";

import EightySix from "./assets/Images/Posters/86/86_vertical_poster.jpg";

export default function Page() {

    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem]">
            <Carousel />
            <AnimeSection />
            <AnimeSection />
            <AnimeSection />
            <Footer />
        </div>
    </>
}