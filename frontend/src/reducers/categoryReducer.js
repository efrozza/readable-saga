const STATE_INICIAL = []

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES_OK':
      return action.categories
    default:
      return state
  }
}
