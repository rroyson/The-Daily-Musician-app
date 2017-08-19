import React from 'react'
import { connect } from 'react-redux'

const Logo = function(props) {
  return (
    <div>
      <div
        className="vh-100 dt w-100 tc bg-dark-gray white cover"
        style={{
          'background-image':
            'url("https://www.fillmurray.com/300/300") no-repeat center'
        }}
      />
    </div>
  )
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
  return {
    logo: state.app.logo
  }
}

export default connector(Logo)
