import { VOTE_POST } from '../actions/post_actions'

const STATE_INICIAL = { voteScore: 0 }

export default function (state = STATE_INICIAL, action) {
  const { post } = action

  switch (action.type) {
    case VOTE_POST:
      return {
        ...state,
        [voteScore]: {
          ...state[post.id],
          [voteScore]: action.voteScore
        }
      }
    default:
      return state
  }
}
