import React from 'react'
import { connect } from 'react-redux'
import MovieSearch from '../containers/movie-search'

import { map } from 'ramda'

const Search = props => {
  function li(movie) {
    return <li key={movie.imdbID}>{movie.Title}</li>
  }
  return (
    <div>
      <h1>Movie Search Page</h1>
      <MovieSearch />
      <ul>
        {map(li, props.results)}
      </ul>
    </div>
  )
}

const connector = connect(mapStateToProps)

export default connector(Search)

function mapStateToProps(state) {
  return {
    results: state.results
  }
}
