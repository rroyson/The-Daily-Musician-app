import React from 'react'
import { connect } from 'react-redux'
import { SET_SEARCH_VENUES_X } from '../constants'
import { getVenues } from '../db'
import { toUpper } from 'ramda'

class VenueSearch extends React.Component {
  componentDidMount() {}
  render() {
    const props = this.props
    return (
      <div className="pa4 bg-light-gray avenir">
        <h2 className="f4 f3-ns">Find a Venue</h2>
        <form onSubmit={props.handleSubmit(props.history)}>
          <div className="mt3">
            <label className="db fw6 black-70 lh-copyf6">
              Venue Name
            </label>
            <input
              value={props.name}
              onChange={props.handleName}
              className="input-reset db w-30"
              type="text"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 black-70 lh-copy f6">City</label>
            <input
              value={props.city}
              onChange={props.handleCity}
              className="input-reset db w-30"
              type="text"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 black-70 lh-copy f6">State</label>
            <input
              value={props.venueState}
              onChange={props.handleVenueState}
              className="input-reset db w-30"
              type="text"
            />
          </div>
          <div className="mt2">
            <button className="w-20  bg-green white ba mt2 br2 b--light-green">
              Search
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('name state', state.findVenues.name)
  return {
    name: state.findVenues.name,
    city: state.findVenues.city,
    venueState: state.findVenues.venueState
  }
}

function mapActionsToProps(dispatch) {
  const doDispatch = (field, value) => {
    dispatch({
      type: SET_SEARCH_VENUES_X + toUpper(field),
      payload: value
    })
  }

  return {
    handleSubmit: history => e => {
      e.preventDefault()
      dispatch(getVenues(history))
    },

    handleName: e => doDispatch('NAME', e.target.value),
    handleCity: e => doDispatch('CITY', e.target.value),
    handleVenueState: e => doDispatch('VENUESTATE', e.target.value)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(VenueSearch)
