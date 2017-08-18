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
      <div className="pa4">
        <h2>Find a Venue</h2>
        <form onSubmit={props.handleSubmit(props.history)}>
          <div className="measure">
            <label className="db mb2">Venue Name</label>
            <input
              value={props.name}
              onChange={props.handleName}
              className="input-reset db w-100"
              type="text"
            />
          </div>
          <div className="measure">
            <label className="db mb2">City</label>
            <input
              value={props.city}
              onChange={props.handleCity}
              className="input-reset db w-100"
              type="text"
            />
          </div>
          <div className="measure">
            <label className="db mb2">State</label>
            <input
              value={props.venueState}
              onChange={props.handleVenueState}
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
