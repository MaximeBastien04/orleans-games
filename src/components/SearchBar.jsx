import { Menu } from "lucide-react";

const SearchBar = ({ setSelectedCategory, setSearchQuery, selectedCategory, searchQuery }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="searchbar-container">
      {/* CATEGORY MENU */}
      <div className="category-options">
        <div>
          <p className={selectedCategory === "All" ? "selected" : ""} onClick={() => handleCategoryClick("All")}>
            All Games
          </p>
        </div>
        <div>
          <p className={selectedCategory === "Math" ? "selected" : ""} onClick={() => handleCategoryClick("Math")}>
            Math
          </p>
        </div>
        <div>
          <p className={selectedCategory === "Action" ? "selected" : ""} onClick={() => handleCategoryClick("Action")}>
            Action
          </p>
        </div>
        <div>
          <p className={selectedCategory === "Puzzle" ? "selected" : ""} onClick={() => handleCategoryClick("Puzzle")}>
            Puzzle
          </p>
        </div>
        <div>
          <p className={selectedCategory === "Observe" ? "selected" : ""} onClick={() => handleCategoryClick("Observe")}>
            Observe
          </p></div>
      </div>

      {/* SEARCH BAR */}
      <input className="search-input"
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
