import "../style/Navbar.css"
import { useState, useRef, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FormEvent } from "react";

function Navbar() {
  const [search, setSearch] = useState<boolean>(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const isSavedPage = location.pathname.startsWith("/saved");

  const handleClick = () => {
    setSearch(!search);
    if (inputRef.current && search) {
      inputRef.current.focus();
    }
  };  

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
        setSearch(!search);
        navigate(`/search/${inputRef.current.value}`);
    }
  };


  return (
    <div>
        <nav>
            <MdSearch onClick={handleClick}></MdSearch>
            <Link to="/" className="brand">
              Weather<span>App</span>
            </Link>
            <Link to="/saved">
              {isSavedPage ? <FaStar></FaStar> : <FaRegStar></FaRegStar>}
            </Link>
        </nav>
        {search && (
          <form onSubmit={handleSearch}>
            <input 
                type="text" 
                ref={inputRef} 
                placeholder="Enter a city..."
                />
          </form>
        )}
    </div>
    
  );
}

export default Navbar;
