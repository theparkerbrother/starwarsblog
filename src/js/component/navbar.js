import React, { useState } from "react";
import { Link } from "react-router-dom";
import darthVader from '../../img/darthVader.png';

export const Navbar = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);  // This will track the count
  const [showDropdown, setShowDropdown] = useState(false);  // Toggle dropdown visibility
  const [favorites, setFavorites] = useState([]);			// This holds the favorites list

  return (
    <nav className="navbar navbar-light bg-light mb-3 mt-3">
      <Link to="/">
        <img src={darthVader} alt="Home" className="navbar-brand mb-0 h1 ms-3" style={{ height: '50px' }} />
      </Link>

      {/* Favorites Button with Dropdown */}
      <div className="ml-auto">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="favoritesDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={showDropdown ? "true" : "false"}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Favorites ({favoritesCount})
        </button>
        {showDropdown && (
          <div className="dropdown-menu show" aria-labelledby="favoritesDropdown">
            <a className="dropdown-item" href="#">Favorite 1</a>
            <a className="dropdown-item" href="#">Favorite 2</a>
            <a className="dropdown-item" href="#">Favorite 3</a>
            {/* More favorites could go here */}
          </div>
        )}
      </div>
    </nav>
  );
};

