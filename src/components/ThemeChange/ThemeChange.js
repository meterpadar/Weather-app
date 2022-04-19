import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ThemeChangeWrapper,
  ThemeChangeButton,
  moveButtonRight,
  moveButtonLeft
} from './../../styles.js';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

export function ThemeChange({currTheme, setCurrTheme}) {
  const toggleTheme = () => {
    if (currTheme === 'left') {
      setCurrTheme('right');
    } else {
      setCurrTheme('left');
    };
  };

  return (
    <ThemeChangeWrapper
      css={css`
        background: ${
          currTheme === 'left' ? 
          '#364265' :
          '#3CE6D5'
        }
      `}
    >
      <ThemeChangeButton
        css={css`
          animation: ${
            currTheme === 'left' ? 
            moveButtonRight : 
            currTheme === 'right' ? 
            moveButtonLeft :
            null
          } 0.5s ease forwards;
        `}
        onClick={toggleTheme}
      >
      {
        currTheme === 'left' ?
        <FontAwesomeIcon 
          icon="fa-solid fa-sun" 
          style={{color: '#F1C40F'}}
        /> :
        <FontAwesomeIcon 
          icon="fa-solid fa-moon" 
          style={{color: '#F1C40F'}}
        />
      }
      </ThemeChangeButton>
    </ThemeChangeWrapper>
  );
}

