import React from 'react'
import { connect } from 'react-redux'

const MovieSearch = props => {
  return (
    <div className="pa4">
      <h2>Movie Search Form</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="measure">
          <label className="db mb2">Search</label>
          <input
            value={props.q}
            onChange={props.handleChange}
            className="input-reset db w-100"
            type="text"
          />
        </div>
        <div className="mt2">
          <button>Search</button>
        </div>
      </form>
    </div>
  )
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(MovieSearch)

function mapStateToProps(state) {
  return {
    q: state.q
  }
}

function mapActionsToProps(dispatch) {
  return {
    handleSubmit: q => e => {
      e.preventDefault()
      fetch(
        `https://www.omdbapi.com/?apikey=21d70f1a&s=${q}&y=&plot=full&r=json`
      )
        .then(res => res.json())
        .then(res => dispatch({ type: 'SET_RESULTS', payload: res.Search }))
    },
    // handleSubmit: e => {
    //   e.preventDefault()
    //   dispatch(function(dispatch, getState) {
    //     fetch(
    //       `https://www.omdbapi.com/?apikey=21d70f1a&s=${getState()
    //         .q}&y=&plot=full&r=json`
    //     )
    //       .then(res => res.json())
    //       .then(res => dispatch({ type: 'SET_RESULTS', payload: res.Search }))
    //   })
    // },
    handleChange: e => dispatch({ type: 'SET_Q', payload: e.target.value })
  }
}
