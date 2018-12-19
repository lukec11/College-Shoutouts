import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import AllProjects from '../containers/AllProjects'
import SignOut from '../containers/SignOut'

const IndexPage = () => (
  <Layout>
    <h1>College Shoutouts</h1>
    <p>It's college decision season &mdash; one of the most stressful periods of time. I am incredibly grateful for my friends who have supported me. So, I decided to make this as a gift for anyone worried about the future!</p>
    <p>The rules are simple: click on the link below to leave the gift of encouragement (either for a person or in general). If you need to hear these words, just read through and browse what people are saying.</p>
    <Link to="/submit/">Submit Encouragement!</Link><br />
    <Link to="/view/">View Encouragement!</Link><br /><br />
    <h3>Hack Club Challenge</h3>
    <p>Hi hackers! Originally, I was going to individually shout out my friend. However, I wanted to open it up for everyone to submit encouragement. My personal submissions for the challenge are linked <Link to="/individual?id=-LU1XzLVBZP3ounIpVCE">here</Link> and <Link to="/individual?id=-LU3KzYVv7BbLBbavbDi">here</Link>.</p>
    <p>You can also like this at the <a href="https://hackclub.com/challenge/">Hack Club Challenge</a>.</p>
  </Layout>
)

export default IndexPage
