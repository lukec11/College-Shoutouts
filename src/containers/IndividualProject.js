import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'
import { Button } from '@blueprintjs/core'
import { navigate } from 'gatsby'

class IndividualProject extends Component {
  state = {
    item: {}
  }
  componentDidMount() {
    const { firebase } = this.props
    const itemId = this.props.id
    firebase
      .database()
      .ref(itemId)
      .once('value')
      .then(snapshot => {
        this.setState({
          item: snapshot.val(),
        })
      })
  }
  render() {
    const { item } = this.state

    if (!item) {
      return null
    }

    // console.log(test)

    return (
      <div>
        <h1>{item.name}</h1>
        <p>{item.details}</p>
        <h4>{item.display} &mdash; {item.date}</h4>
        <Button large="true" icon="step-backward" text="View All" onClick={ () => navigate('/view')} />
      </div>
    )
  }
}

export default withFirebase(IndividualProject)
