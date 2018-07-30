import * as ReadAPI from '../utils/api-utils'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
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
  return {
    type: SELECTED_CATEGORY,
    selectedCategory: category
  }
}
