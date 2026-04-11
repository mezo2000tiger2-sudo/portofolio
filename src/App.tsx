import "./App.css"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { WorksCarousel } from "./components/WorksCarousel"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="flex w-full bg-background text-foreground font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <WorksCarousel />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
