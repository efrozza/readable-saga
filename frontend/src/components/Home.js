import React, { Component } from 'react'
import CategoryList from './CategoryList'
import PostsList from './PostsList'
import { PageHeader, Grid } from 'react-bootstrap'
import '../css/Home.css'

class Home extends Component {
  render () {
    console.log('renderizou home')
    return (
      <Grid>
        <PageHeader>
          Project Readable - Udacity React/Redux{' '}
          <small>- Autor: Everton Frozza</small>
        </PageHeader>
        <CategoryList filter='true' />
        <PostsList />
      </Grid>
    )
  }
}

export default Home
