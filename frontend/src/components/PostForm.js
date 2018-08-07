import React, { Component } from 'react'
import { addPost } from '../actions/post_actions'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

class PostForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: ' ',
      timestamp: 0,
      title: ' ',
      author: ' ',
      category: ' ',
      body: ' '
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({ timestamp: Date.now() })
    this.setState({ id: v4() })
  }

  onSubmit (e) {
    e.preventDefault()
    const post = {
      id: this.state.id,
      timestamp: this.state.timestamp,
      title: this.state.title,
      author: this.state.author,
      category: this.state.category,
      body: this.state.body
    }
    this.props.addPost(post)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <Grid>
        <div>
          <h3>Add a post:</h3>
        </div>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              placeholder='Title'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Author</ControlLabel>
            <FormControl
              placeholder='author'
              name='author'
              value={this.state.author}
              onChange={this.onChange}
            />
          </FormGroup>

          <FormGroup controlId='formControlsSelect'>
            <ControlLabel>Category</ControlLabel>
            <FormControl
              componentClass='select'
              name='category'
              value={this.state.category}
              onChange={this.onChange}
            >
              <option value=''>select category</option>
              {this.props.categories &&
                this.props.categories.map(categoria => {
                  return (
                    <option value={categoria.name} key={categoria.name}>
                      {categoria.name}
                    </option>
                  )
                })}
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Body Post</ControlLabel>
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

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: values => dispatch(addPost(values))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
