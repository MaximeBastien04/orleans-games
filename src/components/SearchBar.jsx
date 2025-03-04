import { useState } from "react";
import { Menu, Search } from "lucide-react"; // Icons

const SearchBar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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
            <p>All Games</p>
            <p>Math</p>
            <p>Action</p>
            <p>Puzzle</p>
            <p>RPG</p>
          </div>
        )}
      </div>

      {/* SEARCH INPUT */}
      <div className={`search-input ${isCategoryOpen ? "collapsed" : ""}`}>
        {!isCategoryOpen ? (
          <input type="text" placeholder="Search games..." />
        ) : (
          <Search className="search-icon" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;