import { GlobalContext } from "./Context";
import { BsFillSunFill,BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = ()=>{
    const {handleDarkTheme,isDarkTheme} = GlobalContext();

    return( 
        <section className='toggle-container'>
        <button className='dark-toggle' onClick={handleDarkTheme}>
          {isDarkTheme ? (
            <BsFillMoonFill className='toggle-icon moon' />
          ) : (
            <BsFillSunFill className='toggle-icon' />
          )}
        </button>
      </section>
    );
}

export default ThemeToggle;