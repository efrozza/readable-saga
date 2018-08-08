import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { voteComment, deleteComment } from '../actions/comment_actions';
import CommentEdit from './CommentEdit';

import ReactModal from 'react-modal';

class PostCommentsList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedComment: '',
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
              <th>Vote</th>
              <th>Manage</th>
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
                </tr>
              </tbody>
            );
          })}
        </Table>
        <div>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            ariaHideApp={false}
          >
            <CommentEdit comment={this.state.selectedComment} />
            <p>
              <Button onClick={this.handleCloseModal}>Fechar</Button>
            </p>
          </ReactModal>
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
