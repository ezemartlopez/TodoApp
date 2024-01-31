// windowReducer.js
import { SET_WINDOW_WIDTH, MOBILE, DESKTOP} from '../constants/deviceActionsTypes';

const initialState = {
    device: DESKTOP
}
const min_width_mobile = 600;

const deviceReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_WINDOW_WIDTH:
      return { device: action.payload.width < min_width_mobile? MOBILE: DESKTOP};
    default:
      return state;
  }
};

export default deviceReducer;
