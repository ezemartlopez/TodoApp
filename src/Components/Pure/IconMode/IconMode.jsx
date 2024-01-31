import { connectTheme } from "../../../StoreRedux/conectors/conectFunction";
const LIGHT = 'light';

function toggleThemeFunction() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
}

function IconMode({mode, toggleTheme}) {
  const styles = {
    fontSize: '35px',
    cursor: 'pointer'
  }
  const ButtontoggleTheme = () =>{
    toggleTheme();
    toggleThemeFunction();
  }
 return (
  <i className="material-icons" 
    style={styles} 
    onClick={ButtontoggleTheme}>
    {mode===LIGHT? 'mode_night':'light_mode' }
  </i>
  )
}

export default connectTheme(IconMode);