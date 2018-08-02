import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/category_actions'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  componentDidMount () {
    this.props.listCategories()
  }

  render () {
    return (
      <div>
        {this.props.categories &&
          this.props.categories.map(categoria => {
            return (
              <div>
                <Link
                  key={categoria.name}
                  to={{
                    pathname: `/${categoria.name}`,
                    state: { category: categoria.name }
                  }}
                >
                  {categoria.name}
                </Link>
              </div>
            )
          })}
      </div>
    )
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
