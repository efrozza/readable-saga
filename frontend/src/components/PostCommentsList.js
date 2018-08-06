import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { voteComment, deleteComment } from '../actions/comment_actions'

class PostCommentsList extends Component {
  render () {
    return (
      <div>
        <p>
          <h3>comentários</h3>
        </p>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>timestamp</th>
              <th>author</th>
              <th>body</th>
              <th>voteScore</th>
              <th>Vote</th>
              <th>Manage</th>
            </tr>
          </thead>
          {this.props.comments.map(comment => {
            return (
              <tbody key={comment.title}>
                <tr>
                  <td>
                    {comment.timestamp}
                  </td>
                  <td>
                    {comment.author}
                  </td>
                  <td>
                    {comment.body}
                  </td>
                  <td>
                    {comment.voteScore}
                  </td>
                  <td>
                    <Button
                      bsSize='xsmall'
                      onClick={e => {
                        this.props.voteComment(comment.id, e.target.value)
                      }}
                      value='upVote'
                    >
                      upVote
                    </Button>{' '}
                    <Button
                      bsSize='xsmall'
                      onClick={e => {
                        this.props.voteComment(comment.id, e.target.value)
                      }}
                      value='downVote'
                    >
                      downVote
                    </Button>
                  </td>
                  <td>
                    <Button bsSize='xsmall'>Edit</Button>{' '}
                    <Button
                      bsSize='xsmall'
                      onClick={e => {
                        this.props.deleteComment(comment.id, comment.parentId)
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </Table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    voteComment: (id, vote) => dispatch(voteComment(id, vote)),
    deleteComment: (id, parentId) => dispatch(deleteComment(id, parentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentsList)
