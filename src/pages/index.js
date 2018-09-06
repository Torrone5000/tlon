import React from 'react'

import Layout from '../components/layout'
import PostsList from '../components/posts_list'
import PostsFilter from '../components/posts_filter'
const IndexPage = (data) => {
  console.log('Index.js', data.length)
  return (
    <Layout>
      <PostsFilter />
      <PostsList posts={data.data.allWordpressPost} />
    </Layout>
  )
}

export const query = graphql`
  query homeQuery {
    allWordpressPost(limit:24) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
          modified
          better_featured_image {
             source_url
          }
          acf {
            priority
          }
          categories {
             id
             slug
             name
          }
        }
      }
    }
  }
`;

export default IndexPage
