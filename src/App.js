import Header from './Components/Header'
import Footer from './Components/Footer'
import BodyHome from './Components/BodyHome'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderBottom from './Components/HeaderBottom';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/"><BodyHome /></Route>
        </Switch>
        <Footer />
      </div>
  </Router>
  );
}

export default App;
