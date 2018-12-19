import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import SubmitForm from '../containers/SubmitForm'
import SignOut from '../containers/SignOut'

const SubmitProject = () => (
  <Layout>
    <h1>Submit Project</h1>
    <p>Note: all entries are attached to your name/email &mdash; please be nice!</p>
    <hr />
    <SubmitForm />
  </Layout>
)

export default SubmitProject
