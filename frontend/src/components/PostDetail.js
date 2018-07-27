import React, { Component } from 'react'
import { Grid, Glyphicon, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PostCommentsList from './PostCommentsList'
import PostScore from './PostScore'

export default class PostDetail extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Panel bsStyle='primary'>
            <Panel.Heading>
              <Panel.Title componentClass='h3'>
                DD/MM/AAAA - Titulo do Post - <PostScore />
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.{' '}
              </p>

              <p>
                Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
                Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
                iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
                ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
                volutpat condimentum velit.{' '}
              </p>

              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
                non tincidunt mattis, tortor neque adipiscing diam, a cursus
                ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
                Suspendisse potenti. Nunc feugiat mi a tellus consequat
                imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
                Suspendisse in justo eu magna luctus suscipit.{' '}
              </p>

              <p>
                Sed lectus. Integer euismod lacus luctus magna. Quisque cursus,
                metus vitae pharetra auctor, sem massa mattis sem, at interdum
                magna augue eget diam. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
                molestie dui. Praesent blandit dolor. Sed non quam. In vel mi
                sit amet augue congue elementum. Morbi in ipsum sit amet pede
                facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
                egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
                ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui
                quis est pulvinar ullamcorper.{' '}
              </p>

              <p>
                Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus.
                Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque
                nisl felis, venenatis tristique, dignissim in, ultrices sit
                amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean
                laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac,
                ultricies eu, pede.{' '}
              </p>
            </Panel.Body>
            <Panel.Body>
              <strong>Autor:</strong>Everton frozza
            </Panel.Body>
          </Panel>
          <p>
            <ButtonToolbar>
              <Button bsSize='small'>
                <Link to='/PostDetail'>Edit</Link>
              </Button>
              <Button bsSize='small'>
                <Link to='/PostDetail'>Delete</Link>
              </Button>
              <Button bsSize='small'>
                <Glyphicon glyph='star' /> Like
              </Button>
            </ButtonToolbar>
          </p>
          <PostCommentsList />
        </Grid>
      </div>
    )
  }
}
