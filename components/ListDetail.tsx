import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from '../components/listDetail.module.css'
import { Content, Media } from '../interfaces'
import { getMediaItem, MediaAsset } from '../utils/mediaUtils'
import Article from './Article'
import { Gallery } from './Gallery'
import Markdown from './Markdown'
import Player from './Player'

export interface ListDetailProps {
  item: Content
  media: Array<Media>
}

interface State {
  backgroundColor: string
  boxShadow: string
}

class ListDetail extends React.Component<ListDetailProps, State> {
  item = this.props.item

  itemMedia = this.item.media?.at(0) as MediaAsset

  image: Media | undefined = getMediaItem(this.itemMedia)

  generateLink = (item: Content) => {
    const link = item.link ? item.link : undefined
    if (!link) {
      return null
    }

    if (link.match(/bandcamp.com\/EmbeddedPlayer/)) {
      return (
        <>
          <iframe className={styles.iframe} src={link} seamless></iframe>
        </>
      )
    }

    if (link.match(/soundcloud|youtube|facebook|dailymotion|vimeo|file|wistia|mixcloud|vidyard|twitch/)) {
      return <Player url={link} />
    }

    return (
      <Link href={link} className={styles.link} passHref>
        <Markdown>{link}</Markdown>
      </Link>
    )
  }

  backLink = (item: Content) => {
    const link = item.type.match(/news|music|production/) ? '/' + item.type : undefined
    if (!link) {
      return null
    }
    return (
      <nav>
        <Link href={link} className={styles.link} title="Navigate to previous page" passHref>
          <Markdown className="link">{`<< Back`}</Markdown>
        </Link>
      </nav>
    )
  }

  render() {
    return (
      <Article
        heading={this.item.title}
        headingType="title"
        image={this.image}
        className={classNames(styles.detail)}
        type={this.item.type}
      >
        <>
          <div className={styles.content}>
            <Markdown className="summary">{this.item.summary}</Markdown>
            <Markdown className="article">{this.item.story}</Markdown>
            <Gallery items={this.item?.media?.length ?? 0 > 1 ? this.item.media : []} />
            {this.generateLink(this.item)}
          </div>
          {this.backLink(this.item)}
        </>
      </Article>
    )
  }
}

export default ListDetail
