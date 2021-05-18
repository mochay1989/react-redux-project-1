import logo from "./logo.svg";
import "./App.css";

import Header from "./containers/Header";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="app">
      {/* "Hello"
      <Input /> */}
      
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productID" exact component={ProductDetail}/>
      <Route>404 Not Found!</Route>
      </Switch>
      </Router>
  
      
      
      
    </div>
  );
}

export default App;
