import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { getUiConfig } from '../firebase'
import { withFirebase } from '../components/FirebaseContext'
import Header from '../components/header'
import Layout from '../components/layout'

const SignIn = ({ firebase }) => (
  <Layout>
    <h1>Please Sign In</h1>
    <p>In order to submit encouragement, please sign in with your Gmail account.</p>
    <StyledFirebaseAuth
      uiConfig={getUiConfig(firebase)}
      firebaseAuth={firebase.auth()}
    />

  </Layout>
)

export default withFirebase(SignIn)
