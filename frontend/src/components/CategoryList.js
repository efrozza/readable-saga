import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap'
import { listAllCategories } from '../actions/index'
import PostsList from './PostsList'

class CategoryList extends Component {
  componentDidMount () {
    this.props.listAllCategories()
  }

  render () {
    return (
      <div>
        <h2>Select post category</h2>
        <Tab.Container id='left-tabs-example' defaultActiveKey='react'>
          <Row className='clearfix'>
            {this.props.categorias &&
              this.props.categorias.map(categoria => {
                return (
                  <Col sm={4}>
                    <Nav bsStyle='tabs' stacked>
                      <NavItem eventKey={categoria.name}>
                        {categoria.name}
                      </NavItem>
                      <Col sm={12} width='100'>
                        <Tab.Content animation>
                          <Tab.Pane eventKey={categoria.name}>
                            <PostsList />
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

function mapStateToProps (state) {
  console.log('state' + state.categories.allCategories)
  return { categorias: state.categories.allCategories }
}

export default connect(mapStateToProps, { listAllCategories })(CategoryList)
