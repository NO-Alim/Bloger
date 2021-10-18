import React from 'react'
import Navbar from './component/Navbar';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Footer from './component/Footer';
import SingleBlog from './component/SingleBlog';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/information">
            <Information />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/singleblog">
            <SingleBlog />
          </Route>
        </Switch>
        <Footer />
      </Router> */}
      hello
    </div>
  );
}

export default App;
