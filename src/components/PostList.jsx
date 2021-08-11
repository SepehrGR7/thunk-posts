import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

function PostList({ posts, fetchPostsAndUsers }) {
  useEffect(() => {
    fetchPostsAndUsers()
    // eslint-disable-next-line
  }, [])

  const renderedPosts = posts.map(post => {
    return (
      <div key={post.id}>
        <h2>
          {post.id}. {post.title}
        </h2>
        <p>{post.body}</p>
        <UserHeader userId={post.userId} />
        <hr />
      </div>
    )
  })

  return (
    <div>
      <h1>Post List</h1>
      {renderedPosts}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  fetchPostsAndUsers
})(PostList)
