import React from "react";
import PostsIterator from './posts_iterator'

class PostsList extends React.Component {
  getPosts = (posts) => {
    return posts.edges.sort(function(a, b){
      if (a.node.acf === null || b.node.acf === null) {
        return b.date - a.date;
      }
      return b.node.acf.priority - a.node.acf.priority})
  }

  splitArrayIntoChunks(arr, chunkLen){
      var chunkList = []
      var chunkCount = Math.ceil(arr.length/chunkLen)
      for(var i = 0; i < chunkCount; i++){
          chunkList.push(arr.splice(0, chunkLen))
      }
      return chunkList
  }

  render() {
    let postsChunks = this.splitArrayIntoChunks(this.getPosts(this.props.posts), 7);
    console.log('posts_list.js', postsChunks.length);
    return (
      <div className="post-list">
        {postsChunks.map((chunk, i) =>
          <PostsIterator posts={chunk} key={i}/>
        )}
      </div>
    )
  }
}

export default PostsList
