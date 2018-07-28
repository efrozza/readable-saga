import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl } from 'react-bootstrap'
import { listAllCategories, selectCategory } from '../actions/index'

class CategoryList extends Component {
  componentWillMount () {
    this.props.listAllCategories()
  }

  render () {
    return (
      <div>
        <FormGroup controlId='formControlsSelect'>
          <FormControl componentClass='select' placeholder='select'>
            <option value='select'>select</option>
            {this.props.categorias &&
              this.props.categorias.map(categoria => {
                return (
                  <option
                    value={categoria.name}
                    key={categoria.name}
                    onChage={this.props.selectCategory(categoria.name)}
                  >
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
  // atraves dessa função mapeamos o state para props que o componentes pode acessar
  // os states são criados pelos reducers
  return {
    categorias: state.categories.allCategories
  }
}

export default connect(mapStateToProps, { listAllCategories, selectCategory })(
  CategoryList
)
