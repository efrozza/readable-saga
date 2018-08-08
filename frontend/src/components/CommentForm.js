import React, { Component } from 'react'
import { v4 } from 'uuid'
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.comment ? props.comment.id : v4(),
      timestamp: props.comment ? props.comment.timestamp : Date.now(),
      author: props.comment ? props.comment.author : ' ',
      body: props.comment ? props.comment.body : ' ',
      parentId: props.comment ? props.comment.parentId : ' '
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const comment = {
      id: this.state.id,
      timestamp: this.state.timestamp,
      author: this.state.author,
      body: this.state.body,
      parentId: this.props.parentId
    }

    this.props.onSubmit(comment)

    this.setState({ author: ' ' })
    this.setState({ body: ' ' })
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    console.log('props' + this.props.comment)
    return (
      <div align='left'>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <ControlLabel>Author</ControlLabel>
            <FormControl
              autoFocus
              placeholder='author'
              name='author'
              value={this.state.author}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Comment</ControlLabel>
            <FormControl
              componentClass='textarea'
              name='body'
              placeholder='body'
              rows='3'
              value={this.state.body}
              onChange={this.onChange}
            />
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default CommentForm
