import React, { Component } from 'react'
import CategoryList from './CategoryList'
import { PageHeader, Grid, Row, Col, Image, Button } from 'react-bootstrap'
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
      </Grid>
    )
  }
}

export default Home
