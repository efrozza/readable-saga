import React, { Component } from 'react'
import {
  Tab,
  Row,
  Col,
  Nav,
  NavItem,
  Button,
  ButtonToolbar,
  Label
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Post from './Post'

export default class CategoryList extends Component {
  render () {
    return (
      <div>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row className='clearfix'>
            <Col sm={4}>
              <Nav bsStyle='pills' stacked>
                <NavItem eventKey='1'>Categoria 1</NavItem>
                <NavItem eventKey='2'>Categoria 2</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey='1'>
                  <ButtonToolbar>
                    <Link to='/NewPost'>
                      <Button bsSize='large'>New Post</Button>
                    </Link>
                  </ButtonToolbar>
                  <p />
                  <div>
                    <Label bsStyle='default'>Total posts: 42 </Label>
                  </div>
                  <p />
                  <Post />
                  <hr />
                </Tab.Pane>
                <Tab.Pane eventKey='2'>Posts da categoria Dois</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}
