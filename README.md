# Advanced Forestry Systems Lab Website

A professional website for the Advanced Forestry Systems Lab at Oregon State University, led by Dr. Heesung Woo.

## 🌐 Live Website

The website is deployed and accessible at: **https://test**

## 📋 Project Overview

This website showcases the cutting-edge research and innovations of the Advanced Forestry Systems Lab, featuring:

- **12 Active Research Projects** spanning robotics, AI, sensor technology, and mobile applications
- **Comprehensive Lab Information** including team members, publications, and achievements
- **Professional Design** with responsive layout and modern UI components
- **Rich Content** based on actual research data and lab activities

## 🚀 Features

### Pages Included
- **Home**: Overview of the lab and key research areas
- **About**: Detailed explanation of Advanced Forestry Systems and technology integration
- **Research**: Interactive showcase of all 12 research projects with filtering capabilities
- **Team**: Information about Dr. Heesung Woo and graduate students
- **Publications**: Research achievements, publications, and academic activities
- **Contact**: Complete contact information and location details

### Technical Features
- Responsive design for desktop and mobile devices
- Interactive research project filtering
- Professional navigation with active page indicators
- High-quality images and visual assets
- Modern UI components using Tailwind CSS and Lucide icons
- Fast loading and optimized performance

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Local Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Production files will be generated in the `dist/` directory

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
forestry-lab-website/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   └── images/        # Website images and visual assets
│   ├── components/
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Research.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Publications.jsx
│   │   │   └── Contact.jsx
│   │   ├── Header.jsx     # Navigation header
│   │   └── Footer.jsx     # Website footer
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite build configuration
└── README.md            # This file
```

## 🎨 Design & Content

### Visual Assets
The website includes carefully selected images covering:
- Forest management and operations
- LiDAR technology and scanning
- Oregon State University campus
- Robotics and automation in forestry
- Drone applications in forestry

### Content Areas
- **Research Projects**: 12 detailed projects with categories:
  - Robotics & Automation (4 projects)
  - AI & Machine Learning (3 projects)
  - Sensor Technology (3 projects)
  - Mobile Applications (2 projects)
- **Academic Information**: Complete background of Dr. Heesung Woo
- **Lab Achievements**: 27 publications, 15 conferences, 14 awards
- **Contact Details**: Complete contact information and office hours

## 🔧 Customization

### Adding New Research Projects
1. Edit `src/components/pages/Research.jsx`
2. Add new project object to the `researchProjects` array
3. Include appropriate category, description, and technologies

### Updating Team Information
1. Edit `src/components/pages/Team.jsx`
2. Update graduate student information in the `graduateStudents` array
3. Add photos by placing images in `src/assets/images/` and updating image imports

### Modifying Contact Information
1. Edit `src/components/pages/Contact.jsx`
2. Update contact details, office hours, and location information

### Adding New Images
1. Place images in `src/assets/images/`
2. Import images in the relevant component files
3. Update image references in the components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🌟 Key Features Implemented

### Interactive Elements
- Research project filtering by category
- Responsive navigation menu
- Hover effects and transitions
- Modal dialogs for project details

### Professional Styling
- Oregon State University color scheme
- Consistent typography and spacing
- Professional gradients and backgrounds
- High-quality image integration

### Performance Optimizations
- Optimized image formats (WebP, JPG)
- Efficient component structure
- Fast build times with Vite
- Minimal bundle size

## 📞 Support & Contact

For questions about the website or technical support:

**Dr. Heesung Woo**
- Email: Heesung.woo@oregonstate.edu
- Phone: (541) 360-2484
- Office: Department of Forest Engineering, Resources, and Management
- Location: Oregon State University, Corvallis, Oregon

## 📄 License

This project is created for the Advanced Forestry Systems Lab at Oregon State University. All content and research information is property of the respective researchers and Oregon State University.

## 🙏 Acknowledgments

- Oregon State University College of Forestry
- Advanced Forestry Systems Lab research team
- All contributors to the research projects featured on this website

---

**Built with ❤️ for advancing forestry through technology**

