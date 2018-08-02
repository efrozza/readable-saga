const api = 'http://localhost:3001'

// Generate a unique token
let token = localStorage.token
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => {
      return data
    })

export const getAllPostsCategory = category =>
  fetch(`${api}/${category}/posts`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => {
      return data
    })

export const votePost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json())
