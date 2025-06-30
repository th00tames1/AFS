import { ArrowRight, Cpu, TreePine, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

// Import images
import forestManagement from '../../assets/images/forest_management.webp'
import forestryOverview from '../../assets/images/forestry_overview.png'
import osucampus1 from '../../assets/images/osu_campus_1.jpg'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${forestManagement})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Advanced Forestry Systems Lab
            </h1>
            <p className="text-xl lg:text-3xl mb-8 text-green-100">
              Pioneering the future of forestry through cutting-edge sensor technology, robotics, and AI applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/research">
                  Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-green-900">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What is Advanced Forestry Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The future of forestry innovation through precision technology, smart systems, and autonomous solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision Forestry</h3>
              <p className="text-gray-600">
                Data-driven planning, site-specific management, and optimal forest operations using GNSS, LiDAR, and GIS technologies
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Forestry</h3>
              <p className="text-gray-600">
                Operation connectivity, supply chain visibility, and predictive decision-making through IoT, cloud systems, and big data
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Automation</h3>
              <p className="text-gray-600">
                Real-time decision making, robotics, sensor fusion, and autonomous platforms for next-generation forest management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Current Research Projects
            </h2>
            <p className="text-xl text-gray-600">
              Innovative solutions for modern forestry challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={forestryOverview} 
                alt="Forestry Research Overview" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">12 Active Research Projects</h3>
                <p className="text-gray-600 mb-4">
                  From low-cost LiDAR systems to AI-powered plant disease detection, our lab is at the forefront of forestry innovation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Robotics & Automation</h4>
                    <p className="text-sm text-gray-600">Forest firefighter robots, autonomous vehicles, and reforestation modules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">AI & Machine Learning</h4>
                    <p className="text-sm text-gray-600">Plant disease detection, computer vision, and predictive analytics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 w-2 h-2 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Sensor Technology</h4>
                    <p className="text-sm text-gray-600">LiDAR systems, GPR technology, and mobile sensing solutions</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/research">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Director Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={osucampus1} 
                alt="Oregon State University Campus" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Led by Dr. Heesung Woo
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Assistant Professor at Oregon State University's College of Forestry, Department of Forest Engineering, Resources, and Management.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Research Focus111</h3>
                  <p className="text-gray-600">Precision forestry, robotics applications, sensor integration, and machine learning in forestry operations</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Academic Background</h3>
                  <p className="text-gray-600">Ph.D. in Information Technology (University of Tasmania), M.S. in Forest Engineering (Humboldt State University)</p>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/team">
                    Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

