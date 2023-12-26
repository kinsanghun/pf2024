import React from 'react';
import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

const style = {
  dark: {
    colors: {
      primary: "#1f1f1f"
    },
  },
  light: {
    colors: {
      primary: "#f1f1f1"
    },
  }  
}


function App() {
  const [theme, setTheme] = useTheme();

  return (
    <ThemeProvider theme={style[theme]}>
      <RootContainer>
        <button onClick={() => { setTheme() }}></button>
      </RootContainer>
    </ThemeProvider>
  );
}

const RootContainer = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  background:  ${({ theme }) => theme.colors.primary};
`

export default App;
