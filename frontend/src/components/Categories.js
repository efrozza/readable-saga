import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/category_actions'
import { Link } from 'react-router-dom'

class Categories extends Component {
  componentDidMount () {
    this.props.listCategories()
  }

  render () {
    return (
      <div>
        <div>
          {this.props.categories &&
            this.props.categories.map(categoria => {
              return (
                <Link to={`/${categoria.name}`} key={categoria.name}>
                  {' '}{categoria.name}
                  {' | '}
                </Link>
              )
            })}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
