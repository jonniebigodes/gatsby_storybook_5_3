import React from "react"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle theme="purple" />
    {children}
  </React.Fragment>
)
