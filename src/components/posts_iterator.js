import React from "react";
import { Link } from 'gatsby'

class PostsIterator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getImageUrl = (post, size) => {
    if (post.node.better_featured_image === null)
      return '';
    // "http://s3-eu-central-1.amazonaws.com/tlon-test/wp-content/uploads/2018/09/05212425/asd.png"
    return post.node.better_featured_image.source_url.replace('http://s3-eu-central-1.amazonaws.com/tlon-test/', 'https://az49qzzsn.cloudimg.io/crop/' + size + '/q90/s3-eu-central-1.amazonaws.com/tlon-test/' )
    // return 'https://az49qzzsn.cloudimg.io/crop/' + size + '/q90/s3-eu-central-1.amazonaws.com/tlon-test/wp-content/uploads' + post.node.better_featured_image.media_details.file;
  }

  computeImageSize = (post_size) => {
    let sizeString;
    switch (post_size) {
      case 'full':
        sizeString = '1000x700';
        break;
      case 'two-thirds':
        sizeString = '690x870';
        break;
      case 'half-height':
        sizeString = '330x420';
        break;
      case 'half-width':
        sizeString = '510x510';
        break;
      default:
        sizeString = '510x510';
    }
    return sizeString;
  }

  getPostBox = (post, post_size) => {
    if (!post)
      return;
    let className = 'post-card--' + post_size;
    let imageSize = this.computeImageSize(post_size);
    return (

      <Link
        key={post.node.slug}
        to={post.node.slug}
        className={"post-card " + className}
      >
      <span className="columns post-card__overlay">
        <span className="post-card__text column is-one-third ">
          <span className="post-card__category">{post.node.categories != null ? post.node.categories[0].name : ''}</span>
          <span className="post-card__title"  dangerouslySetInnerHTML={{ __html: post.node.title}}></span>
          <span dangerouslySetInnerHTML={{ __html: post.node.excerpt}}></span>
        </span>
      </span>

      <img src={this.getImageUrl(post, imageSize)} className="post-card__image" alt={post.node.title} />
      </Link>
    )
  }

  render = () => {
    return (
      <div id="posts_list">
        <div className="columns is-desktop">
          <div className="column">
            {this.getPostBox(this.props.posts[0], 'full')}
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-two-thirds-desktop">
            {this.getPostBox(this.props.posts[1], 'two-thirds')}
          </div>
          <div className="column vertical-posts">
            {this.getPostBox(this.props.posts[2], 'half-height')}
            {this.getPostBox(this.props.posts[3], 'half-height')}
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column">
            {this.getPostBox(this.props.posts[4], 'full')}
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column">
            {this.getPostBox(this.props.posts[5], 'half-width')}
          </div>
          <div className="column">
            {this.getPostBox(this.props.posts[6], 'half-width')}
          </div>
        </div>
      </div>
    )
  }
}

export default PostsIterator
