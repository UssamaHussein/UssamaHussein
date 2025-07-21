import { motion } from 'framer-motion'
import { Youtube, Play, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionLayout from '../SectionLayout'

const YouTubeSection = ({ onBack }) => {
  // Placeholder data - will be replaced with real YouTube API data later
  const channelStats = {
    subscribers: '1.2K',
    videos: '25',
    views: '50K'
  }

  const featuredVideos = [
    {
      id: 1,
      title: 'My Creative Journey - Introduction',
      thumbnail: '/api/placeholder/400/225',
      duration: '5:32',
      views: '2.1K',
      uploadDate: '2 weeks ago'
    },
    {
      id: 2,
      title: 'Design Process Behind My Latest Project',
      thumbnail: '/api/placeholder/400/225',
      duration: '8:45',
      views: '1.8K',
      uploadDate: '1 month ago'
    },
    {
      id: 3,
      title: 'Video Editing Tips & Tricks',
      thumbnail: '/api/placeholder/400/225',
      duration: '12:15',
      views: '3.2K',
      uploadDate: '2 months ago'
    }
  ]

  return (
    <SectionLayout
      title="YouTube Channel"
      description="Watch my creative journey unfold through videos"
      onBack={onBack}
      icon={Youtube}
    >
      {/* Channel Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
          <h3 className="text-2xl font-bold text-orange-400">{channelStats.subscribers}</h3>
          <p className="text-gray-300">Subscribers</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
          <h3 className="text-2xl font-bold text-orange-400">{channelStats.videos}</h3>
          <p className="text-gray-300">Videos</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
          <h3 className="text-2xl font-bold text-orange-400">{channelStats.views}</h3>
          <p className="text-gray-300">Total Views</p>
        </div>
      </motion.div>

      {/* Featured Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-orange-400/50 transition-colors group"
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Play size={48} className="text-white/50" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Play size={16} className="mr-2" />
                    Watch
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{video.views} views</span>
                  <span>{video.uploadDate}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg p-8 border border-red-500/20"
      >
        <Youtube size={48} className="text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Subscribe to My Channel</h3>
        <p className="text-gray-300 mb-6">
          Join me on my creative journey and never miss a new video!
        </p>
        <Button className="bg-red-600 hover:bg-red-700">
          <ExternalLink size={16} className="mr-2" />
          <a href="https://youtube.com/@ussamahussein?si=IClyrqYQXE7jMzGo" target="_blank" rel="noopener noreferrer">
            Visit YouTube Channel
          </a>
        </Button>
      </motion.div>
    </SectionLayout>
  )
}

export default YouTubeSection

