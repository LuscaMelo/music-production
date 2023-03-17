import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { SeeMore } from "./components/SeeMore"

function App() {

  return (
    <div className="h-[100vh]">
      <Navbar />
      <Hero />
      <SeeMore />
    </div>
  )
}

export default App
