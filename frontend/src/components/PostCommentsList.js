import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal } from 'react-bootstrap';
import { voteComment, deleteComment } from '../actions/comment_actions';
import CommentEdit from './CommentEdit';

class PostCommentsList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedComment: '',
    };
  }

  handleOpenModal = comment => {
    this.setState(() => ({
      selectedComment: comment,
      showModal: true,
    }));
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <h3>Comments</h3>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Author</th>
              <th>Comment</th>
              <th>Vote Score</th>
              <th>Manage</th>
              <th>Vote</th>
            </tr>
          </thead>
          {this.props.comments.map(comment => {
            return (
              <tbody key={comment.id}>
                <tr>
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
                      bsSize="xsmall"
                      onClick={e => this.handleOpenModal(comment)}
                    >
                      Edit
                    </Button>{' '}
                    <Button
                      bsSize="xsmall"
                      onClick={e => {
                        this.props.deleteComment(comment.id, comment.parentId);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      bsSize="xsmall"
                      onClick={e => {
                        this.props.voteComment(comment.id, e.target.value);
                      }}
                      value="upVote"
                    >
                      upVote
                    </Button>{' '}
                    <Button
                      bsSize="xsmall"
                      onClick={e => {
                        this.props.voteComment(comment.id, e.target.value);
                      }}
                      value="downVote"
                    >
                      downVote
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
        <div>
          {
            //documentação de referencia https://react-bootstrap.github.io/components/modal/#popover
          }
          <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CommentEdit comment={this.state.selectedComment} />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    voteComment: (id, vote) => dispatch(voteComment(id, vote)),
    deleteComment: (id, parentId) => dispatch(deleteComment(id, parentId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentsList);
