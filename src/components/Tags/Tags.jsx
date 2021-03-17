import React from 'react'
import { Link } from 'gatsby'
import { slugify } from '../../utils/slugify'
import { Badge } from 'reactstrap'

const Tags = ({ tags }) => {
  return (
    <div className="d-flex flex-wrap">
      {tags.map((tag, index) => (
        <Link key={index} to={`/tag/${slugify(tag)}`}>
          <Badge
            color="warning"
            pill
            style={{
              marginRight: 8,
              minWidth: '4rem',
              padding: '5px 15px',
              marginTop: '5px',
              textTransform: 'capitalize',
            }}
          >
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  )
}

export default Tags
