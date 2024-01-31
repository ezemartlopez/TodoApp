import './tittleapp.style.css';
import { toggleTheme } from './functions';

function TittleApp() {
  const iconName = () =>{
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    return currentTheme==='light'? 'light_mode': 'mode_night';
  }
  return (
      <div className='tittle-app-container'>
        <span className='tittle-app'>TODO</span>
        <i className="material-icons icon-mode-change" onClick={toggleTheme}> {iconName()}</i>
      </div>
  )
}

export default TittleApp;