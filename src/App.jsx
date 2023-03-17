import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import { SeeMore } from "./components/SeeMore"

function App() {

  return (
    <div className="h-[100vh]">
      <Navbar />
      <Hero />
      <Highlights />
      <SeeMore />
    </div>
  )
}

export default App
