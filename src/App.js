import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header/Header"
import Section from "./Components/Section/Section"
import Design2 from "./Components/Design2/Design2"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/design2" element={<Design2 />} />
      </Routes>
    </div>
  )
}

export default App
