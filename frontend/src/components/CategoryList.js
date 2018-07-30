import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl } from 'react-bootstrap'
import { listAllCategories, selectCategory } from '../actions/index'
import PostsList from './PostsList'

class CategoryList extends Component {
  componentDidMount () {
    this.props.listCategories()
  }

  render () {
    return (
      <div>
        <FormGroup controlId='formControlsSelect'>
          <FormControl
            componentClass='select'
            placeholder='select'
            onChange={event => this.props.selectCategory(event.target.value)}
          >
            <option value='select'>select</option>
            {this.props.categorias &&
              this.props.categorias.map(categoria => {
                return (
                  <option value={categoria.name} key={categoria.name}>
                    {categoria.name}
                  </option>
                )
              })}
          </FormControl>
        </FormGroup>
        <PostsList />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categorias: state.categories.categories,
    selectedCategory: state.selectedCategory.selectCategory
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listCategories: data => dispatch(listAllCategories(data)),
    selectCategory: data => dispatch(selectCategory(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
