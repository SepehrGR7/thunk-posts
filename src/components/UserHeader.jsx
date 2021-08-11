import { connect } from 'react-redux'

function UserHeader({ user }) {
  return <h4>{user && `${user.username} (${user.name})`}</h4>
}

const mapStateToProps = (state, { userId }) => ({
  user: state.users.find(user => user.id === userId)
})

export default connect(mapStateToProps)(UserHeader)
