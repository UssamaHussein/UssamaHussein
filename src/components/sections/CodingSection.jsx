import { motion } from 'framer-motion'
import { Code, Github, ExternalLink, Star, GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionLayout from '../SectionLayout'

const CodingSection = ({ onBack }) => {
  const skills = [
    { name: 'JavaScript', level: 'Learning', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 'Learning', color: 'from-blue-400 to-blue-600' },
    { name: 'HTML/CSS', level: 'Learning', color: 'from-orange-400 to-red-500' },
    { name: 'Python', level: 'Planned', color: 'from-green-400 to-blue-500' },
    { name: 'Node.js', level: 'Planned', color: 'from-green-500 to-green-700' },
    { name: 'Git', level: 'Learning', color: 'from-gray-400 to-gray-600' }
  ]

  const futureProjects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and animations',
      status: 'In Progress',
      tech: ['React', 'CSS3', 'JavaScript'],
      progress: 75
    },
    {
      id: 2,
      title: 'Video Gallery App',
      description: 'A web application to showcase video editing work with interactive galleries',
      status: 'Planned',
      tech: ['React', 'Node.js', 'MongoDB'],
      progress: 0
    },
    {
      id: 3,
      title: 'Design Tool Integration',
      description: 'Tools to streamline design workflow and automate repetitive tasks',
      status: 'Planned',
      tech: ['Python', 'APIs', 'Automation'],
      progress: 0
    }
  ]

  return (
    <SectionLayout
      title="Coding Portfolio"
      description="My journey into the world of programming and development"
      onBack={onBack}
      icon={Code}
    >
      {/* Learning Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">My Coding Journey</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm currently embarking on an exciting journey into the world of programming and web development. 
            While I'm still learning the fundamentals, I'm passionate about creating digital solutions that 
            combine my creative background with technical skills. This section will grow as I build more 
            projects and expand my coding abilities.
          </p>
        </div>
      </motion.div>

      {/* Skills & Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-orange-400/50 transition-colors"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${skill.color} rounded-full mb-3 opacity-70`}></div>
              <h3 className="text-white font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Future Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Current & Future Projects</h2>
        <div className="space-y-6">
          {futureProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-orange-400/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'In Progress' 
                    ? 'bg-orange-500/20 text-orange-400' 
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {project.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <Button variant="outline" size="sm" disabled>
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
                <Button variant="outline" size="sm" disabled>
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GitHub Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-8 border border-gray-700/50"
      >
        <Github size={48} className="text-gray-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Follow My Coding Journey</h3>
        <p className="text-gray-300 mb-6">
          Check out my GitHub profile to see my latest projects and contributions as I learn and grow as a developer.
        </p>
        <Button className="bg-gray-700 hover:bg-gray-600">
          <ExternalLink size={16} className="mr-2" />
          <a href="https://github.com/UssamaHussein" target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </Button>
      </motion.div>
    </SectionLayout>
  )
}

export default CodingSection

