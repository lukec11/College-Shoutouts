import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import SubmitForm from '../containers/SubmitForm'
import SignOut from '../containers/SignOut'

const SubmitProject = () => (
  <Layout>
    <h1>All Encouragement</h1>
    <p>Feel free to browse through these! If you want to submit something, go <Link to="/submit">here</Link>.</p>
    <SubmitForm />
  </Layout>
)

export default SubmitProject
