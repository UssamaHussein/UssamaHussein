import { motion } from 'framer-motion'
import { ShoppingBag, Download, Star, CreditCard, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionLayout from '../SectionLayout'

const StoreSection = ({ onBack }) => {
  const products = [
    {
      id: 1,
      title: 'Video Editing Masterclass',
      description: 'Complete course covering professional video editing techniques, from basics to advanced workflows.',
      price: '$49.99',
      originalPrice: '$79.99',
      category: 'Course',
      rating: 4.9,
      reviews: 127,
      features: ['10+ Hours of Content', 'Project Files Included', 'Lifetime Access', 'Certificate of Completion'],
      bestseller: true,
      digital: true
    },
    {
      id: 2,
      title: 'Design Templates Pack',
      description: 'Professional design templates for social media, presentations, and marketing materials.',
      price: '$29.99',
      originalPrice: null,
      category: 'Templates',
      rating: 4.8,
      reviews: 89,
      features: ['50+ Templates', 'Multiple Formats', 'Commercial License', 'Regular Updates'],
      bestseller: false,
      digital: true
    },
    {
      id: 3,
      title: 'Motion Graphics Toolkit',
      description: 'Essential motion graphics elements, transitions, and animations for video projects.',
      price: '$39.99',
      originalPrice: '$59.99',
      category: 'Assets',
      rating: 4.7,
      reviews: 156,
      features: ['100+ Elements', 'After Effects Files', 'HD Quality', 'Easy to Customize'],
      bestseller: false,
      digital: true
    },
    {
      id: 4,
      title: 'Creative Workflow Guide',
      description: 'Comprehensive guide to optimizing your creative workflow and productivity.',
      price: '$19.99',
      originalPrice: null,
      category: 'eBook',
      rating: 4.6,
      reviews: 73,
      features: ['120 Pages', 'Actionable Tips', 'Case Studies', 'Bonus Checklists'],
      bestseller: false,
      digital: true
    },
    {
      id: 5,
      title: 'One-on-One Consultation',
      description: 'Personal consultation session to discuss your creative projects and career goals.',
      price: '$99.99',
      originalPrice: null,
      category: 'Service',
      rating: 5.0,
      reviews: 24,
      features: ['60 Minutes Session', 'Personalized Advice', 'Action Plan', 'Follow-up Email'],
      bestseller: false,
      digital: false
    },
    {
      id: 6,
      title: 'Brand Identity Package',
      description: 'Complete brand identity design including logo, color palette, and brand guidelines.',
      price: '$299.99',
      originalPrice: '$399.99',
      category: 'Service',
      rating: 4.9,
      reviews: 41,
      features: ['Logo Design', 'Brand Guidelines', '3 Revisions', 'Source Files'],
      bestseller: false,
      digital: false
    }
  ]

  const categories = [
    { name: 'All Products', count: 6, active: true },
    { name: 'Courses', count: 1, active: false },
    { name: 'Templates', count: 1, active: false },
    { name: 'Assets', count: 1, active: false },
    { name: 'eBooks', count: 1, active: false },
    { name: 'Services', count: 2, active: false }
  ]

  const features = [
    {
      icon: Download,
      title: 'Instant Download',
      description: 'Get immediate access to your digital products'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your payment information is protected and secure'
    },
    {
      icon: Zap,
      title: 'Lifetime Updates',
      description: 'Receive free updates for all digital products'
    }
  ]

  return (
    <SectionLayout
      title="Digital Store"
      description="Premium resources and services for creators"
      onBack={onBack}
      icon={ShoppingBag}
    >
      {/* Store Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10"
          >
            <feature.icon size={32} className="text-orange-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        ))}
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
                  ? 'bg-orange-500 text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-orange-400/50 transition-colors group"
          >
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <ShoppingBag size={48} className="text-white/80" />
              </div>
              {product.bestseller && (
                <div className="absolute top-3 left-3 bg-orange-500 text-black px-2 py-1 rounded text-xs font-medium">
                  Bestseller
                </div>
              )}
              <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                {product.category}
              </div>
              {product.digital && (
                <div className="absolute bottom-3 left-3 bg-green-500/80 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Download size={12} className="mr-1" />
                  Digital
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-300 text-sm ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-1 mb-4">
                {product.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="text-gray-400 text-xs flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-sm line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                  <CreditCard size={14} className="mr-1" />
                  Buy Now
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Store Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: 'Happy Customers', value: '500+' },
          { label: 'Products Sold', value: '1.2K' },
          { label: 'Average Rating', value: '4.8' },
          { label: 'Countries Served', value: '35' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-1">{stat.value}</h3>
            <p className="text-gray-300 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-8 border border-orange-500/20"
      >
        <ShoppingBag size={48} className="text-orange-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
        <p className="text-gray-300 mb-6">
          Don't see what you're looking for? I offer custom services tailored to your specific needs and requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-orange-600 hover:bg-orange-700">
            Request Custom Work
          </Button>
          <Button variant="outline">
            Contact for Pricing
          </Button>
        </div>
      </motion.div>
    </SectionLayout>
  )
}

export default StoreSection

