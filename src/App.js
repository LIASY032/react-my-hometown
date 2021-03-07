import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/pages/SearchPage';

import Home from './components/pages/Home';
import LocationPage from './components/pages/LocationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Search />
        <Header />
        
        <Route path="/" exact component={Home}/>
        <Route path="/search" component={SearchPage} />
        <Route path="/tower" component={LocationPage} />
        {/* <Route path="/" />
        <Route path="/" />
        <Route path="/" /> */}
        
      </Router>
    </div>
  );
}

export default App;
