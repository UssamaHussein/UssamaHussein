import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SectionLayout = ({ title, description, children, onBack, icon: Icon }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:text-orange-400 mb-6 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <div className="flex items-center space-x-4 mb-4">
            {Icon && (
              <div className="p-3 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500">
                <Icon size={32} className="text-black" />
              </div>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
              {description && (
                <p className="text-gray-300 text-lg mt-2">{description}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default SectionLayout

