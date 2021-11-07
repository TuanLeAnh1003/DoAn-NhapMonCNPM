import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderBottom from './Components/HeaderBottom';


function App() {
  return (
    <Router>
      <div className="app">
      <HeaderBottom />
        <Header />
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
        <Footer />
      </div>
  </Router>
  );
}

export default App;
