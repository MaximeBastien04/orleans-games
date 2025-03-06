import { useState } from "react";
import SearchBar from "../components/SearchBar";
import gamesData from "../data/games.json"; // Import JSON data

const Games = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter games based on the selected category
    const filteredGames = gamesData.filter((game) => {
        const matchesCategory = selectedCategory === "All" || game.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch = game.name.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="all-games">
            <section>
                {/* Update the title dynamically */}
                <h1 id="game-category-title">{selectedCategory} Games</h1>
                <SearchBar setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchQuery} selectedCategory={selectedCategory} searchQuery={searchQuery} />
            </section>

            <article className="games-container">
                {filteredGames.map((game, index) => (
                    <a key={index} className={`game ${game.category.toLowerCase()}`} href={game.url}>
                        <img src="/images/assets/playBtn.png" alt="play" />
                        <img src={`/images/game-thumbnails/${game.image}`} alt={game.name} />
                    </a>
                ))}
            </article>
        </section>
    );
};

export default Games;
