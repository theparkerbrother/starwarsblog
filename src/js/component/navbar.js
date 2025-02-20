import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import darthVader from '../../img/darthVader.png';
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);  // Toggle dropdown visibility
  const [favorites, setFavorites] = useState([]);			// This holds the favorites list

  // Handlers to show and hide dropdown on hover
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };


  return (
    <nav className="navbar navbar-light bg-light mb-3 mt-3">
      <Link to="/">
        <img src={darthVader} alt="Home" className="navbar-brand mb-0 h1 ms-3" style={{ height: '50px' }} />
      </Link>

      {/* Favorites Button with Dropdown */}
      <div 
        className="ml-auto"
        //onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="favoritesDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={showDropdown ? "true" : "false"}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Favorites ({store.favorites.length})
        </button>
        {showDropdown && (
          <div className="dropdown-menu show" aria-labelledby="favoritesDropdown">
            {store.favorites.length > 0 ? (
              store.favorites.map((fav, index) => (
                <div key={index} className="dropdown-item">
                 <Link 
                      to={`${fav.detailLink}`}
                    >{fav.name}
                  </Link>
                </div>
              ))
            ) : (
              <span className="dropdown-item text-muted">No favorites yet</span>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

