import React from 'react'
import { connect } from 'react-redux'

const Logo = function(props) {
  return (
    <div className="tc">
      <img alt="jrs-logo" src={props.logo} />
    </div>
  )
}

const connector = connect(mapStateToProps)

export default connector(Logo)

function mapStateToProps(state) {
  return {
    logo: state.app.logo
  }
}
