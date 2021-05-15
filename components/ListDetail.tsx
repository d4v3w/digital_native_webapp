import * as React from 'react'

import { Article } from '../interfaces'

type ListDetailProps = {
  item: Article
}

const ListDetail = ({ item: item }: ListDetailProps) => (
  <div>
    <h1>Detail for {item.title}</h1>
    <p>ID: {item.id}</p>
  </div>
)

export default ListDetail
