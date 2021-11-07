import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
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
