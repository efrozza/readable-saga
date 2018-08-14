import * as ReadAPI from '../utils/api-utils'
export const GET_COMMENTS = 'GET_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

const actionAddComment = comment => ({
  type: ADD_COMMENT,
  comment: comment
})

export function addComment (comment) {
  return dispatch =>
    ReadAPI.addComment(comment)
      .then(comment => dispatch(actionAddComment(comment)))
      .catch('Erro no acesso a API ADD COMMENT')
}

export function deleteComment (id, idPost) {
  return dispatch =>
    ReadAPI.deleteComment(id)
      .then(comment => dispatch(getComments(idPost)))
      .catch('Erro no acesso a API DELETE COMMENT')
}

const actionEditComment = newComment => ({
  type: EDIT_COMMENT,
  comment: newComment
})

export const editComment = (id, comment) => {
  return dispatch =>
    ReadAPI.editComment(id, comment)
      .then(newComment => dispatch(actionEditComment(newComment)))
      .catch('Erro no acesso a API POSTS')
}

const actionGetComment = comment => ({
  type: GET_COMMENTS,
  comments: comment
})

export const getComments = idPost => {
  return dispatch =>
    ReadAPI.getAllComments(idPost)
      .then(comment => dispatch(actionGetComment(comment)))
      .catch('Erro no acesso a API COMMENTS')
}

const actionVoteComment = comment => ({
  type: VOTE_COMMENT,
  comment: comment
})

export const voteComment = (id, vote) => {
  return dispatch =>
    ReadAPI.voteComment(id, vote)
      .then(comment => dispatch(actionVoteComment(comment)))
      .catch('Erro no acesso a API COMMENT')
}
