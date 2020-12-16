import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

// define our toggle context, with a default empty toggle function
const ThemeToggleContext = React.createContext({
  toggle: () => {}
});
// define exportable useContext hook object
export const useTheme = () => React.useContext(ThemeToggleContext);

// define MyThemeProvider
export const MyThemeProvider = ({ children }) => {
  // Wrapper providing some page styling based on theme
  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;
  // define toggle function
  const toggle = () => {
    console.log('toggle coming next');
  };
  // render both contexts, then Wrapper, then children
  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: 'light'
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
export default ThemeProvider;
