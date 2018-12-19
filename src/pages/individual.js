import React from 'react'
import { Link, navigate } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import IndividualProject from '../containers/IndividualProject'
import SignOut from '../containers/SignOut'
import { Button } from '@blueprintjs/core'

const IndexPage = () => (
  <Layout>
    <Button large="true" icon="step-backward" text="View All" onClick={ () => navigate('/view')} />
    <IndividualProject id={ getUrlVars()['id'] } />
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
