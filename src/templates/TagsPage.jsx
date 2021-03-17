import React from 'react'
import SEO from '../components/Seo'
import Layout from '../layouts/layout'
import { slugify } from '../utils/slugify'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

const TagsPage = ({ pageContext }) => {
  const { tags, tagsPostCounts } = pageContext
  return (
    <Layout>
      <SEO
        title="Tags"
        keywords="tags, programación, frontend, tecnología"
        description="Esta página muestra todos los tags disponibles."
      />
      <ListGroup className="align-items-center">
        {tags.map((tag) => (
          <ListGroupItem
            action
            tag="a"
            key={tag}
            className="text-center"
            href={`/tag/${slugify(tag)}`}
            style={{ textTransform: 'capitalize', maxWidth: 500 }}
          >
            {tag + ': '}
            <Badge pill>{tagsPostCounts[tag]}</Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Layout>
  )
}

export default TagsPage
