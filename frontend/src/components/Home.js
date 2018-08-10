import React, { Component } from 'react'
import PostsList from './PostsList'
import { PageHeader, Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPosts } from '../actions/post_actions'
import sortBy from 'sort-by'

class Home extends Component {
  componentDidMount () {
    this.props.listPosts()
  }

  render () {
    return (
      <div>
        <Grid>
          <PageHeader>
            Readable project - Udacity React/Redux{' '}
            <small>- Author: Everton Frozza</small>
          </PageHeader>
        </Grid>
        <PostsList />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts.sort(sortBy('-voteScore'))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listPosts: data => dispatch(getPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
