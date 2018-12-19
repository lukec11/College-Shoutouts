import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { withFirebase } from '../components/FirebaseContext'
import EntryItem from '../components/EntryItem'
import { Button, AnchorButton, FormGroup, InputGroup, TextArea } from '@blueprintjs/core'

class SubmitForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      details: '',
      display: '',
      date: '',
      uid: '',
      user: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { firebase } = this.props
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      this.setState({ user: currentUser })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { firebase } = this.props
    const d = new Date()
    var datestring = (d.getMonth() + 1).toString() +
    "/" + (d.getDate() + 1).toString() +
    "/" + (d.getFullYear()).toString()

    const item = {
      name: this.state.name,
      details: this.state.details,
      display: this.state.user.displayName,
      date: datestring,
      uid: this.state.user.uid,
    }
    firebase
    .database()
    .ref()
    .push(item)
    navigate('/view')
  }

  render() {
    return (
      <form id="mainform" onSubmit={this.handleSubmit}>
        <FormGroup
          label="Name of person you want to shout out"
          labelFor="name"
          labelInfo="(required)"
        >
          <InputGroup type="text" name="name" id="name" placeholder="Megan Cui" onChange={this.handleChange} value={this.state.name} required />
        </FormGroup>
        <FormGroup
          label="What do you want to say?"
          labelFor="details"
          labelInfo="(required)"
          >
          <TextArea
            rows="4"
            style={{ width: "100%" }}
            name="details"
            onChange={this.handleChange}
            value={this.state.details}
            />
        </FormGroup>
        <Button type="submit" icon="floppy-disk" text="Submit" style={{ marginRight: 10 }}/>
        <Button type="button" icon="cross" text="Cancel" onClick={ () => navigate('/view')} />
      </form>
    )
  }
}


export default withFirebase(SubmitForm)
