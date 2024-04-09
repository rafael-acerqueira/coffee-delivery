import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./globalStyle"
import { Router } from "./Router"

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>

  )
}

export default App
