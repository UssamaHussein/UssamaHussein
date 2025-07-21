import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import YouTubeSection from './components/sections/YouTubeSection'
import CodingSection from './components/sections/CodingSection'
import DesignSection from './components/sections/DesignSection'
import VideoSection from './components/sections/VideoSection'
import BlogSection from './components/sections/BlogSection'
import StoreSection from './components/sections/StoreSection'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const handleNavigation = (section) => {
    setCurrentSection(section)
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />
      case 'youtube':
        return <YouTubeSection onBack={() => handleNavigation('home')} />
      case 'coding':
        return <CodingSection onBack={() => handleNavigation('home')} />
      case 'design':
        return <DesignSection onBack={() => handleNavigation('home')} />
      case 'video':
        return <VideoSection onBack={() => handleNavigation('home')} />
      case 'blog':
        return <BlogSection onBack={() => handleNavigation('home')} />
      case 'store':
        return <StoreSection onBack={() => handleNavigation('home')} />
      default:
        return <HomePage onNavigate={handleNavigation} />
    }
  }

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} currentSection={currentSection} />
      {renderSection()}
    </div>
  )
}

export default App

