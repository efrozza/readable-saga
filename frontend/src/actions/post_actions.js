import * as ReadAPI from '../utils/api-utils'
export const GET_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_CATEGORY = 'GET_POSTS_CATEGORY'
export const VOTE_POST = 'VOTE_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export function addPost (post) {
  console.log('entrou na action addPost' + post.id + post.title + typeof post)
  return dispatch =>
    ReadAPI.addPost(post)
      .then(newpost =>
        dispatch({
          type: ADD_POST,
          post: newpost
        })
      )
      .catch('Erro no acesso a API POSTS')
}

export function editPost (id, post) {
  console.log('entrou na action editPost' + post.id + post.title + typeof post)
  return dispatch =>
    ReadAPI.editPost(id, post)
      .then(newpost =>
        dispatch({
          type: EDIT_POST,
          post: newpost
        })
      )
      .catch('Erro no acesso a API POSTS')
}

export function deletePost (id) {
  console.log('entrou na action deletePost' + id)
  return dispatch =>
    ReadAPI.deletePost(id)
      .then(post => dispatch(getPosts()))
      .catch('Erro no acesso a API DELETE POST')
}

export function getPosts () {
  return dispatch =>
    ReadAPI.getAllPosts()
      .then(post =>
        dispatch({
          type: GET_POSTS,
          posts: post
        })
      )
      .catch('Erro no acesso a API POSTS')
}

export function listPostsCategory (category) {
  return dispatch =>
    ReadAPI.getAllPostsCategory(category)
      .then(post =>
        dispatch({
          type: GET_POSTS_CATEGORY,
          posts: post
        })
      )
      .catch('Erro no acesso a API POSTS')
}

export function votePost (id, vote) {
  console.log('entrou na action votePost' + id + vote)
  return dispatch =>
    ReadAPI.votePost(id, vote)
      .then(post =>
        dispatch({
          type: VOTE_POST,
          post: post
        })
      )
      .catch('Erro no acesso a API POSTS')
}
