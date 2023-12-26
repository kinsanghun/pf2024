import React from 'react';
import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import Title from './components/typography/Title';
import Headline1 from './components/typography/Headline1';
import Text from './components/typography/Text';
import Caption from './components/typography/Caption';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

const textSizes = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.35rem",
};

const style = {
  dark: {
    colors: {
      primary: "#1f1f1f",
      text: {
        title: "hsla(0, 0%, 95%, 100)",
        headline: "hsla(0, 0%, 92.5%, 100)",
        body: "hsla(0, 0%, 85%, 100)",
        caption: "hsla(0, 0%, 70%, 100)"
      }
    },
    text: textSizes
  },
  light: {
    colors: {
      primary: "#f1f1f1",
      text: {
        title: "hsla(0, 0%, 5%, 100)",
        headline: "hsla(0, 0%, 7.5%, 100)",
        body: "hsla(0, 0%, 15%, 100)",
        caption: "hsla(0, 0%, 30%, 100)"
      }
    },
    text: textSizes
  }  
};

function App() {
  const [theme, setTheme] = useTheme();
  const lorem = "Lorem ipsum"
  return (
    <ThemeProvider theme={style[theme]}>
      <RouterProvider router={router} />
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
