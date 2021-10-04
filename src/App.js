
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import About from './component/About/About';
import Blog from './component/Blog/Blog';


function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
