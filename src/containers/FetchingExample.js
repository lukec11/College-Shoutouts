import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'

class FetchingExample extends Component {
  state = {
    test: [],
  }
  componentDidMount() {
    const { firebase } = this.props
    firebase
      .database()
      .ref()
      .once('value')
      .then(snapshot => {
        this.setState({
          test: snapshot.val(),
        })
      })
  }
  render() {
    const { test } = this.state

    if (!test) {
      return null
    }

    // console.log(test)

    return (
      <div>
        <h4>string test data :</h4>
      </div>
    )
  }
}

export default withFirebase(FetchingExample)
