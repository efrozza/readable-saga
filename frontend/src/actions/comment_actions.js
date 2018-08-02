import * as ReadAPI from '../utils/api-utils'
export const GET_COMMENTS = 'GET_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'

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
