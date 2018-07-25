import React, { Component } from 'react'
import { Tab, Row, Col, Nav, NavItem, Label } from 'react-bootstrap'

import PostItem from './PostItem'
import * as ReadAPI from '../utils/api-utils'

export default class CategoryList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  componentWillMount () {
    ReadAPI.getAllCategories()
      .then(categories => {
        this.setState({ categories: categories })
      })
      .catch('Erro no acesso a API')
    console.log(typeof this.state.categories)
  }

  render () {
    console.log('render')
    console.log(typeof this.state.categories)
    console.log(typeof this.state.categories)
    return (
      <div>
        <Tab.Container id='left-tabs-example' defaultActiveKey='react'>
          <Row className='clearfix'>
            {this.state.categories &&
              this.state.categories.map(categoria => {
                return (
                  <Col sm={4}>
                    <Nav bsStyle='tabs' stacked>
                      <NavItem eventKey={categoria.name}>
                        {categoria.name}
                      </NavItem>
                      <Col sm={8}>
                        <Tab.Content animation>
                          <Tab.Pane eventKey={categoria.name}>
                            {categoria.name}
                            <PostItem />
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Nav>
                  </Col>
                )
              })}
          </Row>
        </Tab.Container>
      </div>
    )
  }
}
