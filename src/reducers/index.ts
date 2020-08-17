//src/reducers/index.ts
import { combineReducers } from 'redux';

const initialState = {
	isOpen: false
}

const test = (state = initialState, action) => {
  // ...reducer code
  switch(action.type) {
	  	case 'toggle':
			  let t = { ...state, isOpen: !state.isOpen };
			  return t;
		default:
			return state;
  }
};

export default combineReducers({
  test
});