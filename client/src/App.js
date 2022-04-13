import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/NavBar';
import { Routes, Route, useParams} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import HomeClass from './components/shared/HomeClass';
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/shared/ProtectedRoute';
import Profile from './components/auth/Profile';
<<<<<<< HEAD
import SearchResults from './components/pages/SearchResults';
=======
import MovieDetail from './components/pages/MovieDetail';
>>>>>>> fd4db8adc64ae3dfd94201cdbf69b131ebd8c5a1

//Fetch User: going to see if the user is logged in(valid user?)
//before we render our routes, it's going to check for user.
//prevents routes from getting rendered until check is done 

//if fetchUser is in progress of checking App returns null; 
//it doesn't care whether we have a user or not, it's just checking
//after done checking it will proceed with render 

function App() {
  return (
    <div>
      <Navbar />
      {/* When our app first mounts FetchUser Runs */}
      <FetchUser>
        <>
          <Routes>
            {/* Unprotected */}
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/' element={<Home />}/>
           
                {/* protected in routes inside of here you need to logged in*/}
                {/* else you go to login page*/}
            <Route element={<ProtectedRoute />}>
              <Route path='/home' element={<HomeClass yo={'yoyo'} />}/>
<<<<<<< HEAD
              <Route path='/profile' element={<Profile yo={'Profile'} />} />
              <Route path='/SearchResults' element={<SearchResults yo={'Search'} />}/>
              
=======
              <Route path='/profile' element={<Profile yo={'Profile'} />}/>
              <Route path='/movieDetail' element={<MovieDetail yo={'MovieDetail'} />}/>

>>>>>>> fd4db8adc64ae3dfd94201cdbf69b131ebd8c5a1
            </Route>  
            <Route path='*' element={<NoMatch />}/>
          </Routes>
        </>
      </FetchUser>
      {/* <p>Footer for all pages</p> */}
    </div>
  );
}

export default App;
