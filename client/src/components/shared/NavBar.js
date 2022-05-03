import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "../../Images/Theotherlogo-01.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, IconButton, InputBase, Toolbar, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import "../CssFIles/Navbar.css";
import SearchBar from "./SearchBar";
import axios from "axios";
import "../CssFIles/SearchBar.css";
import bwPic from "../../Images/blackwhitePotatoe.png";
import potatoe from "../../Images/Potatoe.png";

const Navbar = () => {
  let auth = useContext(AuthContext);
  const [allMovies, setAllMovies] = useState([]);
  const { handleLogout, user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = useState(0);
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    getMoviesFromApi();
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const getMoviesFromApi = async () => {
    try {
      let res = await axios.get("/api/movies");
      setAllMovies(res.data);
    } catch (err) {
      alert("error getting movies");
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const renderRightNav = () => {
    if (user) {
      return (
        <div className="logout">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            // color="inherit"
          >
            {/* <Avatar className="avatar_circle" src={user && user.avatar} /> */}
            {/* <div className='avatar_circle' src={user }>
                  <img className='avatar_circle' src={potatoe} width='60px'></img>
                </div> */}
            {/* {!user.avatar &&
            <button ><img src={bwPic} width='170px'></img></button>} */}
            
            <img
              className="avatar_circle"
              src={user && user.avatar ? user.avatar : bwPic}
              width="90px"
            ></img>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* DO NOT DELETE THESE */}
            {/* <MenuItem onClick={handleMenuClose}><Link className='profilelink' to='/profile'>Profile</Link></MenuItem>
              <MenuItem onClick={handleMenuClose}><Link className='profilelink' to='/edit_profile'>Edit Profile</Link></MenuItem> */}
            <MenuItem className="profilelink" onClick={handleMenuClose}>
              <div className="">
                <Link className="profilelink" to="/profile">
                  {t("common:profile")}
                </Link>
                <Link className="profilelink" to="/edit_profile">
                  {t("common:editprofile")}
                </Link>
                <Button
                  className="btn2"
                  variant="outlined"
                  onClick={() => handleLogout()}
                >
                  {t("common:logout")}
                </Button>
              </div>
            </MenuItem>
          </Menu>
        </div>
      );
    }
    return (
      <>
        <br />
        <Button
          className="buttonRegister-nav"
          variant="outlined"
          href="/login"
        >
          Login
        </Button>
      </>
    );
  };
  const renderLeft = () => {
    //if we have a user, return the links we want to show(if logged in)
    if (user) {
      return (
        <div className="renderLeft">
          {/* <Link className="Nav-link" to="/home">Home Protected</Link> */}
          {/* <Badge onClick={auth.handleLogout }>Logout</Badge> */}
          <Link className="btn1 navlist" to="/popular_potatoes">
            {t("common:popularpotatoes")}
          </Link>
          <Link className="btn1" to="/popular_fries">
            {t("common:popularfries")}
          </Link>{" "}
          {""}
          <Link className="btn1" to="/genres">
            {t("common:genres")}
          </Link>
          <Link className="btn1" to="/SearchResults">
            {t("common:search")}
          </Link>
          <Link className="btn1" to="/About">
          {t("common:about")}

          </Link>
          
           <SearchBar
            className="searchfunction"
            placeholder="Search Movies..."
              />
              
          <div className="language">
            <div className="">
              <ul className="">
                <div className="">
                  <select
                    className="Language-drop"
                    value={localStorage.getItem("i18nextLng")}
                    onChange={handleLanguageChange}
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="es">Español</option>
                  </select>
                </div>
              </ul>
            </div>
          </div>
         
        </div>
      );
    }
  };

  // if (!auth.user){
  //   return <p className="no-user"></p>
  // }
  return (
    <AppBar className="AppBar" position="static">
      <Toolbar className="AppBar1">
        <Link to={user ? "/home" : "/"}>
          <div className="logo">
            <img src={logo} width="190px"></img>
          </div>
        </Link>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{renderLeft()}</div>
          {/* <SearchBar
            className="searchfunction"
            placeholder="Search Movies..."
          /> */}
          <div>
            {/* <h2>Welcome {auth.user.name ? auth.user.name : 'nouser'}!</h2> */}
          </div>
          {renderRightNav()}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
