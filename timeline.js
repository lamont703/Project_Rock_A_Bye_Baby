// Timeline-specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Timeline animation and interaction elements
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineNavLinks = document.querySelectorAll('.timeline-nav-link');
    const timelineEras = document.querySelectorAll('.timeline-era');

    // Create progress indicator
    createProgressIndicator();

    // Initialize timeline animations
    initTimelineAnimations();

    // Handle timeline navigation
    initTimelineNavigation();

    // Handle era highlighting
    initEraHighlighting();

    // Function to create progress indicator
    function createProgressIndicator() {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'timeline-progress';
        
        timelineEras.forEach((era, index) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            dot.setAttribute('data-era', era.id);
            dot.addEventListener('click', () => scrollToEra(era.id));
            progressContainer.appendChild(dot);
        });
        
        document.body.appendChild(progressContainer);
    }

    // Function to initialize timeline animations
    function initTimelineAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Add staggered animation delay
                    const items = entry.target.querySelectorAll('.timeline-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('fade-in');
                        }, index * 200);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        timelineEras.forEach(era => {
            observer.observe(era);
        });
    }

    // Function to initialize timeline navigation
    function initTimelineNavigation() {
        timelineNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                scrollToEra(targetId);
                
                // Update active nav link
                timelineNavLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    // Function to scroll to specific era
    function scrollToEra(eraId) {
        const targetEra = document.getElementById(eraId);
        if (targetEra) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetEra.offsetTop - headerHeight - 50;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Function to initialize era highlighting
    function initEraHighlighting() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const eraId = entry.target.id;
                const navLink = document.querySelector(`[href="#${eraId}"]`);
                const progressDot = document.querySelector(`[data-era="${eraId}"]`);
                
                if (entry.isIntersecting) {
                    // Highlight current era
                    entry.target.classList.add('highlight');
                    
                    // Update navigation
                    timelineNavLinks.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                    
                    // Update progress indicator
                    document.querySelectorAll('.progress-dot').forEach(dot => dot.classList.remove('active'));
                    if (progressDot) progressDot.classList.add('active');
                } else {
                    entry.target.classList.remove('highlight');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-20% 0px -20% 0px'
        });

        timelineEras.forEach(era => {
            observer.observe(era);
        });
    }

    // Timeline item hover effects
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const marker = this.querySelector('.timeline-marker');
            const content = this.querySelector('.timeline-content');
            
            marker.style.transform = 'scale(1.3)';
            content.style.transform = 'translateY(-8px)';
        });

        item.addEventListener('mouseleave', function() {
            const marker = this.querySelector('.timeline-marker');
            const content = this.querySelector('.timeline-content');
            
            marker.style.transform = 'scale(1)';
            content.style.transform = 'translateY(0)';
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    scrollToEra('era1');
                    break;
                case '2':
                    e.preventDefault();
                    scrollToEra('era2');
                    break;
                case '3':
                    e.preventDefault();
                    scrollToEra('era3');
                    break;
                case '4':
                    e.preventDefault();
                    scrollToEra('era4');
                    break;
                case '5':
                    e.preventDefault();
                    scrollToEra('era5');
                    break;
            }
        }
    });

    // Timeline sharing functionality
    function shareTimeline() {
        const url = window.location.href;
        const title = 'Project Rock A Bye Baby Timeline - 17 Years of Legal Battles';
        const text = 'View the complete timeline of constitutional violations and systemic injustice in family court.';
        
        if (navigator.share) {
            navigator.share({
                title: title,
                text: text,
                url: url
            });
        } else {
            // Fallback to copy URL
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Timeline URL copied to clipboard!');
            });
        }
    }

    // Show notification helper
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #48bb78;
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Enhanced scroll behavior for timeline
    let ticking = false;
    
    function updateTimelineProgress() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollProgress = (scrollTop / documentHeight) * 100;
                
                // Update any progress bars or indicators based on scroll
                const progressDots = document.querySelectorAll('.progress-dot');
                progressDots.forEach((dot, index) => {
                    const threshold = (index + 1) * (100 / progressDots.length);
                    if (scrollProgress >= threshold - 20) {
                        dot.style.opacity = '1';
                    } else {
                        dot.style.opacity = '0.3';
                    }
                });
                
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateTimelineProgress);

    // Add timeline print styles
    function addPrintStyles() {
        const printStyles = document.createElement('style');
        printStyles.textContent = `
            @media print {
                .timeline-progress,
                .nav-toggle,
                .timeline-nav,
                .social-links {
                    display: none !important;
                }
                
                .timeline-item {
                    break-inside: avoid;
                    margin-bottom: 2rem;
                }
                
                .timeline-content {
                    box-shadow: none;
                    border: 1px solid #ddd;
                }
                
                .page-hero {
                    background: none !important;
                    color: #000 !important;
                    padding: 2rem 0;
                }
            }
        `;
        document.head.appendChild(printStyles);
    }

    addPrintStyles();

    // Timeline search functionality
    function initTimelineSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search timeline events...';
        searchInput.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 0.25rem;
            z-index: 1000;
            background: white;
        `;
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            timelineItems.forEach(item => {
                const content = item.querySelector('.timeline-content');
                const text = content.textContent.toLowerCase();
                const match = text.includes(searchTerm);
                
                item.style.display = match || searchTerm === '' ? 'flex' : 'none';
                
                if (match && searchTerm !== '') {
                    item.classList.add('search-highlight');
                } else {
                    item.classList.remove('search-highlight');
                }
            });
        });
        
        // Add to page (commented out by default)
        // document.body.appendChild(searchInput);
    }

    // Accessibility improvements
    function enhanceAccessibility() {
        // Add ARIA labels to timeline items
        timelineItems.forEach((item, index) => {
            item.setAttribute('role', 'article');
            item.setAttribute('aria-label', `Timeline event ${index + 1}`);
        });

        // Add keyboard navigation hints
        const keyboardHint = document.createElement('div');
        keyboardHint.textContent = 'Use Ctrl+1-5 to navigate between eras';
        keyboardHint.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        // Show hint on first Ctrl press
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey || e.metaKey) {
                keyboardHint.style.opacity = '1';
                setTimeout(() => {
                    keyboardHint.style.opacity = '0';
                }, 3000);
            }
        }, { once: true });
        
        document.body.appendChild(keyboardHint);
    }

    enhanceAccessibility();

    // Expose utility functions globally for potential use
    window.TimelineUtils = {
        scrollToEra,
        shareTimeline,
        showNotification
    };

    console.log('Timeline initialized with interactive features');
}); 