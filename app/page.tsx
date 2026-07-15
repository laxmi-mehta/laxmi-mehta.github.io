import SmoothScroll from '@/components/SmoothScroll'
import RouteRail from '@/components/RouteRail'
import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Journey from '@/components/sections/Journey'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import AIJourney from '@/components/sections/AIJourney'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <SmoothScroll>
      <RouteRail />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Journey />
        <Skills />
        <Projects />
        <AIJourney />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
