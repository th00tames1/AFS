# Deployment Guide

## Current Deployment

The Advanced Forestry Systems Lab website is currently deployed and accessible at:
**https://zkutgone.manus.space**

## Local Development

To run the website locally for development or testing:

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Recommended version: 18.x or higher

2. **Navigate to project directory**
   ```bash
   cd forestry-lab-website-package
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - The website will be available at `http://localhost:5173`
   - Changes will automatically reload in the browser

## Production Build

To create a production build:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

The production files will be in the `dist/` directory and can be deployed to any static hosting service.

## Alternative Deployment Options

### Netlify
1. Create account at netlify.com
2. Drag and drop the `dist/` folder to Netlify
3. Your site will be live with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. Create workflow file for automatic deployment

## Updating Content

### Research Projects
- Edit `src/components/pages/Research.jsx`
- Add/modify projects in the `researchProjects` array

### Team Information
- Edit `src/components/pages/Team.jsx`
- Update team member details

### Contact Information
- Edit `src/components/pages/Contact.jsx`
- Update contact details and office hours

### Images
- Add new images to `src/assets/images/`
- Import and reference in component files

After making changes, rebuild with `npm run build` and redeploy.

## Technical Support

For technical questions about the website:
- Check the README.md file for detailed documentation
- Contact Dr. Heesung Woo at Heesung.woo@oregonstate.edu

