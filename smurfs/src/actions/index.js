import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const SMURF_FETCH_START = 'SMURF_FETCH_START';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({type: SMURF_FETCH_START});

  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      //console.log(res.data);
      dispatch({
        type: SMURF_FETCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}
