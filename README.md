# README

This project has devise_token_auth, react_router, etc setup.
- uses rails v6, ruby 3.0.2
- more info about the project

## Getting starter (how to use)

## Clone
1. git clone git@github.com:jimibue/starter-rv6.git 'project-name'
2. cd 'project-name'

### rails stuff
1. renaming our database in the config/database.yml file
2. bundle
3. rails db:create db:migrate (db:seed if needed/applicable)
4. rails s -p 3001

### react stuff
> make sure in  client folder
1. yarn
2. yarn start

### git stuff
1. git remote rm origin
2. create new repo on github
3. git remote add origin <ssh-link>

## Features/Explanation

## TOKENS
- token based auth
1. when client log in server will check our creds and if valid gives us back a token (via response)
2. when client make subsequent requests, needs to send token, if token is invalid server will responded 401 error. (unauthed)

how do we do handle receiving token and sending token
(backend): devise_token_auth: sending in response
(frontend): devise-axios library (in index.js)

```javascript
import { initMiddleware } from 'devise-axios';

// this going to get token from api calls and set them to be sent on the
// next api call, also stores info to localStorage,
initMiddleware();
```

## AuthProvider
gives a way to share this 'user' state( where user is authed user) 
and methods to login, logout, register.

```javascript
    <AuthProvider>
      <App />
    </AuthProvider>
```

## App.js
```javascript
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
            </Route>  
            <Route path='*' element={<NoMatch />}/>
          </Routes>
        </>
      </FetchUser>

```
### Three parts here
1. FetchUser: Checks to see if there is a valid user, and prevent Routes from
getting render until the check is done

if fetchUser is in progress of Checking it looks like this
```javascript
      <FetchUser>
        {null}
      </FetchUser>

```
2. Unprotected routes
routes you don't need to be logged in to see..

```javascript
   {/* Unprotected */}
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/' element={<Home />}/>
```

3. Protected routes
routes you do need to be logged in to see..
```javascript
    <Route element={<ProtectedRoute />}>
        {/* Any Routes we throw in here, user needs to be logged in */}
        <Route path='/home' element={<HomeClass yo={'yoyo'} />}/>
    </Route>  
```

```javascript
    const ProtectedRoute = (props)=>{
        // get user from Provider 
        const auth = useContext(AuthContext)
        // if we have auth.user render the route
        // if not we can do something else, in this
        // case we redirect to Login screen
        return auth.user ? <Outlet /> : <Navigate to='/login'/>
    }
```


# Backend
1. add devise_token_auth to gem file
2. rails g devise_token_auth:install User api/auth
this command does a lot for us
- it adds the routes/controller stuff
- it create our model (in this case the user model)

3. add `extend Devise::Models` to user.rb file
4. added AddTrackableToUsers migration
```ruby
class AddTrackableToUsers < ActiveRecord::Migration[6.0]
  def change
      ## Trackable
      add_column :users, :sign_in_count, :integer, :default => 0
      add_column :users, :current_sign_in_at, :datetime
      add_column :users, :last_sign_in_at, :datetime
      add_column :users, :current_sign_in_ip, :string
      add_column :users, :last_sign_in_ip, :string
  end
end

```


### routes

we have all the routes defined and controller action setup for us...
```
Rails.application.routes.draw do
  # generates all devise routes
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
```

### main features on backend
  > we to protect routes on the backend
  before_action :authenticate_user!

 > way to  get 'logged in user' on the backend
  current_user






