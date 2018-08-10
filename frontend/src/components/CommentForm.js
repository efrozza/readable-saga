import React, { Component } from 'react';
import { v4 } from 'uuid';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Alert,
} from 'react-bootstrap';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* caso o componente seja acessado para edição o state recebe os dados do comentario a ser editado, senão inicializa */
      author: props.comment ? props.comment.author : '',
      body: props.comment ? props.comment.body : '',
      formMsg: '',
      styleMsg: ' ',
    };
  }

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.author || !this.state.body) {
      this.setState(() => ({ styleMsg: 'danger' }));
      this.setState(() => ({ formMsg: 'Please enter all data!' }));
    } else {
      const comment = {
        id: this.props.comment ? this.props.comment.id : v4(),
        timestamp: this.props.comment
          ? this.props.comment.timestamp
          : Date.now(),
        author: this.state.author,
        body: this.state.body,
        parentId: this.props.parentId,
      };
      this.setState(() => ({ styleMsg: 'success' }));
      this.setState(() => ({ formMsg: 'Success!' }));
      this.props.onSubmit(comment);
      this.setState({ author: '' });
      this.setState({ body: '' });
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.formMsg &&
          <Alert bsStyle={this.state.styleMsg}>
            <strong>Form Submited:</strong> {this.state.formMsg}
          </Alert>}
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <ControlLabel>Author</ControlLabel>
            <FormControl
              autoFocus
              placeholder="author"
              name="author"
              value={this.state.author}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Comment</ControlLabel>
            <FormControl
              componentClass="textarea"
              name="body"
              placeholder="body"
              rows="3"
              value={this.state.body}
              onChange={this.onChange}
            />
          </FormGroup>
          <Button bsStyle="primary" type="submit">
            Save changes
          </Button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
