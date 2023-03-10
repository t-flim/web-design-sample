import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Error from "./pages/Error"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout /> } >
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="products" element={ <Products /> } />
          <Route path="*" element={ <Error /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
