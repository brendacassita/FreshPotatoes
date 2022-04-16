import logo from '../../Images/Thelogo.png'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Button from '@mui/material/Button';
import {styled,alpha} from '@mui/material/styles'
import {AppBar,IconButton,InputBase,Toolbar,Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import '../CssFIles/Navbar.css'

const Navbar = () => {
  
  const { handleLogout, user} = useContext(AuthContext)
  const [anchorEl,setAnchorEl] = useState(null)
  const [anchorElNav,setAnchorElNav] = useState(null)
  const [value,setValue] = useState(0)
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClickTab = (e,newValue) => {
  setValue(newValue)
  }
  const handleMenuClose = () => {
  setAnchorEl(null)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const renderRightNav = () => {
    if (user) {
      return <div style={{display:'flex'}}><Button variant='outlined' onClick={handleLogout}>Logout</Button></div> 
    }
    return (
      <>
         <Button className='btn1' variant='outlined' type="button" href="/login">Login</Button>
        <Button className='btn1' variant='contained' href='/register'>Register</Button>
      </>
    );
  };
  
  const renderLeft = () => {
    //if we have a user, return the links we want to show(if logged in)
    if (user) {
      return (
        <>
          {/* <Link className="Nav-link" to="/home">Home Protected</Link> */}
          {/* <Badge onClick={auth.handleLogout }>Logout</Badge> */}
         
          
          
           
          <Link className="btn1" to='/genres'>Genres</Link> 
          <Link className="btn1" to='/SearchResults'>Search</Link>
          <Link className="btn1" to='/movie_detail'>Movie Detail</Link> {''}

  
        </>
      );
    }
  };
  
   const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));
  
  return (
    <AppBar position='static' sx={{background: 'red'}}>
      <Toolbar>
        
        <Link to='./'>
          <div className='logo'><img src={logo}width='190px' ></img></div>
       </Link>
      
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
      
        <Link className="Nav-link" to="/">Home</Link>
        <Link className="Nav-link" to="/popular_potatoes">PopularPotatoes</Link>
        <Link className="Nav-link" to='/popular_fries'>PopularFries</Link> {''}

        

  

        {renderLeft()}

  

          </div>
         
          
          <Box className='box'>
           <Search className='box' >
            <SearchIconWrapper>
              <SearchIcon className="searchicon"/>
            </SearchIconWrapper>
            <StyledInputBase className="search"
              placeholder="Search Movies…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
          
          
          
          <div className='logout' >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <Avatar className='avatar_circle' src={user && user.avatar} sx={{width: 56, height: "auto"}} />
              
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
>
              
              {/* DO NOT DELETE THESE */}
                <MenuItem onClick={handleMenuClose}><Link className='profilelink' to='/profile'>Profile</Link></MenuItem>
              <MenuItem onClick={handleMenuClose}><Link className='profilelink' to='/edit_profile'>Edit Profile</Link></MenuItem>

              
                {/* <MenuItem onClick={handleMenuClose}><Link className='profilelink' to='/profile'>Profile</Link></MenuItem>
              <MenuItem onClick={handleMenuClose}><Link className='profilelink' to='/edit_profile'>Edit Profile</Link></MenuItem> */}

              <MenuItem onClick={handleMenuClose}>{renderRightNav()}</MenuItem>
              </Menu>
            </div>
         
    
      
        </div>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
