import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl } from 'react-bootstrap'
import { listAllCategories, selectCategory } from '../actions/category_actions'
import { listPostsCategory } from '../actions/post_actions'

class CategoryList extends Component {
  componentDidMount () {
    this.props.listCategories()
  }

  handleSelectCategory (categoria) {
    this.props.selectCategory(categoria)
    if (this.props.filter && categoria != '#') {
      this.props.listPostsCategory(categoria)
    }
  }

  render () {
    console.log('renderizou CategoryList')
    return (
      <div>
        <FormGroup controlId='formControlsSelect'>
          <FormControl
            componentClass='select'
            placeholder='select category'
            onChange={event => this.handleSelectCategory(event.target.value)}
          >
            <option value='#'>Select...</option>
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
    selectCategory: data => dispatch(selectCategory(data)),
    listPostsCategory: data => dispatch(listPostsCategory(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
