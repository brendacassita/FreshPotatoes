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
import SearchResults from './components/pages/SearchResults';
import EditProfile from './components/auth/EditProfile';
import Genres from './components/pages/Genres';
import MovieDetail from './components/pages/MovieDetail';
import Footer from './components/pages/Footer';
import Review from './components/pages/Review';
import PopularPotatoes from './components/pages/PopularPotatoes';
<<<<<<< HEAD
import PopularFries from './components/pages/PopularFries';

=======
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import About from './components/pages/About';
>>>>>>> d55ea7c53f26fe74534e0efdb293a40168d93734

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
            <Route path='/review' element={<Review />}/>
            <Route path='/privacy_policy' element={<PrivacyPolicy />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/popular_fries' element={<PopularFries />}/>
            
           
                {/* protected in routes inside of here you need to logged in*/}
                {/* else you go to login page*/}
            <Route element={<ProtectedRoute />}>
              <Route path='/home' element={<Home/>}/>
            
              <Route path='/SearchResults' element={<SearchResults yo={'Search'} />}/>
              
<<<<<<< HEAD
              <Route path='/movieDetail' element={<MovieDetail yo={'MovieDetail'} />}/>
              <Route path='/profile' element={<Profile yo={'Profile'} />}/>
              <Route path='/edit_profile' element={<EditProfile yo={'Edit Profile'} />}/>
              <Route path='/categories' element={<Categories yo={'Categories'} />}/>
              <Route path='/movie_detail' element={<MovieDetail yo={'MovieDetail'} />}/>
              <Route path= '/popular_potatoes' element={<PopularPotatoes yo={'PopularPotatoes'}/>}>
                
                
                
=======
              <Route path='/movieDetail' element={<MovieDetail />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/edit_profile' element={<EditProfile />}/>
              <Route path='/genres' element={<Genres />}/>
              <Route path='/movies/:id' element={<MovieDetail  />}/>
              <Route path= '/popular_potatoes' element={<PopularPotatoes/>}>
>>>>>>> d55ea7c53f26fe74534e0efdb293a40168d93734

              </Route>
              



            </Route>  
            <Route path='*' element={<NoMatch />}/>
          </Routes>
        </>
      </FetchUser>
      <Footer />

    </div>
  );
}

export default App;
