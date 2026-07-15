import SmoothScroll from '@/components/SmoothScroll'
import Nav from '@/components/Nav'
import BackToTop from '@/components/BackToTop'
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
      <Nav />
      <BackToTop />
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
