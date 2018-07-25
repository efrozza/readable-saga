import React, { Component } from 'react'
import '../css/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import PostDetail from './PostDetail'
import NavBar from './CustomNavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/NewPost' component={NewPost} />
          <Route path='/PostDetail' component={PostDetail} />
        </div>
      </Router>
    )
  }
}

export default App
