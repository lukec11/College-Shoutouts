import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'
import { Navbar, Button } from '@blueprintjs/core'

class Signout extends Component {
  signOut = () => {
    this.props.firebase.auth().signOut()
  }
  render() {
    if (this.props.firebase.auth().currentUser) {
      return (
        <>
          <Navbar.Divider />
          <Button
            className="bp3-minimal"
            icon="log-out"
            text="Sign Out"
            onClick={this.signOut}
          />
        </>
      )
    } else return null
  }
}

export default withFirebase(Signout)
