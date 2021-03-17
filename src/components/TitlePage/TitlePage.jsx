import React from 'react'
import styles from './TitlePage.module.scss'

const TitlePage = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>
}

export default TitlePage
