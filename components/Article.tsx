import classNames from 'classnames'
import React from 'react'
import Heading, { HeadingType } from '../components/Heading'
import ImageBox from '../components/ImageBox'
import { Media } from '../interfaces'
import styles from './article.module.css'

export interface ArticleProps {
  heading: string | JSX.Element
  headingType: HeadingType
  className: string
  isInline: boolean
  image?: Media | undefined
  type?: string
  children: string | JSX.Element | undefined
}

class Article extends React.Component<ArticleProps> {
  getHeading = this.props.heading ? (
    <Heading type={this.props.headingType} className={''}>
      {<>{this.props.heading}</>}
    </Heading>
  ) : null

  getChildren = this.props.children ? <div className={styles.innerContent}>{this.props.children}</div> : null

  getContent =
    this.getHeading !== null || this.getChildren !== null ? (
      <div className={styles.content}>
        {this.getHeading}
        {this.getChildren}
      </div>
    ) : null

  render() {
    return (
      <article className={classNames(styles.article, styles[this.props.isInline ? 'inline' : ''])} role="article">
        <ImageBox
          src={this.props.image?.url || ''}
          alt={this.props.heading ? this.props.heading.toString() : ''}
          isBlock={!this.props.isInline}
          priority={true}
          width={this.props.image?.width}
          height={this.props.image?.height}
        />
        {this.getContent}
      </article>
    )
  }
}

export default Article
