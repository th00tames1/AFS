import { BookOpen, Award, Users, Calendar, ExternalLink, Trophy, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import images
import osucampus1 from '../../assets/images/osu_campus_1.jpg'

const Publications = () => {
  const achievements = [
    {
      category: "Publications",
      count: "27",
      period: "2018-2025",
      icon: <BookOpen className="h-8 w-8" />,
      color: "green",
      description: "Peer-reviewed research publications in leading forestry and technology journals"
    },
    {
      category: "Conferences & Talks",
      count: "15", 
      period: "2018-2025",
      icon: <Users className="h-8 w-8" />,
      color: "blue",
      description: "International conference presentations and invited talks"
    },
    {
      category: "Awards & Honors",
      count: "14",
      period: "Career",
      icon: <Award className="h-8 w-8" />,
      color: "purple",
      description: "Recognition for outstanding research contributions"
    },
    {
      category: "Academic Activities",
      count: "11",
      period: "2023-",
      icon: <Star className="h-8 w-8" />,
      color: "orange",
      description: "Editorial boards, review activities, and academic service"
    }
  ]

  const researchAreas = [
    {
      title: "Precision Forestry & GIS",
      publications: "8 publications",
      description: "Advanced geospatial technologies and precision forestry applications"
    },
    {
      title: "Robotics in Forestry",
      publications: "6 publications", 
      description: "Autonomous systems and robotic applications for forest operations"
    },
    {
      title: "AI & Machine Learning",
      publications: "7 publications",
      description: "Deep learning applications for forest monitoring and analysis"
    },
    {
      title: "Sensor Technology",
      publications: "6 publications",
      description: "LiDAR, thermal imaging, and multi-sensor integration"
    }
  ]

  const recentHighlights = [
    {
      year: "2025",
      title: "Paper in press test",
      journal: "Forests",
      type: "Journal Article",
      status: "In Press",
      link: "#"
    },
    {
      year: "2025",
      title: "Assessing Rutting and Soil Compaction Caused by Wood Extraction Using Traditional and Remote Sensing Methods",
      journal: "Forests",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/f16010086"
    },
    {
      year: "2023",
      title: "Development of Pinaceae and Cupressaceae Essential Oils from Forest Waste in South Korea",
      journal: "Plants",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/plants12193409"
    },
    {
      year: "2022",
      title: "Feasibility of Terrestrial Laser Scanning System for Detecting and Monitoring Surface Displacement of Artificial Slopes on Forest Roads",
      journal: "Sensors & Materials",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.18494/SAM3949"
    },
    {
      year: "2022",
      title: "Forest Inventory Assessment Using Integrated Light Detection and Ranging (LiDAR) Systems: Merged Point Cloud of Airborne and Mobile Laser Scanning Systems",
      journal: "Sensors & Materials",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.18494/SAM3130"
    },
    {
      year: "2022",
      title: "Development of native essential oils from forestry resources in South Korea",
      journal: "Life",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/life12121995"
    },
    {
      year: "2022",
      title: "The Impact of Integrated Harvesting Systems on Productivity, Costs, and Amount of Logging Residue in the Clear-Cutting of a Larix kaempferi (Lamb.) Carr. Stand",
      journal: "Forests",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/f13111941"
    },
    {
      year: "2021",
      title: "Computer Vision Techniques in Forest Inventory Assessment: Improving Accuracy of Tree Diameter Measurement Using Smartphone Camera and Photogrammetry",
      journal: "Sensors & Materials",
      type: "Journal Article",
      status: "Published",
      link: "https://sensors.myu-group.co.jp/sm_pdf/SM2727.pdf"
    },
    {
      year: "2021",
      title: "FIELD: a software tool that integrates harvester data and allometric equations for a dynamic estimation of forest harvesting residues",
      journal: "Forests",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/f12070834"
    },
    {
      year: "2021",
      title: "Net Revenue of Forest Carbon Offset Projects: Application of the Korean Emission Trading System in the Forestry Sector",
      journal: "Forests",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/f12060742"
    },
    {
      year: "2021",
      title: "Application of Maximum Likelihood and Spectral Angle Mapping Classification Techniques to Evaluate Forest Fire Severity from UAV Multi-spectral Images in South Korea",
      journal: "Sensors & Materials",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.18494/SAM.2021.3365"
    },
    {
      year: "2022",
      title: "Soil CO₂ Concentration and Efflux in Pine Forest Plantation Region in South Korea",
      journal: "Sensors & Materials",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.18494/SAM4185"
    },
    {
      year: "2021",
      title: "Effect of Heavy Machine Traffic on Soil CO₂ Concentration and Efflux in a Pinus koraiensis Thinning Stand",
      journal: "Forests",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/f12111497"
    },
    {
      year: "2021",
      title: "Value-Added Forest Carbon Offset Projects: Application of the South Korean Emission Trading System in the Forestry Sector",
      journal: "Preprint",
      type: "Preprint",
      status: "Published",
      link: "https://doi.org/10.20944/preprints202105.0241.v1"
    },
    {
      year: "2020",
      title: "Investigating the Optimal Location of Potential Forest Industry Clusters to Enhance Domestic Timber Utilization in South Korea",
      journal: "Forests",
      type: "Journal Article",
      status: "Published",
      link: "https://doi.org/10.3390/f11090936"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: "bg-green-50 text-green-700 border-green-200",
      blue: "bg-blue-50 text-blue-700 border-blue-200", 
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200"
    }
    return colors[color] || colors.green
  }

  const getIconBg = (color) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600", 
      orange: "bg-orange-100 text-orange-600"
    }
    return colors[color] || colors.green
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-800 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${osucampus1})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Publications & Achievements
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Research contributions advancing the field of forestry through innovative technology and scientific discovery
            </p>
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-medium">Leading research in advanced forestry systems since 2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Impact & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Quantifying our contributions to the forestry research community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 ${getColorClasses(achievement.color)}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getIconBg(achievement.color)}`}>
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">{achievement.count}</h3>
                <h4 className="text-lg font-semibold text-center mb-2">{achievement.category}</h4>
                <p className="text-sm text-center mb-3 opacity-75">{achievement.period}</p>
                <p className="text-sm text-center">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Publication Areas
            </h2>
            <p className="text-xl text-gray-600">
              Our publications span multiple domains of forestry technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {area.publications}
                  </span>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Publications & Presentations
            </h2>
            <p className="text-xl text-gray-600">
              Latest research contributions and scholarly activities
            </p>
          </div>

          <div className="space-y-6">
            {recentHighlights.map((publication, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        {publication.year}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium">
                        {publication.type}
                      </span>
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        publication.status === 'Published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {publication.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{publication.title}</h3>
                    <p className="text-gray-600">{publication.journal}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button variant="outline" size="sm">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              For a complete list of publications and detailed research outputs, please contact our lab directly.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="mailto:Heesung.woo@oregonstate.edu">
                <BookOpen className="h-4 w-4 mr-2" />
                Request Full Publication List
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Service */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Service & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Contributing to the broader scientific community through service and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Editorial Activities</h3>
              <p className="text-gray-600">
                Guest editor and reviewer for leading forestry and technology journals
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conference Organization</h3>
              <p className="text-gray-600">
                Session chair and organizing committee member for international conferences
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Recognition</h3>
              <p className="text-gray-600">
                Awards and honors recognizing contributions to forestry research and innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Research Collaboration
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We welcome collaboration opportunities with researchers, institutions, and industry partners 
            interested in advancing forestry technology and sustainable forest management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="mailto:Heesung.woo@oregonstate.edu">
                <Users className="h-5 w-5 mr-2" />
                Collaborate With Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/research">
                <BookOpen className="h-5 w-5 mr-2" />
                View Our Research
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications

