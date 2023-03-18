import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { SeeMore } from "./components/SeeMore"
import Highlights from "./components/Highlights"
import { Softwares } from "./components/Softwares"

function App() {

  return (
    <div className="h-[100vh]">
      <Navbar />
      <Hero />
      <SeeMore />
      <Highlights />
      <Softwares />
    </div>
  )
}

export default App
