import { Mail, Phone, MapPin, GraduationCap, Award, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import images
import osucampus from '../../assets/images/osu_campus_1.jpg'
import heesung from '../../assets/images/Heesung.png'

const Team = () => {
  const graduateStudents = [
    {
      name: "Jiyeon Ryu", 
      program: "Ph.D Graduate Student",
      research: "LiDAR Application in Forestry",
      placeholder: true
    },
    {
      name: "Taehyung Kim",
      program: "Ph.D Graduate Student", 
      research: "Forest Navigation System",
      placeholder: true
    },
    {
      name: "Heechan Jeong",
      program: "MS Graduate Student",
      research: "Computer Vision Application in Forestry",
      placeholder: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-800 via-green-800 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${osucampus})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Research Team
            </h1>
            <p className="text-xl text-orange-100">
              Meet the dedicated researchers advancing the future of forestry through innovation and technology
            </p>
          </div>
        </div>
      </section>

      {/* Lab Director Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={heesung} 
                alt="Heesung Woo" 
                className="rounded-lg shadow-lg w-80 h-auto"
              />
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dr. Heesung Woo</h2>
                <p className="text-xl text-orange-600 font-medium mb-4">Assistant Professor & Lab Director</p>
                <p className="text-lg text-gray-600">
                  Department of Forest Engineering, Resources, and Management<br/>
                  College of Forestry, Oregon State University
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Research Interests
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Robotics application in forestry</li>
                    <li>• Sensor integration in forestry</li>
                    <li>• Precision forestry and advanced forestry systems</li>
                    <li>• Machine learning and deep learning in forestry</li>
                    <li>• Forest operations in harvesting system</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-green-600" />
                    Academic Background
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <p className="font-medium">Ph.D. in Information Technology (2016-2020)</p>
                      <p className="text-sm">University of Tasmania (UTAS), Hobart, Tasmania, Australia</p>
                      <p className="text-sm italic">Focus: Precision Forestry applied with ICT and GIS technologies</p>
                    </div>
                    <div>
                      <p className="font-medium">Master of Science in Forest Engineering (2014-2016)</p>
                      <p className="text-sm">Humboldt State University (HSU), Arcata, California, USA</p>
                      <p className="text-sm italic">Focus: Forest Operation and Engineering</p>
                    </div>
                    <div>
                      <p className="font-medium">Master of Science in Forestry (2011-2013)</p>
                      <p className="text-sm">Kangwon National University (KNU), Chuncheon, South Korea</p>
                      <p className="text-sm italic">Focus: Forest Management</p>
                    </div>
                    <div>
                      <p className="font-medium">Bachelor of Science in Agriculture and Forestry (2005-2011)</p>
                      <p className="text-sm">Kangwon National University (KNU), Chuncheon, South Korea</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-600" />
                    Professional Experience
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div>
                      <p className="font-medium">Assistant Professor (Oct 2023 – Present)</p>
                      <p className="text-sm">Oregon State University, College of Forestry, Corvallis, Oregon</p>
                    </div>
                    <div>
                      <p className="font-medium">Research Professor (Feb 2021 – Oct 2023)</p>
                      <p className="text-sm">Kangwon National University, School of Forest and Environmental Sciences</p>
                    </div>
                    <div>
                      <p className="font-medium">Research Professor (Jul 2019 – Jan 2023)</p>
                      <p className="text-sm">Kyungpook National University, Department of Forestry</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="bg-orange-600 hover:bg-orange-700">
                    <a href="mailto:Heesung.woo@oregonstate.edu">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Dr. Woo
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:+15413602484">
                      <Phone className="h-4 w-4 mr-2" />
                      (541) 360-2484
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduate Students Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 mr-3 text-green-600" />
              Graduate Students
            </h2>
            <p className="text-xl text-gray-600">
              Talented researchers contributing to cutting-edge forestry innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {graduateStudents.map((student, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <GraduationCap className="h-10 w-10 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600">Photo coming soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{student.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{student.program}</p>
                  <p className="text-gray-600 mb-4">{student.research}</p>
                  <div className="text-sm text-gray-500">
                    Research focus and publications will be updated as projects progress.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lab Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Our collective research impact and recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-2">27</h3>
              <p className="text-gray-600">Publications</p>
              <p className="text-sm text-gray-500">(2018-2025)</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-700 mb-2">15</h3>
              <p className="text-gray-600">Conferences & Talks</p>
              <p className="text-sm text-gray-500">(2018-2025)</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-purple-700 mb-2">14</h3>
              <p className="text-gray-600">Awards & Honors</p>
              <p className="text-sm text-gray-500">Recognition</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-orange-700 mb-2">11</h3>
              <p className="text-gray-600">Academic Activities</p>
              <p className="text-sm text-gray-500">(2023-)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Research Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are always looking for passionate researchers interested in advancing forestry through technology. 
            If you're interested in pursuing graduate studies or research collaboration, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="mailto:Heesung.woo@oregonstate.edu">
                <Mail className="h-5 w-5 mr-2" />
                Contact for Opportunities
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://forestry.oregonstate.edu" target="_blank" rel="noopener noreferrer">
                <MapPin className="h-5 w-5 mr-2" />
                Visit OSU Forestry
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team

