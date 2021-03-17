import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tags from '../Tags/Tags'
import styles from './Post.module.scss'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

const Post = ({ title, author, slug, date, body, image, tags }) => {
  return (
    <Card color="dark" inverse>
      <Link to={`/${slug}`}>
        <GatsbyImage image={image} alt={title} />
      </Link>
      <CardBody>
        <CardTitle tag="h5">
          <Link
            to={`/${slug}`}
            className={styles.cardTitle}
            style={{ padding: 0 }}
          >
            {title}
          </Link>
        </CardTitle>
        <CardText>{body}</CardText>
        <CardSubtitle
          tag="h6"
          className={styles.author}
          style={{ position: 'relative' }}
        >
          Autor: {author}
          <Link
            to={`/${slug}`}
            style={{ position: 'absolute', right: 0, top: 0 }}
          >
            <Button color="warning">Leer más</Button>
          </Link>
        </CardSubtitle>
        <CardText className="mb-2">
          <small className={styles.date}>{date}</small>
        </CardText>

        <Tags tags={tags} />
      </CardBody>
    </Card>
  )
}

export default Post
