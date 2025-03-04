import SearchBar from "../components/SearchBar";

const Games = () => {
    return (
        <>
            <section id="all-games">
                <section>
                    <h1 id="game-category-title">All Games</h1>
                    <SearchBar />
                </section>
                <article className="games-container">
                    <a class="game action">
                        <img src="../../public/images/assets/playBtn.png" alt="play" />
                        <img src="../../public/images/game-thumbnails/cosmolympics.png" alt="gameName" />
                    </a>
                    <a class="game puzzle">
                        <img src="../../public/images/assets/playBtn.png" alt="play" />
                        <img src="../../public/images/game-thumbnails/AnimalMaker.png" alt="gameName" />
                    </a>
                    <a class="game action">
                        <img src="../../public/images/assets/playBtn.png" alt="play" />
                        <img src="../../public/images/game-thumbnails/Butterflapp.png" alt="gameName" />
                    </a>
                    <a class="game action">
                        <img src="../../public/images/assets/playBtn.png" alt="play" />
                        <img src="../../public/images/game-thumbnails/KnockItDown.png" alt="gameName" />
                    </a>
                    <a class="game observe">
                        <img src="../../public/images/assets/playBtn.png" alt="play" />
                        <img src="../../public/images/game-thumbnails/MemoKidsAtSchool_Thumbnail.png" alt="gameName" />
                    </a>
                    <a class="game observe">
                        <img src="../../public/images/assets/playBtn.png" alt="play" />
                        <img src="../../public/images/game-thumbnails/CountingAnimalsWithSnowWhite.jpg.jpg" alt="gameName" />
                    </a>
                </article>
            </section>
        </>
    )
};

export default Games;