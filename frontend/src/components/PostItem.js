import React, { Component } from 'react'
import { Button, Panel, Label } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PostItem extends Component {
  render () {
    return (
      <div width='100%'>
        <Panel>
          <Panel.Heading>Autor: Nome do autor</Panel.Heading>
          <Panel.Body>
            Title: Título do post - Likes: <Label bsStyle='default'>42</Label>
            <Button bsSize='xsmall'>
              <Link to='/PostDetail'>Read</Link>
            </Button>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}
