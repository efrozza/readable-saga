import React, { Component } from 'react'
import { Grid, Glyphicon, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PostCommentsList from './PostCommentsList'
import PostScore from './PostScore'

export default class PostDetail extends Component {
  render () {
    const { post } = this.props.location.state
    return (
      <div>
        <Grid>
          <Panel bsStyle='primary'>
            <Panel.Heading>
              <Panel.Title componentClass='h3'>
                {post.title.timestamp} - {post.title} -
                <PostScore voteScore={post.voteScore} />
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>
                {post.body}
              </p>
            </Panel.Body>
            <Panel.Body>
              <strong>Author: </strong>
              {post.author}
            </Panel.Body>
          </Panel>

          <ButtonToolbar>
            <Button bsSize='small'>
              <Link to='/'>Edit</Link>
            </Button>
            <Button bsSize='small'>
              <Link to='/'>Delete</Link>
            </Button>
            <Button bsSize='small'>
              <Glyphicon /> Up Vote
            </Button>
            <Button bsSize='small'>
              <Glyphicon /> Down Vote
            </Button>
          </ButtonToolbar>

          <PostCommentsList />
        </Grid>
      </div>
    )
  }
}
