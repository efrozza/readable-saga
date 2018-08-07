import React, { Component } from 'react'
import { addComment } from '../actions/comment_actions'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: ' ',
      body: ' ',
      parentId: ' '
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const comment = {
      id: v4(),
      timestamp: Date.now(),
      author: this.state.author,
      body: this.state.body,
      parentId: this.props.parentId
    }
    console.log('comment' + comment)

    this.props.addComment(comment)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <Grid>
        <div>
          <h3>Add Comment</h3>
        </div>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <ControlLabel>author</ControlLabel>
            <FormControl
              placeholder='author'
              name='author'
              value={this.state.author}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>body</ControlLabel>
            <FormControl
              componentClass='textarea'
              name='body'
              placeholder='body'
              value={this.state.body}
              onChange={this.onChange}
            />
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </form>
      </Grid>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: values => dispatch(addComment(values))
  }
}
export default connect(null, mapDispatchToProps)(CommentForm)
