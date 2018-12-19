import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import IndividualProject from '../containers/IndividualProject'
import SignOut from '../containers/SignOut'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby Firebase Starter.</p>
    <p>Now go build something great with gatsby + firebase.</p>
    <IndividualProject id={ getUrlVars()['id'] } />
    <SignOut />
  </Layout>
)

export default IndexPage

const getUrlVars = () => {
  const vars = {}
  window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (m, key, value) => {
      vars[key] = decodeURI(value)
    }
  )
  return vars
}
