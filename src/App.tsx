import { useState, useEffect } from "react"
import "./App.css"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { WorksCarousel } from "./components/WorksCarousel"
import { CapabilitiesSection } from "./components/CapabilitiesSection"
import { Footer } from "./components/Footer"
import { Preloader } from "./components/Preloader"

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
  // useGSAP(()=>{
  //   gsap.set('body', {scrollTrigger: {fastScrollEnd: true}})
  // })

  return (
    <div className="flex w-full bg-background text-foreground font-sans min-h-screen">
     <Preloader onComplete={() => setIsLoaded(true)} />
     <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-clip">
        <Header isLoaded={isLoaded} />
        <main>
          <Hero isLoaded={isLoaded} />
          <CapabilitiesSection />
          <WorksCarousel />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
