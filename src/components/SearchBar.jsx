import { useState } from "react";
import { Menu, Search } from "lucide-react"; // Icons

const SearchBar = ({ setSelectedCategory, setSearchQuery, selectedCategory }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false); // Close menu after selection
  };

  return (
    <div className="searchbar-container">
      {/* CATEGORY BUTTON */}
      <div
        className={`category-button ${isCategoryOpen ? "expanded" : ""}`}
        onMouseEnter={() => setIsCategoryOpen(true)}
        onMouseLeave={() => setIsCategoryOpen(false)}
      >
        <Menu className="menu-icon" />
        {isCategoryOpen && (
          <div className="category-options">
            <p
              className={selectedCategory === "All" ? "selected" : ""}
              onClick={() => handleCategoryClick("All")}
            >
              All Games
            </p>
            <p
              className={selectedCategory === "Math" ? "selected" : ""}
              onClick={() => handleCategoryClick("Math")}
            >
              Math
            </p>
            <p
              className={selectedCategory === "Action" ? "selected" : ""}
              onClick={() => handleCategoryClick("Action")}
            >
              Action
            </p>
            <p
              className={selectedCategory === "Puzzle" ? "selected" : ""}
              onClick={() => handleCategoryClick("Puzzle")}
            >
              Puzzle
            </p>
          </div>
        )}
      </div>

      {/* SEARCH INPUT */}
      <div className={`search-input ${isCategoryOpen ? "collapsed" : ""}`}>
        {!isCategoryOpen ? (
          <input
            type="text"
            placeholder="Search games..."
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} // Update search query
          />
        ) : (
          <Search className="search-icon" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
