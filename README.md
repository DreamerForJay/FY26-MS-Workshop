# FY26-MS-Workshop

> 💡 **Project Goal**: Through this project, you will gain a deep understanding of **Azure Static Web Apps** deployment process and learn how to leverage **GitHub Copilot** to boost your development efficiency!

## Personal CV Static Website

A modern, responsive personal CV website built with HTML, CSS, and JavaScript. This project demonstrates a clean, professional portfolio that can be easily deployed to Azure Static Web Apps.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Interactive Elements**: Smooth animations, hover effects, and scroll animations
- **Modern UI**: Clean, professional design with a focus on readability
- **Copy to Clipboard**: Click email to copy it to clipboard
- **Print-Friendly**: Optimized for printing/PDF export

## 📁 Project Structure

```
.
├── index.html              # Main CV page with personal information
├── css/
│   └── style.css          # Styling and theme definitions
├── js/
│   └── main.js            # Interactive functionality and theme toggle
├── AZURE_DEPLOYMENT.md    # Complete guide for Azure deployment
└── README.md              # This file
```

## 🚀 Quick Start

> 💬 **Tip**: If you encounter any issues during development or deployment, make good use of **GitHub Copilot** to help you solve them! Whether it's code problems, deployment challenges, or feature suggestions, Copilot can provide instant assistance.

### Local Development

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd FY26-MS-Workshop
   ```

2. Open with a local server:
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx http-server -p 8080
   
   # Using PHP
   php -S localhost:8080
   ```

3. Open your browser and navigate to `http://localhost:8080`

### Customize Your CV

1. **Personal Information**: Edit `index.html` to update:
   - Name, title, and contact information
   - Work experience and achievements
   - Education details
   - Technical skills
   - Featured projects

2. **Styling**: Modify `css/style.css` to:
   - Change color scheme (update CSS variables in `:root`)
   - Adjust layout and spacing
   - Customize fonts and typography

3. **Functionality**: Enhance `js/main.js` to:
   - Add new interactive features
   - Modify existing animations
   - Implement additional functionality

## 🌐 Deploy to Azure

This website is designed to be easily deployed to Azure Static Web Apps. Follow the comprehensive guide in [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md) for step-by-step instructions.

### Quick Deploy

1. Sign in to [Azure Portal](https://portal.azure.com)
2. Create a new Static Web App
3. Connect your GitHub repository
4. Azure will automatically build and deploy your site!