import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { v4 } from 'uuid'
import { Grid, Button } from 'react-bootstrap'

class PostForm extends Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <Grid>
        <div>
          <h1>ADD A POST</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>id</div>
          <Field component='input' name='id' />
          <div>timestamp</div>
          <Field component='input' name='timestamp' />
          <div>Title</div>
          <Field component='input' name='title' />
          <div>Author</div>
          <Field component='input' name='author' />
          <div>Category</div>
          <Field component='input' name='category' />
          <div>Body</div>
          <Field component='textarea' name='body' />
          <Field component='input' name='voteScore' />
          <Field component='input' name='deleted' />
          <Field component='input' name='commentCount' />

          <div>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </Grid>
    )
  }
}

// o redux form funciona parecido com o connect e ja faz o mapStateToProps e DispatchToProps

export default reduxForm({ form: 'postForm' })(PostForm)
