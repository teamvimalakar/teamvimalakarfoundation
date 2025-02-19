TEAM VIMALAKAR FOUNDATION SITE FILE STRUCTURE:

/vimalakar-foundation
│── /admin              # Admin dashboard (Hidden from public)
│   │── index.html      # Admin login page
│   │── dashboard.html  # Admin dashboard
│   │── styles.css      # Admin CSS styles
│   │── script.js       # Admin JS functions
│   │── auth.js         # Admin authentication logic
│   │── firebase.js     # Firebase integration for database & authentication
│── /assets             # Static assets (Images, icons, fonts)
│   │── /css           # CSS Stylesheets
│   │   ├── main.css   # Global styles
│   │   ├── responsive.css # Media queries for responsiveness
│   │   ├── animations.css # Animations & transitions
│   │── /js            # JavaScript files
│   │   ├── main.js    # Main script (Navigation, Dark Mode, Lazy Loading, etc.)
│   │   ├── firebase.js # Firebase integration for main website
│   │   ├── chatbot.js # AI-powered chatbot script
│   │   ├── aos.js     # Animations on Scroll (AOS library)
│   │   ├── gsap.js    # Smooth animations (GSAP library)
│   │── /img           # Images, logos, banners
│   │── /fonts         # Custom fonts if required
│   │   ├── OpenSans-Regular.woff2
│   │   ├── OpenSans-Bold.woff2
│   │   ├── Roboto-Regular.woff2
│   │   ├── Roboto-Bold.woff2
│   │   ├── custom-font.ttf
│   │   ├── custom-font.woff
│   │   ├── custom-font.woff2
│── /components        # Reusable UI components (Modular approach)
│   │── header.html    # Site header/navigation
│   │── footer.html    # Site footer
│   │── sidebar.html   # Sidebar for admin (if needed)
│── /pages             # Main content pages
│   │── index.html     # Home Page
│   │── about.html     # About Us Page
│   │── services.html  # Services Page
│   │── donation.html  # Donation Page
│   │── gallery.html   # Gallery Page
│   │── reports.html   # Reports & Impact Page
│   │── team.html      # Our People Page
│   │── volunteer.html # Volunteer & Contact Us Page
│   │── events.html    # Events & Campaigns Page
│   │── blog.html      # Blog & News Page
│   │── careers.html   # Careers & Internships Page
│   │── involved.html  # Get Involved Page
│   │── testimonials.html # Testimonials & Stories Page
│── /database          # JSON or Firebase-based data storage (optional)
│   │── data.json      # Static data for site content if not using Firebase
│── /scripts           # Backend scripts (if needed)
│   │── utils.js   # Common utility functions (date formatting, form validation, etc.).
│   │── analytics.js  # Google Analytics, Facebook Pixel, or tracking.
│   │── counters.js # Dynamic counters for live statistics.
│   │── notifications.js # Custom alerts, popups, or toast notifications.
│── .gitignore         # Git ignore file (if using version control)
│── .htaccess          # Security & URL rewriting rules
│── sitemap.xml        # SEO sitemap for search engines
│── robots.txt         # SEO & Crawling instructions
│── README.md          # Project documentation
