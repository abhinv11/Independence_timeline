# Journey to Independence 🇮🇳

An immersive, interactive timeline exploring India's struggle for independence from 1613 to 1950. This project showcases India's rich cultural heritage through modern web technologies, featuring fullscreen storytelling, smooth scroll animations, and historical imagery.

**Created by Abhinav Jaswal**

## ✨ Features

- **🎨 Immersive Fullscreen Design**: Each historical event takes up the full viewport with stunning background imagery
- **📱 Responsive Experience**: Optimized for desktop, tablet, and mobile devices
- **🚀 Smooth Scroll Snapping**: Perfect section-to-section navigation
- **🎭 Interactive Navigation**: Quick jump menu to key historical milestones
- **⚡ Performance Optimized**: Lazy loading, smooth animations, and accessibility support
- **🏷️ Historical Context**: Tags and detailed descriptions for each timeline event
- **🎪 Advanced Animations**: Glassmorphism effects, parallax scrolling, and milestone highlighting

## 📅 Timeline Coverage

The timeline covers **21 key historical events** from India's journey to independence:

- **1613**: East India Company Arrives
- **1757**: Battle of Plassey
- **1857**: The Great Revolt
- **1885**: Indian National Congress Founded
- **1915**: Gandhi Returns to India
- **1930**: Dandi Salt March
- **1942**: Quit India Movement
- **1947**: Independence Achieved
- **1950**: Republic Day

## 🛠️ Technologies Used

- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Advanced features including CSS Grid, Flexbox, backdrop-filter, and CSS custom properties
- **JavaScript (ES6+)**: Intersection Observer API, smooth scrolling, and interactive navigation
- **Google Fonts**: Inter (modern sans-serif) + Playfair Display (elegant serif)
- **Modern Web APIs**: Scroll behavior, intersection observers, and performance optimization

## 📂 Project Structure

```
Independence/
├── src/
│   ├── index.html           # Main HTML document with 21 timeline sections
│   ├── css/
│   │   └── style.css        # Advanced CSS with animations and responsive design
│   ├── js/
│   │   └── main.js          # Interactive JavaScript for navigation and animations
│   └── assets/              # Historical images for each timeline event
│       ├── 1613.jpg
│       ├── 23_june_1757.jpg
│       ├── May_10_1857_July_8_1859.jpg
│       ├── December_28_1885.jpg
│       ├── January_9_1915.jpg
│       ├── March_12_April_5_1930.jpg
│       ├── August_8_1942.jpg
│       ├── August_14_15_1947.jpg
│       ├── January_26_1950.jpg
│       └── ... (21 historical images total)
├── package.json             # Project configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

To get started with this project, clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd Independence
```

## 📦 Installation

Install the necessary dependencies using npm:

```bash
npm install
```

## 🎯 Usage

### Local Development

To run the website locally, open `src/index.html` in your web browser:

```bash
# Open directly in browser
open src/index.html

# Or use a local server (recommended)
npx serve src
# Then visit http://localhost:3000
```

### Live Server (Recommended)

For the best development experience with automatic reloading:

```bash
# Using Live Server extension in VS Code
# Or using Python
python -m http.server 8000

# Or using Node.js
npx http-server src -p 8000
```

## 🎮 Navigation

- **Scroll**: Use mouse wheel or arrow keys to navigate through timeline
- **Navigation Menu**: Click the menu button (top-right) for quick access to key events
- **Keyboard**: Use arrow keys for smooth scrolling
- **Touch**: Swipe up/down on mobile devices

## 🎨 Key Features Explained

### Scroll Snapping
Each historical event takes exactly one viewport height (100vh) with perfect scroll snapping for seamless navigation.

### Interactive Timeline Tags
Key events feature contextual tags:
- **Gandhi**, **Satyagraha** (1915)
- **Salt March**, **Civil Disobedience** (1930)
- **Quit India**, **Do or Die** (1942)
- **Freedom**, **Tryst with Destiny** (1947)

### Performance Optimizations
- Lazy loading for background images
- CSS `will-change` properties for smooth animations
- Intersection Observer API for efficient scroll handling
- Reduced motion support for accessibility

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify (Recommended)
1. Drag and drop the `src` folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments

### Vercel
```bash
npx vercel --prod
```

## 🎯 Hackathon Optimization

This project is optimized for hackathon presentations:

- **Visual Impact**: Fullscreen imagery with professional animations
- **Technical Excellence**: Modern web APIs and performance optimizations
- **Cultural Significance**: Respectful representation of Indian history
- **User Experience**: Intuitive navigation and responsive design
- **Code Quality**: Clean, documented, and maintainable code

## 🤝 Contributing

Contributions are welcome! Areas for enhancement:

- Additional historical events
- Multilingual support (Hindi, regional languages)
- Audio narration for events
- Interactive maps showing historical locations
- Timeline filtering by themes (Political, Social, Military)

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for more details.

## 🙏 Acknowledgments

- Historical content sourced from verified historical records
- Images used for educational purposes under fair use
- Google Fonts for typography
- Modern browser APIs for enhanced user experience

## 📞 Contact

**Abhinav Jaswal**
- Created with ❤️ for cultural heritage preservation
- Built for hackathon excellence

---

*"They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit."* - Shaheed Bhagat Singh