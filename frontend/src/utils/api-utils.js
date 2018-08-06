const api = 'http://localhost:3001'

// Generate a unique token
let token = localStorage.token
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Accept: 'application/json, application/xml, text/plain, text/html, *.*',
  Authorization: token
}

export const addPost = post => {
  console.log('entrou na api utils ' + post.id, post.title)
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ post: post })
  }).then(res => res.json())
}

export const deletePost = id => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

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

export const getAllComments = idPost =>
  fetch(`${api}/posts/${idPost}/comments`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => {
      console.log('retorno api comments ' + data + idPost)
      return data
    })

export const deleteComment = id => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export const voteComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json())

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
