import { motion } from 'framer-motion'
import { BookOpen, Calendar, User, ArrowRight, Mail, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionLayout from '../SectionLayout'

const BlogSection = ({ onBack }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'My Journey into Video Editing: From Beginner to Professional',
      excerpt: 'Discover how I transformed my passion for storytelling into a professional video editing career, including the tools, techniques, and mindset shifts that made all the difference.',
      category: 'Career',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      featured: true,
      tags: ['Video Editing', 'Career', 'Learning']
    },
    {
      id: 2,
      title: 'Essential Design Principles Every Creator Should Know',
      excerpt: 'Explore the fundamental design principles that will elevate your creative work, from color theory to typography and composition.',
      category: 'Design',
      readTime: '6 min read',
      publishDate: '2024-01-08',
      featured: false,
      tags: ['Design', 'Principles', 'Creativity']
    },
    {
      id: 3,
      title: 'Building a Personal Brand as a Creative Professional',
      excerpt: 'Learn how to develop and maintain a strong personal brand that attracts clients and opportunities in the creative industry.',
      category: 'Business',
      readTime: '10 min read',
      publishDate: '2024-01-01',
      featured: false,
      tags: ['Branding', 'Business', 'Marketing']
    },
    {
      id: 4,
      title: 'The Future of Content Creation: Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with insights into emerging trends in content creation, from AI tools to new platforms and formats.',
      category: 'Industry',
      readTime: '7 min read',
      publishDate: '2023-12-25',
      featured: false,
      tags: ['Trends', 'Technology', 'Future']
    }
  ]

  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Design', count: 8, active: false },
    { name: 'Video Editing', count: 6, active: false },
    { name: 'Career', count: 5, active: false },
    { name: 'Business', count: 3, active: false },
    { name: 'Industry', count: 2, active: false }
  ]

  return (
    <SectionLayout
      title="Blog & Newsletter"
      description="Insights, tutorials, and thoughts on creativity and technology"
      onBack={onBack}
      icon={BookOpen}
    >
      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-8 border border-yellow-500/20 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
              <Mail size={28} className="mr-3 text-yellow-400" />
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-300">
              Get weekly insights on design, video editing, and creative entrepreneurship delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              <Bell size={16} className="mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category.active
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8"
      >
        {blogPosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-colors">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="aspect-video md:aspect-square bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                  <BookOpen size={48} className="text-white/80" />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium mr-3">
                    Featured
                  </span>
                  <span className="text-yellow-400 text-sm">{post.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button className="bg-yellow-600 hover:bg-yellow-700">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-colors group"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <BookOpen size={32} className="text-white/50" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-yellow-400 text-sm">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </span>
                  <Button size="sm" variant="ghost" className="text-yellow-400 hover:text-yellow-300">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Blog Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: 'Total Posts', value: '24' },
          { label: 'Newsletter Subscribers', value: '1.2K' },
          { label: 'Monthly Readers', value: '5.8K' },
          { label: 'Countries Reached', value: '45' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-1">{stat.value}</h3>
            <p className="text-gray-300 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-8 border border-yellow-500/20"
      >
        <BookOpen size={48} className="text-yellow-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
        <p className="text-gray-300 mb-6">
          Join our community of creators and get exclusive content, early access to tutorials, and behind-the-scenes insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-yellow-600 hover:bg-yellow-700">
            <Mail size={16} className="mr-2" />
            Subscribe to Newsletter
          </Button>
          <Button variant="outline">
            Browse All Posts
          </Button>
        </div>
      </motion.div>
    </SectionLayout>
  )
}

export default BlogSection

