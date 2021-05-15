import * as React from 'react'
import ListItem from './ListItem'
import { Article } from '../interfaces'
import styles from './utils.module.css'

type Props = {
  items: Article[]
}

const List = ({ items }: Props) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
