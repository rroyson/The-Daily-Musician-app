import React from 'react'
import { connect } from 'react-redux'

const Counter = props => {
  return (
    <div className="ba pa4 ma2">
      <h1>Counter: {props.counter}</h1>
      <button onClick={props.handleInc}>+</button>
      <button onClick={props.handleDec}>-</button>
    </div>
  )
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Counter)

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapActionsToProps(dispatch) {
  return {
    handleInc: e => dispatch({ type: 'INC', payload: '' }),
    handleDec: e => dispatch({ type: 'DEC', payload: '' })
  }
}
