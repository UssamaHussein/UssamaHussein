import { motion } from 'framer-motion'
import { Youtube, Code, Palette, Video, BookOpen, ShoppingBag, Github, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HomePage = ({ onNavigate }) => {
  const socialLinks = [
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@ussamahussein?si=IClyrqYQXE7jMzGo', color: 'hover:text-red-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/UssamaHussein', color: 'hover:text-gray-400' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ussama_hussein?igsh=a3BpcDZ5c2tvMDJk', color: 'hover:text-pink-500' },
    { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/ussamahussein?s=21', color: 'hover:text-blue-400' }
  ]

  const navigationButtons = [
    { id: 'youtube', label: 'YouTube Channel', icon: Youtube, description: 'Watch my latest videos', color: 'from-red-500 to-red-600' },
    { id: 'coding', label: 'Coding Portfolio', icon: Code, description: 'Future coding projects', color: 'from-blue-500 to-blue-600' },
    { id: 'design', label: 'Design Work', icon: Palette, description: 'Creative designs & graphics', color: 'from-purple-500 to-purple-600' },
    { id: 'video', label: 'Video Editing', icon: Video, description: 'Video editing showcase', color: 'from-green-500 to-green-600' },
    { id: 'blog', label: 'Blog & Newsletter', icon: BookOpen, description: 'Latest articles & updates', color: 'from-yellow-500 to-yellow-600' },
    { id: 'store', label: 'Store', icon: ShoppingBag, description: 'Digital products & resources', color: 'from-orange-500 to-orange-600' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Who Is{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Ussama
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A passionate creative exploring the worlds of design, video editing, content creation, and future coding adventures. 
            Welcome to my digital universe where creativity meets technology.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`text-white/70 ${social.color} transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Buttons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {navigationButtons.map((button, index) => (
            <motion.div
              key={button.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => onNavigate(button.id)}
                className={`w-full h-32 bg-gradient-to-br ${button.color} hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 border border-white/10 group`}
                variant="ghost"
              >
                <div className="flex flex-col items-center space-y-3">
                  <motion.div
                    className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <button.icon size={28} className="text-white" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-lg">{button.label}</h3>
                    <p className="text-white/70 text-sm">{button.description}</p>
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-gray-400 text-lg">
            Ready to explore? Click on any section above to dive into my world of creativity.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage

