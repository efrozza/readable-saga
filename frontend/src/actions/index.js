import * as ReadAPI from '../utils/api-utils'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_CATEGORY = 'GET_POSTS_CATEGORY'
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY'

export function listAllCategories () {
  return dispatch =>
    ReadAPI.getAllCategories()
      .then(categories =>
        dispatch({
          type: GET_ALL_CATEGORIES,
          categories: categories
        })
      )
      .catch('Erro no acesso a APIs')
}

export function selectCategory (category) {
  console.log('acessou selectCategory' + category)
  return {
    type: SELECTED_CATEGORY,
    selectedCategory: category
  }
}

export function listAllPosts () {
  return dispatch =>
    ReadAPI.getAllPosts()
      .then(post =>
        dispatch({
          type: GET_ALL_POSTS,
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
