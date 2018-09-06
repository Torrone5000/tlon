import React from "react";
import { Link } from 'gatsby'

const getImageUrl = function(post, size) {
  if (post.node.better_featured_image === null)
    return '';
  let newUrl = post.node.better_featured_image.source_url.replace(`${process.env.S3_URL}`, `${process.env.CDN_URL}crop/${size}/q90/s3-eu-central-1.amazonaws.com/tlon-test/` );
  console.log(newUrl);
  return newUrl;
}

const getImageSize = function(post_size) {
  let sizes = { 'full': '1000x700', 'two-thirds': '690x870', 'half-height': '330x420', 'half-width': '510x510' }
  if (!sizes[post_size]) return '1000x700';
  return sizes[post_size];
}

const PostLink = props => {
  if (!props.post)
    return null;
  let post = props.post;
  return (
    <Link
      title={post.node.title}
      to={post.node.slug}
      className={`post-card post-card--${props.post_size}`}
    >
    <span className="columns post-card__overlay">
      <span className="post-card__text column is-one-third ">
        <span className="post-card__category">{post.node.categories != null ? post.node.categories[0].name : ''}</span>
        <span className="post-card__title">{post.node.title}</span>
        <span dangerouslySetInnerHTML={{ __html: post.node.excerpt}}></span>
      </span>
    </span>

    <img src={getImageUrl(post, getImageSize(props.post_size))} className="post-card__image" alt={post.node.title} />
    </Link>
  )
}

const PostsIterator = props => {
  let postsChunk = props.posts;
  return (
    <div className="posts_iterator">
      <div className="columns is-desktop">
        <div className="column">
          <PostLink post={postsChunk[0]} post_size="full" />
        </div>
      </div>
      <div className="columns is-desktop">
        <div className="column is-two-thirds-desktop">
          <PostLink post={postsChunk[1]} post_size="two-thirds" />
        </div>
        <div className="column vertical-posts">
          <PostLink post={postsChunk[2]} post_size="half-height" />
          <PostLink post={postsChunk[3]} post_size="half-height" />
        </div>
      </div>
      <div className="columns is-desktop">
        <div className="column">
          <PostLink post={postsChunk[4]} post_size="full" />
        </div>
      </div>
      <div className="columns is-desktop">
        <div className="column">
          <PostLink post={postsChunk[5]} post_size="half-width" />
        </div>
        <div className="column">
          <PostLink post={postsChunk[6]} post_size="half-width" />
        </div>
      </div>
    </div>
  )
}

export default PostsIterator
