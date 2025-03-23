import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <nav className={`navbar ${show && 'navbar__black'}`}>
      <div className="navbar__contents">
        <Link to="/">
          <img 
            className="navbar__logo"
            src="/netflix-logo.png" 
            alt="Netflix Logo"
          />
        </Link>
        
        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/my-list">My List</Link>
        </div>

        <div className="navbar__right">
          <SearchBar />
          <div className="navbar__profile">
            <img 
              className="navbar__avatar"
              src={user?.photoURL || "/avatar.png"}
              alt="Avatar"
            />
            <button onClick={handleLogout} className="navbar__logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
