import React from "react";
import PostsIterator from './posts_iterator'

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts.edges.sort(function(a, b){
        if (a.node.acf === null || b.node.acf === null) {
          return b.date - a.date;
        }
        return b.node.acf.priority - a.node.acf.priority}),
    }
  }

  splitArrayIntoChunks(arr, chunkLen){
      var chunkList = []
      var chunkCount = Math.ceil(arr.length/chunkLen)
      for(var i = 0; i < chunkCount; i++){
          chunkList.push(arr.splice(0, chunkLen))
      }
      return chunkList
  }

  render = () => {
    let postsChunks = this.splitArrayIntoChunks(this.state.posts, 7);
    return (
      <div id="posts_list">
        {postsChunks.map((chunk, i) =>
          <PostsIterator posts={chunk} key={i}/>
        )}
      </div>
    )
  }
}

export default PostsList
