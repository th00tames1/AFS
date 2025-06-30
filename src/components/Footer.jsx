import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Advanced Forestry Systems Lab</h3>
            <p className="text-gray-300 mb-4">
              Pioneering the future of forestry through advanced technology, robotics, and AI applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-300">
                  Department of Forest Engineering, Resources, and Management
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300 ml-6">
                  College of Forestry, Oregon State University
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <a 
                  href="mailto:Heesung.woo@oregonstate.edu" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Heesung.woo@oregonstate.edu
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-300">(541) 360-2484</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 text-orange-400" />
                <a 
                  href="https://www.oregonstate.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Oregon State University
                </a>
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Focus</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Robotics in Forestry</li>
              <li>• Precision Forestry Systems</li>
              <li>• AI & Machine Learning</li>
              <li>• LiDAR Technology</li>
              <li>• Forest Operations</li>
              <li>• Sensor Integration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Advanced Forestry Systems Lab, Oregon State University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

