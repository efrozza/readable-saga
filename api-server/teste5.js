const categories = {
  
  [
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
}

resultado = categories.teste.map(e => {
  console.log(e.name)
})
