import * as ReadAPI from '../utils/api-utils'
export const GET_COMMENTS = 'GET_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export function addComment (comment) {
  console.log('entrou na action addComment' + comment)
  return dispatch =>
    ReadAPI.addComment(comment)
      .then(comment =>
        dispatch({
          type: ADD_COMMENT,
          comment: comment
        })
      )
      .catch('Erro no acesso a API ADD COMMENT')
}

export function deleteComment (id, idPost) {
  return dispatch =>
    ReadAPI.deleteComment(id)
      .then(comment => dispatch(getComments(idPost)))
      .catch('Erro no acesso a API DELETE COMMENT')
}

export function editComment (id, comment) {
  return dispatch =>
    ReadAPI.editComment(id, comment)
      .then(newComment =>
        dispatch({
          type: EDIT_COMMENT,
          comment: newComment
        })
      )
      .catch('Erro no acesso a API POSTS')
}

export function getComments (idPost) {
  return dispatch =>
    ReadAPI.getAllComments(idPost)
      .then(comment =>
        dispatch({
          type: GET_COMMENTS,
          comments: comment
        })
      )
      .catch('Erro no acesso a API COMMENTS')
}

export function voteComment (id, vote) {
  return dispatch =>
    ReadAPI.voteComment(id, vote)
      .then(comment =>
        dispatch({
          type: VOTE_COMMENT,
          comment: comment
        })
      )
      .catch('Erro no acesso a API COMMENT')
}
