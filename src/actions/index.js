import axios from 'axios';
import {
  ROOT_URL,
  API_KEY,
  GOALS_FETCH_DATA_SUCCESS,
  GOALS_HAS_ERRORED,
  GOALS_IS_LOADING
} from '../constants';

export function goalsHasErrored(bool) {
  return {
      type: GOALS_HAS_ERRORED,
      hasErrored: bool
  };
}

export function goalsIsLoading(bool) {
  return {
      type: GOALS_IS_LOADING,
      isLoading: bool
  };
}

export function goalsFetchDataSuccess(entries) {
  return {
      type: GOALS_FETCH_DATA_SUCCESS,
      payload: entries
  };
}

export function goalsFetchData (url) {
  return (dispatch) => {
    dispatch(goalsIsLoading(true));

    axios.get(`${ROOT_URL}/get/goals${API_KEY}`)
    // axios.get(`../goals.collection.json`)
      .then(response => {
        if (response.statusText !== 'OK') {
          throw Error(response.statusText)
        }
        
        dispatch(goalsIsLoading(false));

        return response;
      })
        .then((response) => {
          dispatch(goalsFetchDataSuccess(response.data.entries))
        })
        .catch(() => dispatch(goalsHasErrored(true)));
  }
}