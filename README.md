# Project Rock A Bye Baby Website

A professional digital platform designed to expose family court injustice, parental alienation, and financial abuse through documented testimony and legal advocacy.

## 🎯 Project Overview

This website serves as both a digital testimony and a catalyst for systemic reform, documenting 17 years of constitutional violations and advocating for children's rights to meaningful relationships with both parents.

## 🏗️ Website Structure

### Core Pages

- **`index.html`** - Homepage with hero section, mission overview, and call-to-action
- **`about.html`** - Mission statement, personal letter from Lamont Evans, and project values
- **`timeline.html`** - Interactive timeline spanning 2008-2025 with detailed chronology
- **`case-files.html`** - Legal documentation and case information (Federal & Civil lawsuits)
- **`letters.html`** - Personal letters and sealed communications (to be created)
- **`media.html`** - Media outreach and press kit resources (to be created)
- **`blog.html`** - Blog functionality and resources section (to be created)
- **`take-action.html`** - Advocacy tools and action items (to be created)
- **`contact.html`** - Multiple contact forms for different audiences

### Assets & Styling

- **`style.css`** - Main stylesheet with responsive design and professional styling
- **`timeline.css`** - Timeline-specific styles and animations
- **`script.js`** - Core JavaScript functionality for navigation and interactions
- **`timeline.js`** - Interactive timeline features and animations

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#1a365d` - Trust, authority, professionalism
- **Secondary Blue**: `#2c5282` - Supporting elements
- **Accent Gold**: `#d69e2e` - Justice, attention, call-to-action
- **Accent Red**: `#c53030` - Urgency, emotional impact (used sparingly)
- **Light Gray**: `#f7fafc` - Background sections
- **White**: `#ffffff` - Primary background

### Typography

- **Headings**: Crimson Text (serif) - Authority and gravitas
- **Body Text**: Inter (sans-serif) - Readability and modern feel

### Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: <480px

## ⚡ Key Features

### 1. Interactive Timeline

- Scroll-based animations
- Era-based navigation
- Progress indicators
- Mobile-responsive design
- Keyboard navigation support (Ctrl+1-5)

### 2. Professional Navigation

- Fixed header with smooth scrolling
- Mobile hamburger menu
- Active page highlighting
- Responsive design

### 3. Legal Documentation

- Expandable case file sections
- Document organization system
- Evidence categorization
- Privacy-conscious access controls

### 4. Multi-Purpose Contact System

- General inquiries
- Media/Press contacts
- Legal professional outreach
- Parent support and story sharing
- Form validation and security

### 5. SEO Optimization

- Semantic HTML structure
- Meta descriptions and keywords
- Proper heading hierarchy
- Image alt attributes (when images added)

## 🚀 Getting Started

### Local Development

1. Clone or download the project files
2. Open `index.html` in a web browser
3. For best experience, serve through a local web server:

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (with http-server)
   npx http-server
   ```

### File Organization

```
project-root/
├── index.html          # Homepage
├── about.html          # About the Project
├── timeline.html       # Interactive Timeline
├── case-files.html     # Legal Case Files
├── contact.html        # Contact Forms
├── style.css           # Main Styles
├── timeline.css        # Timeline Styles
├── script.js           # Core JavaScript
├── timeline.js         # Timeline JavaScript
└── README.md           # This file
```

## 📝 Content Management

### Adding New Timeline Events

1. Open `timeline.html`
2. Locate the appropriate era section
3. Add new timeline item following this structure:

```html
<div class="timeline-item" data-year="YYYY">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <h3>Event Title</h3>
    <span class="timeline-date">Date</span>
    <p>Event description...</p>
    <div class="timeline-details">
      <span class="detail-tag">Tag 1</span>
      <span class="detail-tag">Tag 2</span>
    </div>
  </div>
</div>
```

### Updating Case Information

1. Open `case-files.html`
2. Modify content in appropriate sections:
   - Federal lawsuit details
   - Civil lawsuit information
   - Evidence categories
   - Document counts

### Contact Form Management

- Forms use standard HTML5 validation
- Backend integration required for actual form submission
- Current setup shows success messages via JavaScript
- Consider integration with services like:
  - Netlify Forms
  - Formspree
  - EmailJS
  - Custom backend solution

## 🔒 Security & Privacy Considerations

### Document Protection

- Sensitive documents are referenced but not directly accessible
- Password protection or approval system recommended for document access
- Legal document previews use placeholders

### Contact Form Security

- Client-side validation implemented
- Server-side validation required for production
- Spam protection recommended (reCAPTCHA, etc.)
- Secure storage of submitted information required

### Privacy Protection

- No personal information about minors displayed
- Sensitive case details appropriately summarized
- Contact information kept confidential by design

## 📱 Mobile Optimization

### Responsive Features

- Fluid grid layouts
- Mobile-first CSS approach
- Touch-friendly navigation
- Optimized typography scaling
- Compressed animations for performance

### Performance Considerations

- Optimized CSS and JavaScript
- Minimal external dependencies
- Efficient font loading
- Image optimization (when images added)

## 🛠️ Maintenance & Updates

### Regular Updates Needed

1. **Timeline Events** - Add new developments as they occur
2. **Case Status** - Update legal proceedings status
3. **Blog Content** - Regular blog posts (when blog section created)
4. **Media Coverage** - Update media section with new coverage
5. **Resources** - Keep external links current

### Technical Maintenance

- Test forms regularly
- Check for broken links
- Validate HTML/CSS
- Test mobile responsiveness
- Monitor page load speeds

## 🔧 Customization Guide

### Changing Colors

Update CSS custom properties in `style.css`:

```css
:root {
  --primary-blue: #your-color;
  --accent-gold: #your-color;
  /* etc. */
}
```

### Adding New Pages

1. Create new HTML file following existing structure
2. Update navigation in all pages
3. Add appropriate CSS styles
4. Test responsive design

### Modifying Typography

Update font imports and CSS variables:

```css
--font-serif: "Your-Font", serif;
--font-sans: "Your-Font", sans-serif;
```

## 📊 Analytics & Tracking

### Recommended Analytics

- Google Analytics 4
- Privacy-focused alternatives (Plausible, Fathom)
- Contact form conversion tracking
- Page engagement metrics

### Key Metrics to Track

- Page views and unique visitors
- Time spent on timeline page
- Contact form completions
- Media inquiry submissions
- Resource downloads (when implemented)

## 🚀 Deployment Options

### Static Hosting Services

- **Netlify** (recommended) - Automatic deployments, form handling
- **Vercel** - Excellent performance and GitHub integration
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3** - Scalable with CloudFront CDN

### Domain Setup

- Purchase professional domain name
- Configure DNS settings
- Set up SSL certificate (usually automatic with modern hosts)
- Consider email setup for contact forms

## 🤝 Contributing

### Content Updates

- Timeline events and case developments
- Blog posts and resources
- Media coverage and press mentions
- Legal document updates (with appropriate privacy controls)

### Technical Improvements

- Performance optimizations
- Accessibility enhancements
- SEO improvements
- Mobile experience refinements

## 📞 Support

For technical issues or questions about the website:

- Review this README first
- Check browser console for JavaScript errors
- Validate HTML/CSS using online validators
- Test in multiple browsers and devices

## 📄 Legal Notice

This website contains factual information based on personal experience and documented evidence. All content is provided for educational and advocacy purposes. Legal documents and case information are part of active proceedings or public record.

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Author**: Project Rock A Bye Baby
