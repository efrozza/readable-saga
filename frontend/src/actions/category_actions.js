export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY'

export function getCategories () {
  console.log('entrou no getCategories')
  return {
    type: GET_ALL_CATEGORIES,
    categories: []
  }
}

export function selectCategory (category) {
  return {
    type: SELECTED_CATEGORY,
    selectedCategory: category
  }
}
