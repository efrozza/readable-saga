import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { v4 } from 'uuid';
import { Grid, Button } from 'react-bootstrap';

class PostForm extends Component {
  state = {
    post: {
      id: ' ',
      timestamp: 0,
      title: ' ',
      author: ' ',
      category: ' ',
      body: ' ',
    },
  };

  render() {
    return (
      <Grid>
        <div>
          <h1>ADD A POST</h1>
        </div>
        <form onSubmit={this.props.action(this.state.post)}>
          <div>Title</div>
          <Field component="input" name="title" />
          <div>Author</div>
          <Field component="input" name="author" />
          <div>Category</div>
          <Field component="input" name="category" />
          <div>Body</div>
          <Field component="textarea" name="body" />
          <div>
            <Button type="submit">Submit</Button>{' '}
            <Button disabled={pristine || submitting} onClick={reset}>
              Reset
            </Button>
          </div>
        </form>
      </Grid>
    );
  }
}

// o redux form funciona parecido com o connect e ja faz o mapStateToProps e DispatchToProps

export default PostForm;
