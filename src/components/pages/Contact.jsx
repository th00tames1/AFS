import { Mail, Phone, MapPin, Clock, Building, ExternalLink, MessageSquare, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

// Import images
import osucampus1 from '../../assets/images/osu_campus_1.jpg'
import osucampus2 from '../../assets/images/osu_campus_2.jpg'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    const mailtoLink = `mailto:Heesung.woo@oregonstate.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-left font-medium text-gray-700 mb-1">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-left font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g., Request for Quote"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label className="block text-left font-medium text-gray-700 mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your inquiry or message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            rows={6}
          />
        </div>
        <div className="pt-4">
          <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 w-full">
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-green-800 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${osucampus1})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              Get in touch with our research team for collaboration opportunities, academic inquiries, or general information
            </p>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-teal-300" />
              <span className="text-lg">Oregon State University, Corvallis, Oregon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              {/* Director Contact */}
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advisor</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Heesung Woo</h4>
                    <p className="text-gray-600">Assistant Professor</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a 
                          href="mailto:Heesung.woo@oregonstate.edu" 
                          className="text-green-600 hover:text-green-700 transition-colors"
                        >
                          Heesung.woo@oregonstate.edu
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone (United States)</p>
                        <a 
                          href="tel:+15413602484" 
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          (541) 360-2484
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                  <p><span className="font-medium">Appointments:</span> Available by email arrangement</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="mailto:Heesung.woo@oregonstate.edu">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+15413602484">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Office
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Meeting
                  </a>
                </Button>
              </div>
            </div>

            {/* Location & Campus */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Location & Campus</h2>
              
              <div className="mb-8">
                <img 
                  src={osucampus2} 
                  alt="Oregon State University Campus" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Building className="h-6 w-6 mr-2 text-gray-600" />
                  Address
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium text-gray-900">Dr. Heesung Woo Office</p>
                  <p>352 Peavy Forest Science Center</p>
                  <p>3100 SW Jefferson Way</p>
                  <p>Corvallis, Oregon 97331, United States</p>
                  <hr className="border-t border-gray-200 my-6"></hr>
                  <p className="font-medium text-gray-900">Graduate Sudent Office</p>
                  <p>178 Peavy Forest Science Center</p>
                  <p>3100 SW Jefferson Way</p>
                  <p>Corvallis, Oregon 97331, United States</p>
                  <p></p>
                </div>
                
                <div className="mt-6">
                  <Button asChild variant="outline" className="w-full">
                    <a 
                      href="https://maps.google.com/?q=Oregon+State+University+College+of+Forestry+Corvallis+Oregon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-5 w-5 mr-2" />
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Lab
            </h2>
            <p className="text-xl text-gray-600">
              Information for prospective students, researchers, and collaborators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Research Inquiries</h3>
              <p className="text-gray-600 mb-4">
                Interested in our research? Contact us to learn about current projects and collaboration opportunities.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="mailto:Heesung.woo@oregonstate.edu?subject=Research Inquiry">
                  Contact Us
                </a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Graduate Studies</h3>
              <p className="text-gray-600 mb-4">
                Considering graduate studies in forestry technology? Learn about our programs and research opportunities.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="https://ferm.forestry.oregonstate.edu/graduate-programs" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Partnership</h3>
              <p className="text-gray-600 mb-4">
                Industry partners interested in forestry technology innovation and applied research collaborations.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="mailto:Heesung.woo@oregonstate.edu?subject=Industry Partnership">
                  Partner With Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Oregon State University Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore the broader OSU community and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">College of Forestry</h3>
              <p className="text-gray-600 mb-4">
                Learn more about Oregon State University's College of Forestry, one of the leading forestry schools in the world.
              </p>
              <Button asChild variant="outline">
                <a href="https://forestry.oregonstate.edu" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit College Website
                </a>
              </Button>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Oregon State University</h3>
              <p className="text-gray-600 mb-4">
                Discover more about OSU's research excellence, academic programs, and campus life in Corvallis, Oregon.
              </p>
              <Button asChild variant="outline">
                <a href="https://oregonstate.edu" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit OSU Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Alternative */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're a prospective student, researcher, or industry partner, we'd love to hear from you. 
            Reach out to discuss collaboration opportunities, research projects, or general inquiries about our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="mailto:Heesung.woo@oregonstate.edu">
                <Mail className="h-5 w-5 mr-2" />
                Send Us an Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/research">
                <ExternalLink className="h-5 w-5 mr-2" />
                Explore Our Research
              </a>
            </Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Contact

