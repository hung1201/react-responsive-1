import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import SignIn from './components/pages/SignIn'
const App = () => {
  return (
    <Router>
     <Navbar/> 
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" exact component={About} />
       <Route path="/contact" exact component={Contact} />
       <Route path="/sign-in" exact component={SignIn} />
     </Switch>
    </Router>
  )
}

export default App
