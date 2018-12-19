import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'
import EntryItem from '../components/EntryItem'

class AllProjects extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    const { firebase } = this.props
    firebase
      .database()
      .ref()
      .once('value')
      .then(snapshot => {
        let items = snapshot.val()
        let newState = []
        for (let item in items) {
          newState.push({
            key: item,
            name: items[item].name,
            details: items[item].details,
            display: items[item].display,
            date: items[item].date
          })
        }
        this.setState({
          items: newState
        })
      })
  }
  render() {

    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100vh",
        maxWidth: "100vw"
      }}>
        {this.state.items.reverse().map((item) => {
          return (
            <EntryItem key={item.key} id={item.key} name={item.name} details={item.details} display={item.display} date={item.date} />
          )
        })}
        </div>
    )
  }
}

export default withFirebase(AllProjects)
