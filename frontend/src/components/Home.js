import React, { Component } from 'react'
import CategoryList from './CategoryList'
import PostsList from './PostsList'
import { PageHeader, Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPosts } from '../actions/post_actions'

class Home extends Component {
  componentDidMount () {
    this.props.listPosts()
  }

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

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listPosts: data => dispatch(getPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
