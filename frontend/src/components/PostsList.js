import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import { Grid, Label, Button } from 'react-bootstrap'
import { votePost, deletePost } from '../actions/post_actions'
import Categories from './Categories'
import '../css/react-table.css'
import 'react-table/react-table.css'

class PostsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // estados da lista react-table
      sorted: [],
      page: 0,
      pageSize: 5,
      expanded: {},
      resized: [],
      filtered: []
    }
  }

  render () {
    return (
      <Grid>
        <h3>Select category</h3>
        <Categories />
        <h3>
          All posts: <Label bsStyle='info'>{this.props.category}</Label>
        </h3>

        <ReactTable
          data={this.props.posts}
          noDataText='There are no posts!'
          columns={[
            {
              columns: [
                {
                  Header: 'Id',
                  id: 'id',
                  accessor: d => d.id,
                  show: false
                },
                {
                  Header: 'Title',
                  id: 'title',
                  accessor: d => d.title,
                  width: 250
                },
                {
                  Header: 'Author',
                  id: 'author',
                  accessor: d => d.author
                },
                {
                  Header: 'Comments',
                  id: 'commentCount',
                  accessor: d => d.commentCount,
                  filterable: false,
                  width: 80
                },
                {
                  Header: 'voteScore',
                  id: 'voteScore',
                  accessor: d => d.voteScore,
                  filterable: false,
                  width: 80
                },
                {
                  Header: 'Manage',
                  id: 'manage',
                  filterable: false,
                  Cell: ({ row }) =>
                    <div>
                      <Button bsSize='xsmall'>
                        <Link
                          to={{
                            pathname: `/edit/${row.category}/${row.id}`
                          }}
                        >
                          Edit
                        </Link>
                      </Button>{' '}
                      <Button
                        bsSize='xsmall'
                        onClick={e => {
                          this.props.deletePost(row.id)
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                },
                {
                  Header: 'Vote',
                  id: 'vote',
                  filterable: false,
                  Cell: ({ row }) =>
                    <div>
                      <Button
                        bsSize='xsmall'
                        onClick={e => {
                          this.props.votePost(row.id, e.target.value)
                        }}
                        value='upVote'
                      >
                        upVote
                      </Button>{' '}
                      <Button
                        bsSize='xsmall'
                        onClick={e => {
                          this.props.votePost(row.id, e.target.value)
                        }}
                        value='downVote'
                      >
                        downVote
                      </Button>
                    </div>
                },
                {
                  Header: 'Select',
                  id: 'links',
                  filterable: false,
                  Cell: ({ row }) =>
                    <div>
                      <Button bsSize='xsmall'>
                        <Link
                          to={{
                            pathname: `/${row.category}/${row.id}`
                          }}
                        >
                          Read
                        </Link>
                      </Button>
                    </div>
                },
                {
                  Header: 'Category',
                  id: 'category',
                  accessor: d => d.category
                }
              ]
            }
          ]}
          defaultSorted={[{ id: 'author', desc: true }]}
          filterable
          defaultPageSize={5}
          className='-striped -highlight'
          // Alteram o state
          sorted={this.state.sorted}
          page={this.state.page}
          pageSize={this.state.pageSize}
          expanded={this.state.expanded}
          resized={this.state.resized}
          filtered={this.state.filtered}
          // Eventos chamados para cada alteração na tabela
          onSortedChange={sorted => this.setState({ sorted })}
          onPageChange={page => this.setState({ page })}
          onPageSizeChange={(pageSize, page) =>
            this.setState({ page, pageSize })}
          onExpandedChange={expanded => this.setState({ expanded })}
          onResizedChange={resized => this.setState({ resized })}
          onFilteredChange={filtered => this.setState({ filtered })}
        />
      </Grid>
    )
  }
}

function mapStateToProps (state, props) {
  if (props && props.match) {
    return {
      posts: state.posts.filter(
        p => p.category === props.match.params.category
      ),
      category: props.match.params.category
    }
  } else {
    return { posts: state.posts }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    votePost: (data, vote) => dispatch(votePost(data, vote)),
    deletePost: id => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
