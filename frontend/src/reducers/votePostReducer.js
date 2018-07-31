import { VOTE_POST } from '../actions/post_actions'

export default function (state = {}, action) {
  const { id, voteScore } = action

  switch (action.type) {
    case VOTE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          allPosts: {
            ...state.posts.allPosts[0],
            voteScore: 10
          }
        }
      }
    default:
      return state
  }
}
