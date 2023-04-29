import Home from "./components/Home";
import Navbar from "./components/Navbar";
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AnimeDetails from "./components/AnimeDetails";
import Search from "./components/Search";




function App() {
  return (
   <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
           <Route path="/animedetails:id">
            <AnimeDetails/>
           </Route>
           <Route path="/search-:searchKey">
            <Search/>
           </Route>
        </Switch>
      </Router>
                
    
    </div>
  );
}

export default App;
