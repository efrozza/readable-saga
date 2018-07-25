import React, { Component } from 'react'
import {
  Panel,
  Glyphicon,
  Badge,
  Button,
  ButtonToolbar
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CommentItem extends Component {
  render () {
    return (
      <div>
        <Panel bsStyle='success'>
          <Panel.Heading>
            <Panel.Title componentClass='h3'>
              25/07/2018 - João da Silva - <Badge>42</Badge>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body> Comentário bla bla bla bla</Panel.Body>
          <Panel.Body>
            <ButtonToolbar>
              <Button bsSize='small'>
                <Link to='/PostDetail'>Edit</Link>
              </Button>
              <Button bsSize='small'>
                <Link to='/PostDetail'>Delete</Link>
              </Button>
              <Button bsSize='small'>
                <Glyphicon glyph='star' /> Star
              </Button>
            </ButtonToolbar>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}
