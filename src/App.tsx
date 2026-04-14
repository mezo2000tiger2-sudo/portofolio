import { useState, useEffect } from "react"
import "./App.css"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { WorksCarousel } from "./components/WorksCarousel"
import { Footer } from "./components/Footer"
import { Preloader } from "./components/Preloader"
import { cn } from "@/lib/utils"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [isLoaded])

  return (
    <div className="flex w-full bg-background text-foreground font-sans min-h-screen">
     <Preloader onComplete={() => setIsLoaded(true)} />
     <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-clip">
        <Header />
        <main>
          <Hero isLoaded={isLoaded} />
          <WorksCarousel />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
