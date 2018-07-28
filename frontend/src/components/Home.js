import React, { Component } from 'react'
import CategoryList from './CategoryList'
import { PageHeader, Grid } from 'react-bootstrap'
import PostsList from './PostsList'
import '../css/Home.css'

class Home extends Component {
  render () {
    return (
      <Grid>
        <PageHeader>
          Project Readable - Udacity React/Redux{' '}
          <small>- Autor: Everton Frozza</small>
        </PageHeader>
        <CategoryList />
        <PostsList />
      </Grid>
    )
  }
}

export default Home
