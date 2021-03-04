import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/pages/SearchPage';
import Middle from './components/Middle';

function App() {
  return (
    <div className="App">
      <Router>
        <Search />
        <Header />
        <Middle />
        <Route path="/" />
        <Route path="/search" component={ SearchPage}/>
        {/* <Route path="/" />
        <Route path="/" />
        <Route path="/" /> */}
        
      </Router>
    </div>
  );
}

export default App;
