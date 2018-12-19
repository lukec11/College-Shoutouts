import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import AllProjects from '../containers/AllProjects'
import SignOut from '../containers/SignOut'

const IndexPage = () => (
  <Layout>
    <h1>All Encouragement</h1>
    <p>Feel free to browse through these! If you want to submit something, go <Link to="/submit">here</Link>.</p>
    <AllProjects />
  </Layout>
)

export default IndexPage
