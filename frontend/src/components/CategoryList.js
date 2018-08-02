import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/category_actions'
import { Link } from 'react-router-dom'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class CategoryList extends Component {
  componentDidMount () {
    this.props.listCategories()
  }

  render () {
    switch (this.props.estilo) {
      case 'list':
        return (
          <div>
            {this.props.categories &&
              this.props.categories.map(categoria => {
                return (
                  <Link to={`/${categoria.name}`} key={categoria.name}>
                    {' '}{categoria.name}
                    {'  | '}
                  </Link>
                )
              })}
          </div>
        )
      case 'combo':
        return (
          <div>
            <FormGroup controlId='formControlsSelect'>
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass='select' placeholder='select'>
                {this.props.categories &&
                  this.props.categories.map(categoria => {
                    return (
                      <option value={categoria.name}>
                        {categoria.name}
                      </option>
                    )
                  })}
              </FormControl>
            </FormGroup>
          </div>
        )
    }
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listCategories: data => dispatch(getCategories(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
