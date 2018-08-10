import React from 'react'
import { Badge } from 'react-bootstrap'

const PostScore = ({ voteScore }) => {
  return (
    <Badge>
      votes: {voteScore}
    </Badge>
  )
}

export default PostScore
