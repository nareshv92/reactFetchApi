import './App.css';
import Home from './components/Home'
import Search from './components/Search'
import UserList from './components/UserList';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
       <ul>
        <li>   <Link to="/" className="menu">Home </Link></li>
       
      <li> <Link to="/userlist"className="menu" activeClassName="selected">User list</Link> </li>
      <li> <Link to="/search"className="menu">Search User</Link></li>
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
