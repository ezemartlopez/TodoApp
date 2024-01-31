// windowActions.js
import { SET_WINDOW_WIDTH } from '../constants/deviceActionsTypes';

export const setWindowWidth = (width) => ({
  type: SET_WINDOW_WIDTH,
  payload: {width: width}
});
