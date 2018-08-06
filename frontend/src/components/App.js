import React, { Component } from 'react'
import '../css/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import PostNew from './PostNew'
import PostDetail from './PostDetail'
import About from './About'
import HeaderMenu from './CustomNavBar'
import PostsList from './PostsList'

const Page404 = () => <div>Página não encontrada</div>

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <HeaderMenu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/postnew' component={PostNew} />
            <Route exact path='/about' component={About} />
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
