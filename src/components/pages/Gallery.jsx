import { useState } from 'react'
import osucampus from '../../assets/images/osu_campus_1.jpg'
import pic1 from '../../assets/images/lidar_tree.png'
import pic2 from '../../assets/images/lidar_ind.png'
import pic3 from '../../assets/images/lidar_scanning.png'
import pic4 from '../../assets/images/lidar_als.png'
import forestManagement from '../../assets/images/forest_management.webp'

const images = [pic1, pic2, pic3, pic4]

const Gallery = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${forestManagement})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6 lg:py-24">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-lg text-gray-200">
            Take a look at our latest fieldwork snapshots and activities
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery