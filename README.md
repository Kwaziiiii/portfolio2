# Portfolio - Benkhadra Hajar

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a web developer and BTS SIO student.

## 🌟 Features

### Design & User Experience
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, scroll animations, and dynamic content
- **Accessibility** - Proper ARIA labels and semantic HTML structure

### Content Sections
- **Profile/About** - Personal introduction and educational background
- **Projects Portfolio** - Showcase of completed and in-progress projects
- **Internships** - Professional experience and company collaborations
- **Technology Watch** - Industry insights and continuous learning
- **Contact Form** - Direct communication with social media links

### Technical Features
- **Scroll Animations** - Intersection Observer API for smooth scroll-triggered animations
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Form Integration** - Contact form connected to Formspree
- **Performance Optimized** - Efficient CSS and JavaScript implementation

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Interactive functionality and animations
- **Google Fonts** - Poppins font family for typography

### Tools & Platforms
- **Formspree** - Contact form handling
- **GitHub** - Version control and project hosting
- **VS Code** - Development environment

### Design & Development Tools
- **Figma** - Design and prototyping
- **Bootstrap** - CSS framework knowledge
- **Tailwind CSS** - Utility-first CSS framework
- **Postman** - API testing and development

## 📁 Project Structure

```
portfolio2/
├── 📄 profil.html          # Main profile/about page
├── 📄 projets.html         # Projects showcase
├── 📄 stages.html          # Internships and experience
├── 📄 veille.html          # Technology watch
├── 📄 contact.html         # Contact form and social links
├── 📄 style.css            # Main stylesheet (1575 lines)
├── 📄 script.js            # JavaScript functionality
├── 📄 README.md            # Project documentation
├── 📄 Résumé hajar.pdf     # CV/Resume
├── 📁 icons/               # Technology and tool icons
├── 📁 picture/             # Project screenshots and images
└── 📁 docs/                # Documentation and certificates
    ├── 📁 AP1/             # Academic projects
    ├── 📁 debian/          # Linux installation guides
    └── 📁 zabbix/          # Monitoring tool documentation
```

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/Kwaziiiii/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `profil.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Navigate the site**
   - Start with the Profile page for an overview
   - Explore Projects to see my work
   - Check Stages for professional experience
   - Visit Veille for industry insights
   - Use Contact to get in touch

## 🎨 Customization

### Theme Colors
The site uses CSS custom properties for easy theming. Main color variables in `style.css`:

```css
:root {
    --background-color: #000000;
    --text-primary: #f698e3;
    --text-secondary: #a1a1a1;
    --accent-color: #f698e3;
    --container-bg: rgba(255, 255, 255, 0.05);
    --container-border: rgba(255, 255, 255, 0.1);
}
```

### Adding New Projects
1. Add project image to `picture/` directory
2. Update `projets.html` with new project card
3. Include project description, technologies, and links

### Modifying Content
- **Profile**: Edit `profil.html` for personal information
- **Projects**: Update `projets.html` for project showcase
- **Contact**: Modify `contact.html` for contact information
- **Styling**: Customize `style.css` for design changes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

Key responsive features:
- Mobile navigation menu
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🔧 Development

### File Organization
- **HTML files**: One per main section for easy navigation
- **CSS**: Single file with organized sections and comments
- **JavaScript**: Modular functions for different features
- **Assets**: Organized in dedicated folders (icons, pictures, docs)

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Contact & Social Links

- **LinkedIn**: [Hajar Benkhadra](https://www.linkedin.com/in/hajar-benkhadra-468628332/)
- **GitHub**: [Kwaziiiii](https://github.com/Kwaziiiii)
- **Email**: Via contact form on the website

## 📚 Educational Background

- **Current**: BTS SIO option SLAM (2024-2026)
- **School**: ECOLE IPSSI SQY - GRANDE ECOLE INFORMATIQUE
- **Specialization**: Solutions Logicielles et Applications Métiers

## 🎯 Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Implement project filtering by technology
- [ ] Add dark/light theme preference detection
- [ ] Integrate with GitHub API for live project data
- [ ] Add multilingual support (French/English)
- [ ] Implement PWA features for offline access

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Hajar Benkhadra**


