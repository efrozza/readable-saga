import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/category_actions'
import { Link } from 'react-router-dom'

class Categories extends Component {
  componentDidMount () {
    this.props.listCategories()
  }

  render () {
    const { categories } = this.props

    return (
      <div>
        <div>
          {categories &&
            categories.map(categoria => {
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

const mapStateToProps = ({ categories }) => ({ categories })

const mapDispatchToProps = dispatch => ({
  listCategories: data => dispatch(getCategories(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
