import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, AnchorButton, Alignment } from '@blueprintjs/core'
import SignOut from '../containers/SignOut'

const Header = ({ siteTitle }) => (
  <Navbar className="bp3-dark" style={{
      color: "#FFF",
      backgroundColor: "#BF211E",
  }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
      >
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading><b>{siteTitle}</b></Navbar.Heading>
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <AnchorButton className="bp3-minimal" icon="home" text="Home" onClick={ () => navigate('/')} />
      <Navbar.Divider />
      <AnchorButton className="bp3-minimal" icon="manually-entered-data" text="Submit" onClick={ () => navigate('/submit')} />
      <Navbar.Divider />
      <AnchorButton className="bp3-minimal" icon="eye-open" text="View" onClick={ () => navigate('/view')} />
      <SignOut />
    </Navbar.Group>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
