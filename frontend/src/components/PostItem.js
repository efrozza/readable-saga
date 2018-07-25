import React, { Component } from 'react'
import {
  Button,
  ButtonToolbar,
  Panel,
  Label,
  Glyphicon
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PostItem extends Component {
  render () {
    return (
      <div>
        <Panel bsStyle='primary'>
          <Panel.Heading>Autor: Nome do autor</Panel.Heading>
          <Panel.Body>
            <Link to='/PostDetail'>Title: Título do post</Link>
          </Panel.Body>
          <Panel.Body>
            Coments:<Label bsStyle='default'>42</Label>
          </Panel.Body>
        </Panel>
        <ButtonToolbar>
          <Button bsSize='small'>
            <Link to='/PostDetail'>Read Post</Link>
          </Button>
          <Button bsSize='small'>
            <Glyphicon glyph='star' /> Star
          </Button>
        </ButtonToolbar>
      </div>
    )
  }
}
