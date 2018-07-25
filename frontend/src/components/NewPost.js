import React, { Component } from 'react'
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
  )
}

export default class NewPost extends Component {
  render () {
    return (
      <div>
        <Grid>
          <FieldGroup
            id='formControlsText'
            type='text'
            label='SUBJECT'
            placeholder='Enter subject'
          />
          <FormGroup controlId='formControlsTextarea'>
            <ControlLabel>BODY POST</ControlLabel>
            <FormControl
              componentClass='textarea'
              placeholder='Type your post'
            />
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </Grid>
      </div>
    )
  }
}
