import { GET_COMMENTS, VOTE_COMMENT } from '../actions/comment_actions'

const STATE_INICIAL = []

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments

    case VOTE_COMMENT:
      return state.map(comment => {
        if (comment.id == action.comment.id) {
          return action.comment
        }
        return comment
      })
    default:
      return state
  }
}
