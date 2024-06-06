import NavBar from "../components/nav-bar";
import Footer from "../components/footer";

export default function Page(props) {
    const Episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    return <>
        <NavBar/>
        <div id="container" className="relative top-16 w-full h-[52.96rem] pt-2">
            <section className="w-1/2 bg-white mx-auto py-4 mb-2 rounded-xl">
                <iframe className='sproutvideo-player mx-auto rounded-xl'
                        src='https://videos.sproutvideo.com/embed/7990dabe1c1fe1c1f0/ff850a914cb6154b' width='786'
                        height='435' frameBorder='0' allowFullScreen referrerPolicy='no-referrer-when-downgrade'
                        title='Video Player'></iframe>
                <div className="w-[786px] mx-auto mt-5">
                    <h1 className="mb-4 text-2xl font-bold">Neon Genesis Evangelion - Tập 1</h1>
                    <ul className="grid grid-cols-12 gap-4 ">
                        {Episodes.map(episode => <li
                            className="justify-self-center flex justify-center items-center w-max min-w-12 px-4 py-2 rounded-lg bg-rose-400 font-bold text-white shadow-lg cursor-pointer">{episode}</li>)}
                    </ul>
                </div>
            </section>
            <Footer/>
        </div>
    </>
}