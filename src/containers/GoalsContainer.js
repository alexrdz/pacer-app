import React from 'react';
import {connect} from 'react-redux';
import {goalsFetchData} from '../actions';
import Goals from '../components/Goals.js';


function mapStateToProps (state) {
  const { goals, goalsHasErrored, goalsIsLoading} = state;

  return {
    goals,
    goalsHasErrored,
    goalsIsLoading
  };
}

export default connect(mapStateToProps, {goalsFetchData})(Goals);

