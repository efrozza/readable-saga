import * as ReadAPI from '../utils/api-utils'
export const GET_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_CATEGORY = 'GET_POSTS_CATEGORY'
export const VOTE_POST = 'VOTE_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const GET_POST_DETAIL = 'GET_POST_DETAIL'
export const DELETE_POST = 'DELETE_POST'

const actionAddPost = newpost => ({
  type: ADD_POST,
  post: newpost
})
export const addPost = post => {
  return dispatch =>
    ReadAPI.addPost(post)
      .then(newpost => dispatch(actionAddPost(newpost)))
      .catch('Erro no acesso a API POSTS')
}

const actionEditPost = newpost => ({
  type: EDIT_POST,
  post: newpost
})

export const editPost = (id, post) => {
  return dispatch =>
    ReadAPI.editPost(id, post)
      .then(newpost => dispatch(actionEditPost(newpost)))
      .catch('Erro no acesso a API EDIT POSTS')
}

export const deletePost = id => {
  return dispatch =>
    ReadAPI.deletePost(id)
      .then(post => dispatch(getPosts()))
      .catch('Erro no acesso a API DELETE POST')
}

const actionGetPostDetail = post => ({
  type: GET_POST_DETAIL,
  post: post
})

export const getPostDetail = id => {
  return dispatch =>
    ReadAPI.getPostDetail(id)
      .then(post => dispatch(actionGetPostDetail(post)))
      .catch('Erro no acesso a API POSTS')
}

const actionGetPosts = post => ({
  type: GET_POSTS,
  posts: post
})

export const getPosts = () => {
  return dispatch =>
    ReadAPI.getAllPosts()
      .then(post => dispatch(actionGetPosts(post)))
      .catch('Erro no acesso a API POSTS')
}

const actionListPostsCategory = post => ({
  type: GET_POSTS_CATEGORY,
  posts: post
})

export const listPostsCategory = category => {
  return dispatch =>
    ReadAPI.getAllPostsCategory(category)
      .then(post => dispatch(actionListPostsCategory(post)))
      .catch('Erro no acesso a API POSTS')
}

const actionVotePost = post => ({
  type: VOTE_POST,
  post: post
})

export const votePost = (id, vote) => {
  return dispatch =>
    ReadAPI.votePost(id, vote)
      .then(post => dispatch(actionVotePost(post)))
      .catch('Erro no acesso a API POSTS')
}
