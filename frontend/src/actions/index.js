import * as ReadAPI from '../utils/api-utils'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

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
