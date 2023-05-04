import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { SeeMore } from "./components/SeeMore"
import Highlights from "./components/Highlights"
import { Softwares } from "./components/Softwares"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="h-[100vh]">
      <Navbar />
      <Hero />
      <SeeMore />
      <Highlights />
      <Softwares />
      <Footer />
    </div>
  )
}

export default App
