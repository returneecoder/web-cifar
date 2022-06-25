import React from 'react'
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div>
     <HeroSection />
     <AboutSection/>
     <ServicesSection/>
     <ProjectsSection/>
      </div>
  )
}
