import { TreePine, Cpu, Zap, Target, Globe, Lightbulb } from 'lucide-react'

// Import images
import forestManagement from '../../assets/images/forest_management.webp'
import lidarForestry from '../../assets/images/lidar_forestry.webp'
import forestRobotics from '../../assets/images/forest_robotics.jpg'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${forestManagement})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Advanced Forestry Systems Lab
            </h1>
            <p className="text-xl text-green-100">
              Pioneering the future of forestry through innovative technology, precision systems, and sustainable solutions
            </p>
          </div>
        </div>
      </section>

      {/* What is Advanced Forestry Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What is Advanced Forestry Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced Forestry represents the convergence of traditional forest management with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={lidarForestry} 
                alt="LiDAR Technology in Forestry" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">The Future of Forestry Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Advanced Forestry Systems combines precision forestry, smart forestry, and autonomous technologies 
                  to create a comprehensive approach to modern forest management.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Precision Forestry</h4>
                    <p className="text-gray-600">Data-driven planning, site-specific management, and optimal forest operations using GNSS, LiDAR, and GIS technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Forestry</h4>
                    <p className="text-gray-600">Operation connectivity, supply chain visibility, and predictive decision-making through IoT, cloud systems, and big data</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Automation</h4>
                    <p className="text-gray-600">Real-time decision making, robotics, sensor fusion, and autonomous platforms for next-generation forest management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Integration
            </h2>
            <p className="text-xl text-gray-600">
              Bridging the gap between traditional forestry and modern innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Robotics & Automation</h3>
              <p className="text-gray-600">
                Autonomous platforms for harvest machines, electric logging trucks, and forest firefighter assistance systems
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sensor Fusion</h3>
              <p className="text-gray-600">
                Integration of LiDAR, depth cameras, thermal imaging, and ground-penetrating radar for comprehensive forest monitoring
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Deep learning models for plant disease detection, computer vision for log tracking, and predictive analytics
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Twin</h3>
              <p className="text-gray-600">
                Virtual forest models for simulation, optimization, and real-time decision making in forest operations
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Edge Computing</h3>
              <p className="text-gray-600">
                Real-time data processing and analysis at the forest edge for immediate decision making and response
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TreePine className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Blockchain</h3>
              <p className="text-gray-600">
                Timber traceability, carbon tracking, and supply chain transparency for sustainable forest management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Innovation Alignment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Aligned with Global Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our research aligns with major technology megatrends: AI Everywhere, Robotics & Automation, 
                and ESG & Traceability, positioning forestry at the forefront of global innovation.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Manufacturing → Smart Factories</h4>
                  <p className="text-gray-600">Intelligent forest management systems</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Agriculture → AgTech</h4>
                  <p className="text-gray-600">Autonomous harvesting and precision forestry</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Logistics → Digital Tracking</h4>
                  <p className="text-gray-600">Timber traceability and carbon tracking</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={forestRobotics} 
                alt="Forest Robotics Technology" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Mission</h3>
              <p className="text-gray-600 text-lg">
                To advance the field of forestry through innovative research, cutting-edge technology development, 
                and practical solutions that enhance forest management efficiency, sustainability, and environmental stewardship.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Vision</h3>
              <p className="text-gray-600 text-lg">
                To be a global leader in advanced forestry systems research, creating transformative technologies 
                that shape the future of sustainable forest management and contribute to environmental conservation worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

