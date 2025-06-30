import { useState } from 'react'
import { ChevronRight, ExternalLink, Cpu, Camera, Smartphone, Radar, Navigation, Eye, Thermometer, Zap, TreePine, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import images
import lidarScanning from '../../assets/images/lidar_scanning.png'
import spotRobot from '../../assets/images/spot_robot.jpg'
import droneForestry from '../../assets/images/drone_forestry.jpg'

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const researchProjects = [
    {
      id: 1,
      title: "Low-Cost LiDAR System",
      category: "Sensor Technology",
      icon: <Radar className="h-6 w-6" />,
      description: "Developing affordable LiDAR systems for widespread forest monitoring and inventory applications.",
      details: "Creating cost-effective LiDAR solutions that maintain high accuracy while reducing deployment costs for forest management operations.",
      image: lidarScanning,
      technologies: ["LiDAR", "Point Cloud Processing", "3D Mapping"]
    },
    {
      id: 2,
      title: "Forestry Multi-Functional Vehicle",
      category: "Robotics & Automation",
      icon: <Cpu className="h-6 w-6" />,
      description: "Autonomous vehicle platform for multiple forestry operations including data collection and field operations.",
      details: "Development of versatile autonomous vehicles capable of real-time data collection, navigation, and various forestry tasks in challenging terrain.",
      image: spotRobot,
      technologies: ["Autonomous Navigation", "Real-time Data Collection", "Multi-sensor Integration"]
    },
    {
      id: 3,
      title: "Best-performing Sensors in Forest Applications",
      category: "Sensor Technology",
      icon: <Camera className="h-6 w-6" />,
      description: "Comparative analysis of LiDAR sensors and depth cameras for optimal forest monitoring performance.",
      details: "Comprehensive evaluation of various sensor technologies to determine the most effective solutions for different forest monitoring applications.",
      image: lidarScanning,
      technologies: ["LiDAR Sensors", "Depth Cameras", "Performance Analysis"]
    },
    {
      id: 4,
      title: "Reforestation Modules: Seedball & Tree Planting Shooter",
      category: "Robotics & Automation",
      icon: <TreePine className="h-6 w-6" />,
      description: "UAV and UGV mounted systems for automated seedball dispersal and tree planting in remote areas.",
      details: "Landscape-scale seed dispersal for ecological restoration using drone-mounted seedball shooters and heavy-lift drones equipped with tree planting systems for remote and steep terrain.",
      image: droneForestry,
      technologies: ["UAV Systems", "UGV Platforms", "Automated Planting", "3D Design"]
    },
    {
      id: 5,
      title: "SlashScan: iOS App for Slash Pile Volume Estimation",
      category: "Mobile Applications",
      icon: <Smartphone className="h-6 w-6" />,
      description: "3D mapping and volume estimation of slash piles using LiDAR SLAM on iOS devices.",
      details: "Mobile application using Swift and C++ for 360° data collection, in-app 3D mapping, and volume estimation with validation against UAV-LiDAR datasets.",
      image: lidarScanning,
      technologies: ["iOS Development", "LiDAR SLAM", "Swift", "C++", "3D Mapping"]
    },
    {
      id: 6,
      title: "Forest Inventory Tool for LiDAR Point Cloud",
      category: "AI & Machine Learning",
      icon: <Eye className="h-6 w-6" />,
      description: "LiDAR-driven segmentation tool for analyzing complex forest structures and individual tree identification.",
      details: "Advanced software for processing complex forest LiDAR data, featuring automated tree segmentation, stem and crown classification, and ground point identification.",
      image: lidarScanning,
      technologies: ["Point Cloud Processing", "Tree Segmentation", "Machine Learning", "Forest Inventory"]
    },
    {
      id: 7,
      title: "AI Applications in Plant Disease Detection",
      category: "AI & Machine Learning",
      icon: <Eye className="h-6 w-6" />,
      description: "Deep learning models for automatic detection of leaf spot disease and pseudothecia in forest trees.",
      details: "Development of YOLO-based segmentation models for detecting plant diseases including leaf spot in Black Cottonwood and pseudothecia in Douglas-fir, with PC software for automated analysis.",
      image: lidarScanning,
      technologies: ["YOLO11", "Deep Learning", "Computer Vision", "Disease Detection", "Image Segmentation"]
    },
    {
      id: 8,
      title: "Smartphone-based Fire Risk Assessment Tool",
      category: "Mobile Applications",
      icon: <Thermometer className="h-6 w-6" />,
      description: "Mobile solution for wildland-urban interface fire risk assessment using thermal imaging.",
      details: "IR-based technology for moisture analysis and quantitative fire-risk grades using mobile thermal cameras for WUI fire risk assessment.",
      image: droneForestry,
      technologies: ["Thermal Imaging", "Mobile IR Camera", "Fire Risk Assessment", "Moisture Analysis"]
    },
    {
      id: 9,
      title: "Ground Penetrating Radar (GPR) System",
      category: "Sensor Technology",
      icon: <Radar className="h-6 w-6" />,
      description: "Non-destructive subsurface scanning for root system and trunk anomaly detection.",
      details: "UAV and UGV mounted GPR systems with different frequency sensors for automated subsurface scanning and root system analysis.",
      image: spotRobot,
      technologies: ["Ground Penetrating Radar", "UAV Integration", "UGV Platforms", "Subsurface Scanning"]
    },
    {
      id: 10,
      title: "ForestNav: Advanced Log Tracking",
      category: "Navigation & Tracking",
      icon: <Navigation className="h-6 w-6" />,
      description: "Optimization of harvesting operations and supply chain with advanced log tracking technologies.",
      details: "Comprehensive system including GNSS-RTK positioning, StanForD data analysis, real-time communication between harvester and forwarder, and digital log inventory management.",
      image: lidarScanning,
      technologies: ["GNSS-RTK", "StanForD Data", "Real-time Communication", "Supply Chain Optimization"]
    },
    {
      id: 11,
      title: "Computer Vision: RGB-based Log Detection",
      category: "AI & Machine Learning",
      icon: <Eye className="h-6 w-6" />,
      description: "Individual log segmentation and tracking from RGB images using advanced computer vision.",
      details: "Video-based log tracking for position and orientation analysis, featuring oriented bounding box detection, instance segmentation, and RGB-D SLAM-based real-time tracking.",
      image: lidarScanning,
      technologies: ["Computer Vision", "Object Detection", "Video Tracking", "RGB-D SLAM", "Real-time Processing"]
    },
    {
      id: 12,
      title: "Forest Firefighter Assistant Robot System",
      category: "Robotics & Automation",
      icon: <Shield className="h-6 w-6" />,
      description: "Firefighter assistance functions using sensor fusion for forest fire response.",
      details: "Advanced robot system with SLAM 3D mapping, return-to-home functionality, object recognition, firefighter tracking, hazard detection, and emergency alert systems.",
      image: spotRobot,
      technologies: ["SLAM", "Sensor Fusion", "Object Recognition", "Hazard Detection", "Emergency Systems"]
    }
  ]

  const categories = ["All", "Robotics & Automation", "AI & Machine Learning", "Sensor Technology", "Mobile Applications", "Navigation & Tracking"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? researchProjects 
    : researchProjects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-green-800 to-teal-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Current Research Projects
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Take a look at our research shaping the future of forestry
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">27 Publications (2018-2025)</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">15 Conferences & Talks</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">14 Awards & Honors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-600">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-green-600 hover:text-green-700">
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      {selectedProject.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-600">{selectedProject.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.details}</p>
                  
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Research Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Impact & Innovation
            </h2>
            <p className="text-xl text-gray-600">
              Our research contributes to global forestry innovation and sustainable practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">12</h3>
              <p className="text-gray-600">Active Research Projects</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">27</h3>
              <p className="text-gray-600">Publications (2018-2025)</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">Conference Presentations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">14</h3>
              <p className="text-gray-600">Awards & Honors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Research

