import React, { Component } from 'react'
import '../css/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import PostAdd from './PostAdd'
import PostDetail from './PostDetail'
import HeaderMenu from './CustomNavBar'
import PostsList from './PostsList'
import PostEdit from './PostEdit'
import Page404 from './Page404'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <HeaderMenu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/postnew' component={PostAdd} />
            <Route path='/edit/:category/:id' component={PostEdit} />
            <Route path='/:category/:id' component={PostDetail} />
            <Route path='/:category/' component={PostsList} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
