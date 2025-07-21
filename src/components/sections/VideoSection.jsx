import { motion } from 'framer-motion'
import { Video, Play, Award, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionLayout from '../SectionLayout'

const VideoSection = ({ onBack }) => {
  const videoStats = [
    { label: 'Projects Completed', value: '50+', icon: Award },
    { label: 'Hours of Content', value: '200+', icon: Clock },
    { label: 'Client Satisfaction', value: '100%', icon: Award }
  ]

  const services = [
    {
      title: 'Video Editing',
      description: 'Professional video editing for YouTube, social media, and commercial projects',
      features: ['Color Correction', 'Audio Enhancement', 'Motion Graphics', 'Transitions'],
      price: 'From $50'
    },
    {
      title: 'Motion Graphics',
      description: 'Eye-catching animations and motion graphics for videos and presentations',
      features: ['Logo Animation', 'Text Animation', 'Infographics', 'Visual Effects'],
      price: 'From $75'
    },
    {
      title: 'Post-Production',
      description: 'Complete post-production services from raw footage to final delivery',
      features: ['Multi-cam Editing', 'Sound Design', 'Color Grading', 'Final Delivery'],
      price: 'From $100'
    }
  ]

  const portfolio = [
    {
      id: 1,
      title: 'YouTube Channel Intro',
      category: 'Motion Graphics',
      duration: '0:15',
      description: 'Dynamic intro animation for a tech YouTube channel',
      thumbnail: '/api/placeholder/400/225',
      tools: ['After Effects', 'Premiere Pro']
    },
    {
      id: 2,
      title: 'Product Commercial',
      category: 'Commercial',
      duration: '1:30',
      description: 'Professional product showcase video with motion graphics',
      thumbnail: '/api/placeholder/400/225',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve']
    },
    {
      id: 3,
      title: 'Event Highlights',
      category: 'Event',
      duration: '3:45',
      description: 'Wedding highlights reel with cinematic color grading',
      thumbnail: '/api/placeholder/400/225',
      tools: ['Premiere Pro', 'DaVinci Resolve']
    },
    {
      id: 4,
      title: 'Social Media Content',
      category: 'Social Media',
      duration: '0:30',
      description: 'Engaging social media video with trendy transitions',
      thumbnail: '/api/placeholder/400/225',
      tools: ['Premiere Pro', 'After Effects']
    }
  ]

  return (
    <SectionLayout
      title="Video Editing Showcase"
      description="Professional video editing and motion graphics"
      onBack={onBack}
      icon={Video}
    >
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {videoStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-orange-400/50 transition-colors"
          >
            <stat.icon size={32} className="text-orange-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">{service.price}</span>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-green-400/50 transition-colors group"
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Play size={48} className="text-white/50" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Play size={16} className="mr-2" />
                    Watch
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3 bg-green-500/80 text-white text-xs px-2 py-1 rounded">
                  {video.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-300 mb-4">{video.description}</p>
                <div className="flex flex-wrap gap-2">
                  {video.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Software & Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Software & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Adobe Premiere Pro', level: 'Expert' },
            { name: 'After Effects', level: 'Advanced' },
            { name: 'DaVinci Resolve', level: 'Advanced' },
            { name: 'Final Cut Pro', level: 'Intermediate' }
          ].map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
            >
              <div className="w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-3"></div>
              <h3 className="text-white font-semibold text-sm">{tool.name}</h3>
              <p className="text-gray-400 text-xs">{tool.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-8 border border-green-500/20"
      >
        <Video size={48} className="text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Bring Your Vision to Life?</h3>
        <p className="text-gray-300 mb-6">
          Let's collaborate on your next video project. From concept to final delivery, I'll help you create compelling visual content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-600 hover:bg-green-700">
            <ExternalLink size={16} className="mr-2" />
            Start a Project
          </Button>
          <Button variant="outline">
            View Full Portfolio
          </Button>
        </div>
      </motion.div>
    </SectionLayout>
  )
}

export default VideoSection

