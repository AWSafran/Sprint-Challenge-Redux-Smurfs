/*
  Be sure to import in all of the action types from `../actions`
*/

import { SMURF_FETCH_START, SMURF_FETCH_SUCCESS, NEW_SMURF_START, NEW_SMURF_SUCCESS } from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  console.log("Made it to reducer");
  switch(action.type){
    case SMURF_FETCH_START:
      return{
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case SMURF_FETCH_SUCCESS:
      console.log('fetch payload is', action.payload);
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        erro: null
      }
    case NEW_SMURF_START:
      return{
        ...state,
        addingSmurf: true,
        error:null
      }
    case NEW_SMURF_SUCCESS:
      return{
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    default:
      return{
        ...state
      };
  }
}

export default reducer;
