import * as ReadAPI from '../utils/api-utils'
export const GET_COMMENTS = 'GET_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

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

export function deleteComment (id, idPost) {
  console.log('entrou na action deleteComment' + id)
  return dispatch =>
    ReadAPI.deleteComment(id)
      .then(comment => dispatch(getComments(idPost)))
      .catch('Erro no acesso a API DELETE COMMENT')
}

export function voteComment (id, vote) {
  console.log('entrou na action voteComment' + id + vote)
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
