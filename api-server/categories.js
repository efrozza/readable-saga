const categories = [
  {
    name: 'react',
    path: 'react'
  },
  {
    name: 'redux',
    path: 'redux'
  },
  {
    name: 'udacity',
    path: 'udacity'
  }
]

function getData () {
  return categories
}

function getAll () {
  return new Promise(res => res(getData()))
}

module.exports = {
  getAll
}
