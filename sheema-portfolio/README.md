# Sheema Kaunain - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my skills, projects, and experience as a Computer Science Engineer.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Interactive Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Performance Optimized**: Fast loading with optimized images and code
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: SVG icons and text-based links (no external icon libraries)
- **Fonts**: Inter from Google Fonts
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sheema-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
sheema-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Personal Information
Update the following files with your personal details:
- `src/components/Hero.tsx` - Personal introduction and contact info
- `src/components/About.tsx` - About section content
- `src/components/Projects.tsx` - Project details and links
- `src/components/Experience.tsx` - Work experience
- `src/components/Education.tsx` - Education details
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors can be customized in `tailwind.config.js`
- Fonts can be changed in `src/index.css`
- Spacing and layout can be adjusted using Tailwind classes

### Images
- Replace placeholder images in the components with your actual images
- Add images to the `public/` directory for easy access

## 📧 Contact Form Setup

The contact form uses a mailto link to open the user's email client. For a production setup, you can:

1. **Use a backend service**: Implement an API endpoint to handle form submissions
2. **Use email services**: Integrate with services like EmailJS, Formspree, or Netlify Forms
3. **Use serverless functions**: Deploy serverless functions with Vercel or Netlify

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: sheemakaunainsh@gmail.com
- **Phone**: +91 9342731307
- **LinkedIn**: [linkedin.com/in/sheema-kaunain](https://www.linkedin.com/in/sheema-kaunain/)
- **GitHub**: [github.com/amal-iyka](https://github.com/amal-iyka)
