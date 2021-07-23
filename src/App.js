import './App.css';
import Home from './components/Home'
import Search from './components/Search'
import UserList from './components/UserList';
import {BrowserRouter as Router,NavLink,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
       <ul>
        <li><NavLink to="/" className="menu">Home </NavLink></li>
       <li><NavLink to="/userlist"className="menu" activeClassName="active">User list</NavLink> </li>
      <li> <NavLink to="/search"className="menu">Search User</NavLink></li>
      </ul> 
       <Switch>
         <Route path="/" exact> <Home/> </Route>
         <Route path="/userlist"> <UserList/> </Route>
         <Route path="/search"> <Search/> </Route>
        </Switch>
            </Router>
    </div>
  );
}
export default App;
