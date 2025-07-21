import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoImage from '../assets/USHULogoIconTRANS.png'

const Header = ({ onNavigate, currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'coding', label: 'Coding' },
    { id: 'design', label: 'Design' },
    { id: 'video', label: 'Video Editing' },
    { id: 'blog', label: 'Blog' },
    { id: 'store', label: 'Store' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logoImage} 
              alt="UsHu Logo" 
              className="w-10 h-10 mr-3"
            />
            <span className="text-2xl font-bold text-white">
              Ussama Hussein
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  currentSection === item.id ? 'text-orange-400' : 'text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-orange-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`text-left text-sm font-medium transition-colors hover:text-orange-400 ${
                    currentSection === item.id ? 'text-orange-400' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

