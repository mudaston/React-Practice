import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import {createGlobalStyle, ThemeProvider} from "styled-components";

import App from "./components/app/app";

import './index.css'

const Global = createGlobalStyle`
  * {
    font-family: Consolas, serif;
  }
`
const theme  = {
    colors: {
        mainColor: 'red'
    },
    media: {
        tablet: '(max-width: 768px)'
    }
}

ReactDOM.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Global/>
            <App/>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
)