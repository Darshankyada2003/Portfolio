import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Aboutsection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <Aboutsection />
        <SkillsSection />
        <ProjectSection />
      </main>
    </div>
  )
}

export default Home
