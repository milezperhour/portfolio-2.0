import PropTypes from "prop-types"
import React from "react"
// import Nav from './nav'
// import 'typeface-roboto'

const Header = ({ siteTitle }) => (
  <header>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
