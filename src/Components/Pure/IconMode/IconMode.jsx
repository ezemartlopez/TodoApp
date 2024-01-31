import { connectTheme } from "../../../StoreRedux/conectors/conectFunction";
const LIGHT = 'light';

function IconMode({mode, toggleTheme}) {
  const styles = {
    fontSize: '35px',
    cursor: 'pointer'
  }
 return (
  <i className="material-icons" 
    style={styles} 
    onClick={toggleTheme}>
    {mode===LIGHT? 'mode_night':'light_mode' }
  </i>
  )
}

export default connectTheme(IconMode);