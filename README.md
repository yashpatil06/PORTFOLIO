# 🧑‍💻 Yash Patil — Portfolio Website

A modern, single-page portfolio website built with vanilla HTML, CSS, and JavaScript. Designed to showcase my professional experience, projects, skills, certifications, and achievements as a **Data Analyst** and **Python & SQL Developer**.

> 🔗 **Live Site**: https://yashpatil06.github.io/PORTFOLIO/

---

## ✨ Features

- **9 Full Sections** — Landing, About Me, Work Experience, Education, Projects, Skills, Certifications, Achievements, and Contact
- **Scroll-Triggered Animations** — Slide, fade, zoom, flip, and typewriter effects powered by `IntersectionObserver`
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile viewports
- **Working Contact Form** — Emails delivered directly via [Web3Forms](https://web3forms.com) API (no backend required)
- **Interactive Elements** — 3D card tilts on certifications, flip cards for Mission/Vision, animated stat counters, and elastic tech tags
- **Premium Aesthetics** — Warm cream/brown color palette, Inter font, glassmorphism-inspired cards, and micro-animations throughout

---

## 🗂️ Project Structure

```
PORTFOLIO/
├── index.html        # Main HTML — all 9 sections
├── style.css         # Complete design system, animations & responsive styles
├── app.js            # Scroll triggers, form handling, counters & interactions
├── assets/
│   ├── profile.png           # Profile photo
│   ├── deloitte_cert.png     # Deloitte certification image
│   ├── altair_cert.png       # Altair certification image
│   └── google_cert.png       # Google certification image
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

No build tools, frameworks, or package managers needed — just a browser.

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashpatil06/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in any modern browser, **or**
   - Use a local server for best results:
     ```bash
     # Python
     python -m http.server 8080

     # Node.js (if installed)
     npx serve .
     ```
   - Visit `http://localhost:8080`

---

## 📬 Contact Form Setup

The contact form uses **Web3Forms** to deliver messages directly to your email inbox — no backend server needed.

### How It Works

1. Visitor fills out the form and clicks **Send Message**
2. Form data is sent via `fetch` POST to the Web3Forms API
3. Web3Forms delivers the message as an email to the configured inbox
4. Success/error states are shown to the visitor with toast notifications

### Configuration

The access key is stored in `index.html` inside the form:

```html
<input type="hidden" name="access_key" value="your-access-key-here">
```

To get your own key:
1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address
3. Copy the access key from your inbox
4. Replace the value in the hidden input field

---

## 🎨 Design System

| Token                    | Value          | Usage                        |
|--------------------------|----------------|------------------------------|
| `--bg-cream-light`       | `#fdfbf7`      | Primary background           |
| `--bg-cream-warm`        | `#f5ebe0`      | Alternate section background |
| `--accent-brown-dark`    | `#3d2c1f`      | Headings, primary text       |
| `--accent-brown-light`   | `#b08968`      | Accents, icons, highlights   |
| `--accent-gold`          | `#ddb892`      | Badges, decorative elements  |
| Font                     | Inter (Google) | All typography               |

---

## 📱 Responsive Breakpoints

| Breakpoint   | Target         | Key Changes                              |
|-------------|----------------|------------------------------------------|
| `> 1024px`   | Desktop        | Full grid layouts, side-by-side panels   |
| `≤ 1024px`   | Tablet         | 2-column grids, stacked about section    |
| `≤ 768px`    | Mobile         | Single column, hamburger nav, stacked cards |

---

## 🛠️ Tech Stack

| Technology | Purpose                              |
|------------|--------------------------------------|
| HTML5      | Semantic structure & SEO             |
| CSS3       | Design system, animations, responsive |
| JavaScript | Scroll triggers, form handling, interactions |
| Web3Forms  | Contact form email delivery          |
| Google Fonts | Inter typeface                     |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact

- **Email**: yashpatil4648@gmail.com
- **LinkedIn**: [linkedin.com/in/yashpatil06](https://linkedin.com/in/yashpatil06)
- **GitHub**: [github.com/yashpatil06](https://github.com/yashpatil06)
- **Location**: Pune, Maharashtra, India
