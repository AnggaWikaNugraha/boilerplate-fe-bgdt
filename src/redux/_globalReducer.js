import Type from './typeReducers';

const StatusPageState = {
  isAuthenticated: false,
  token: null,
  username: null,
};

const ceklisState = {
 data: [],
};

export function StatusPageReducer(state = StatusPageState, action) {
  switch (action.type) {
    case Type.STATUS_PAGE_SET_MULTIPLE:
      return { ...state, ...action.payload };
    case 'STATUS_PAGE_REDUCER_RESET':
      return StatusPageState;
    default:
      return state;
  }
}

export default {
  StatusPageReducer,
};