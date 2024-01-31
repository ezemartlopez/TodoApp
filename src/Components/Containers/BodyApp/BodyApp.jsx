import { useEffect} from 'react';
import Background from '../../Pure/BackGround/Background';
import TodoApp from '../TodoApp/TodoApp';
import './bodyapp.style.css';
import { connectDeviceMode } from '../../../StoreRedux/conectors/conectFunction';

function BodyApp({mode, setWindowWidth}) {

  const deviceByWith = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    deviceByWith();
    window.addEventListener('resize', deviceByWith);

    return () => {
      window.removeEventListener('resize', deviceByWith);
    };
  }, []);
  return (
      <div className='body-container' >
          <div className='body-background-container'>
              <Background></Background>
          </div>
          <div className='body-main-container'>
              <TodoApp></TodoApp>
          </div>
      </div>
  )
}

export default connectDeviceMode(BodyApp);