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
import PostItem from './PostItem'
import * as ReadAPI from '../utils/api-utils'

export default class CategoryList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    ReadAPI.getAllCategories()
      .then(categories => {
        this.setState({ categories })
        console.log(categories)
      })
      .catch('Erro no acesso a API')
  }

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
                <ButtonToolbar>
                  <Link to='/NewPost'>
                    <Button bsSize='large'>New Post</Button>
                  </Link>
                </ButtonToolbar>
                <Tab.Pane eventKey='1'>
                  <p />
                  <div>
                    <Label bsStyle='default'>Total posts: 42 </Label>
                  </div>
                  <p />
                  <PostItem />
                  <hr />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}
