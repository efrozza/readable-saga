import React, { Component } from 'react'
import PostsList from './PostsList'
import { PageHeader, Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPosts } from '../actions/post_actions'
import { getCategories } from '../actions/category_actions'
import { Link } from 'react-router-dom'

class Home extends Component {
  componentDidMount () {
    this.props.listPosts()
    this.props.listCategories()
  }

  render () {
    return (
      <div>
        <Grid>
          <PageHeader>
            Project Readable - Udacity React/Redux{' '}
            <small>- Autor: Everton Frozza</small>
          </PageHeader>
        </Grid>
        <Grid>
          <div>
            {this.props.categories &&
              this.props.categories.map(categoria => {
                return (
                  <Link to={`/${categoria.name}`} key={categoria.name}>
                    {' '}{categoria.name}
                    {'  | '}
                  </Link>
                )
              })}
          </div>
        </Grid>
        <PostsList />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listPosts: data => dispatch(getPosts(data)),
    listCategories: data => dispatch(getCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
