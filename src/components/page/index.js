import {useEffect, useState} from 'react';

import DarkModeIcon from '../../assests/darkModeIcon';
import LightModeIcon from '../../assests/lightModeIcon';
import {getTheme, setTheme, themes} from '../../utils/theme';
import IconButton from '../iconButton';

import classes from './styles.module.css';

const Page = props => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => loadTheme(), []);

  const loadTheme = () => {
    const currTheme = getTheme();
    setDarkMode(currTheme === themes.DARK);
    setTheme(currTheme);
  };
  const handleThemeChange = () => {
    const currTheme = getTheme();
    setDarkMode(currTheme !== themes.DARK);
    setTheme(currTheme === themes.DARK ? themes.LIGHT : themes.DARK);
    if (typeof props.shouldComponentUpdate === 'function')
      props.shouldComponentUpdate(new Date().getTime());
  };

  return <div className = {classes.page}><
      div className =
          {classes
               .pageBackground} />
        <div className={classes.pageContent}>
            <IconButton onClick={handleThemeChange}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                }}>
                {darkMode ? <DarkModeIcon />:
      <LightModeIcon />
}</IconButton>
            {props.children}
        </div>< /div>;
};

export default Page;