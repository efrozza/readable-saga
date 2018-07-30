import { SELECTED_CATEGORY } from '../actions/index'

const STATE_INICIAL = { selectedCategory: '' }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case SELECTED_CATEGORY:
      console.log('entrou selectedCategoryReducer')
      return { ...state, selectedCategory: action.selectedCategory }
    default:
      console.log('entrou selectedCategoryReducer default')
      return state
  }
}
