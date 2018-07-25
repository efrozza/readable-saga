import React, { Component } from 'react'
import { Button, ButtonToolbar, Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  render () {
    return (
      <div>
        <Panel bsStyle='primary'>
          <Panel.Heading>Autor: Nome do autor</Panel.Heading>
          <Panel.Body>
            <Link to='/PostDetail'>Title: Título do post</Link>
          </Panel.Body>
        </Panel>
        <ButtonToolbar>
          <Button bsStyle='primary' bsSize='small'>
            Reply
          </Button>
          <Button bsStyle='warning' bsSize='small'>
            Edit
          </Button>
          <Button bsStyle='danger' bsSize='small'>
            Delete
          </Button>
        </ButtonToolbar>
      </div>
    )
  }
}
