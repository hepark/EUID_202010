import { FETCH_HOME_DATA, FETCH_HOME_DATA_ERROR } from '../actions'

/* -------------------------------------------------------------------------- */

const initState = {
  wallpapers: [],
  sections: [],
  hasError: null,
}

const homeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_HOME_DATA:
      return {
        ...state,
        sections: payload.sections,
        wallpapers: payload.wallpapers,
      }
    case FETCH_HOME_DATA_ERROR:
      return {
        ...state,
        hasError: payload,
      }

    default:
      return state
  }
}

export default homeReducer
