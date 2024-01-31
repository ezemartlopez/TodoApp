import { connectThemeDevice } from '../../../StoreRedux/conectors/conectFunction';
import './background.style.css';

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


function Background({mode, device}) {
  const image = imageBackground[mode][device];
  return (
    <div>
        <img src={image} alt="background_image" className='image-background'/>  
    </div>
  )
}

export default connectThemeDevice(Background);