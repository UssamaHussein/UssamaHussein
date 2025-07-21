import { motion } from 'framer-motion'
import { Palette, Eye, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionLayout from '../SectionLayout'

const DesignSection = ({ onBack }) => {
  const designCategories = [
    { name: 'UI/UX Design', count: 12, color: 'from-purple-500 to-pink-500' },
    { name: 'Brand Identity', count: 8, color: 'from-blue-500 to-cyan-500' },
    { name: 'Digital Art', count: 15, color: 'from-orange-500 to-red-500' },
    { name: 'Print Design', count: 6, color: 'from-green-500 to-teal-500' }
  ]

  const featuredProjects = [
    {
      id: 1,
      title: 'Modern E-commerce UI',
      category: 'UI/UX Design',
      description: 'Clean and modern interface design for an e-commerce platform',
      image: '/api/placeholder/400/300',
      tools: ['Figma', 'Adobe XD', 'Photoshop'],
      year: '2024'
    },
    {
      id: 2,
      title: 'Brand Identity Package',
      category: 'Brand Identity',
      description: 'Complete brand identity design including logo, colors, and typography',
      image: '/api/placeholder/400/300',
      tools: ['Illustrator', 'Photoshop', 'InDesign'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Digital Art Collection',
      category: 'Digital Art',
      description: 'Abstract digital artwork exploring color and form',
      image: '/api/placeholder/400/300',
      tools: ['Procreate', 'Photoshop', 'Blender'],
      year: '2023'
    },
    {
      id: 4,
      title: 'Event Poster Series',
      category: 'Print Design',
      description: 'Creative poster designs for music events and festivals',
      image: '/api/placeholder/400/300',
      tools: ['Illustrator', 'Photoshop', 'InDesign'],
      year: '2023'
    }
  ]

  return (
    <SectionLayout
      title="Design Portfolio"
      description="Creative designs and visual concepts"
      onBack={onBack}
      icon={Palette}
    >
      {/* Design Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Design Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {designCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-orange-400/50 transition-colors group"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:h-3 transition-all`}></div>
              <h3 className="text-white font-semibold mb-2">{category.name}</h3>
              <p className="text-orange-400 text-2xl font-bold">{category.count}</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-orange-400/50 transition-colors group"
            >
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Palette size={48} className="text-white/50" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Eye size={16} className="mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                </div>
                <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <span className="text-orange-400 text-sm">{project.category}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">My Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Research', description: 'Understanding the problem and target audience' },
            { step: '02', title: 'Ideate', description: 'Brainstorming and sketching initial concepts' },
            { step: '03', title: 'Design', description: 'Creating detailed designs and prototypes' },
            { step: '04', title: 'Refine', description: 'Testing, feedback, and final improvements' }
          ].map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">{process.step}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{process.title}</h3>
              <p className="text-gray-400 text-sm">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-purple-500/20"
      >
        <Palette size={48} className="text-purple-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing</h3>
        <p className="text-gray-300 mb-6">
          Have a design project in mind? I'd love to help bring your vision to life.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <ExternalLink size={16} className="mr-2" />
          Get In Touch
        </Button>
      </motion.div>
    </SectionLayout>
  )
}

export default DesignSection

