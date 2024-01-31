// themeReducer.js
import { TOGGLE_THEME } from '../constants/themeActionsTypes';

const LIGHT = 'light';
const NIGHT = 'night';
/*
const imageBackground = {
    light:{
      mobile: './src/assets/Background/ModeLigthMobile.png',
      desktop: './src/assets/Background/ModeLightDesktop.png'
    },
    night:{
      mobile: './src/assets/Background/ModeDarkMobile.png',
      desktop: './src/assets/Background/ModeDarkDesktop.png'
    }
  }
*/
const themeReducer = (state = { mode: LIGHT }, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      console.log(state.mode);
      return { mode: state.mode === LIGHT ? NIGHT : LIGHT };
    default:
      return state;
  }
};

export default themeReducer;
