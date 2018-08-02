import React, { Component } from 'react'
import CategoryList from './CategoryList'
import {
  FormGroup,
  Grid,
  ControlLabel,
  FormControl,
  Button,
  HelpBlock
} from 'react-bootstrap'

function FieldGroup ({ id, label, help, ...props }) {
  return (
    <div>
      <FormGroup controlId={id}>
        <ControlLabel>
          {label}
        </ControlLabel>
        <FormControl {...props} />
        {help &&
          <HelpBlock>
            {help}
          </HelpBlock>}
      </FormGroup>
    </div>
  )
}

export default class NewPost extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>ADD A POST</h1>
        </div>
        <FormGroup controlId='formControlsSelect'>
          <ControlLabel>CATEGORY</ControlLabel>
          <CategoryList estilo='combo' />
        </FormGroup>
        <FieldGroup
          id='formControlsText'
          type='text'
          label='AUTHOR'
          placeholder='Enter subject'
        />
        <FieldGroup
          id='formControlsText'
          type='text'
          label='SUBJECT'
          placeholder='Enter subject'
        />
        <FormGroup controlId='formControlsTextarea'>
          <ControlLabel>BODY POST</ControlLabel>
          <FormControl componentClass='textarea' placeholder='Type your post' />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </div>
    )
  }
}
