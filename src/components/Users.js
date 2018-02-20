import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.users.map(u=> <li key={u.userName}>{u.userName}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, primaryUser: state.users[0] }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
