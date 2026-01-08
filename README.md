# 🚀 React Mini-Projects Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.7-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A comprehensive collection of React applications showcasing modern web development practices, built with React 19 and Vite.**

[Live Demos](#-live-projects) • [Documentation](#-project-details) • [Tech Stack](#-tech-stack) • [Deployment](#-deployment)

</div>

---

## 🌐 Live Projects

All projects are **live and deployed** on Vercel! Click any project to view it in action.

| Project | Description | Live Demo | Repository |
|---------|-------------|-----------|------------|
| 📝 **Todo App** | Task management with add/delete functionality | [🌐 View Live](https://1-app-theta.vercel.app) | [`Projects/1-app`](Projects/1-app) |
| 🕐 **Bharat Clock** | Real-time clock with live updates | [🌐 View Live](https://2-bharat-clock-flame.vercel.app) | [`Projects/2-bharat-clock`](Projects/2-bharat-clock) |
| 🧮 **Calculator** | Full-featured calculator application | [🌐 View Live](https://calculator-chi-three-94.vercel.app) | [`Projects/4-calculator-1/calculator`](Projects/4-calculator-1/calculator) |
| 🍎 **Food Items** | React Fragments demonstration | [🌐 View Live](https://learning-fragments.vercel.app) | [`18-Fragments/learning-fragments`](18-Fragments/learning-fragments) |
| 📱 **Social Media** | Modern social media UI | [🌐 View Live](https://7-social-media-seven.vercel.app) | [`Projects/7-social-media`](Projects/7-social-media) |

---

## 📁 Project Structure

```
first-react-app/
├── Projects/
│   ├── 1-app/                          # Todo Application
│   │   ├── src/
│   │   ├── vercel.json
│   │   └── README.md
│   ├── 2-bharat-clock/                 # Real-time Clock
│   │   ├── src/
│   │   ├── vercel.json
│   │   └── README.md
│   ├── 4-calculator-1/
│   │   └── calculator/                 # Calculator App
│   │       ├── src/
│   │       ├── vercel.json
│   │       └── README.md
│   └── 7-social-media/                 # Social Media UI
│       ├── src/
│       ├── vercel.json
│       └── README.md
├── 18-Fragments/
│   └── learning-fragments/             # React Fragments Demo
│       ├── src/
│       ├── vercel.json
│       └── README.md
└── README.md                           # This file
```

---

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.0** - Latest React with modern hooks and features
- **Vite 6-7** - Lightning-fast build tool and dev server
- **Bootstrap 5.3-5.7** - Modern, responsive UI framework
- **ESLint 9** - Code quality and linting

### Additional Libraries
- **React Icons** - Icon library for social media app
- **CSS Modules** - Scoped styling for calculator
- **Vercel** - Deployment platform

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**

### Installation & Development

Each project is **independent** and can be run separately:

```bash
# Clone the repository
git clone https://github.com/Amitrajput111/reactAp.git
cd reactAp

# Navigate to any project
cd Projects/1-app  # or any other project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 Project Details

### 📝 Todo Application
**Location:** `Projects/1-app`  
**Live:** [1-app-theta.vercel.app](https://1-app-theta.vercel.app)

**Features:**
- ✅ Add todos with custom names and due dates
- 🗑️ Delete todos functionality
- 📅 Due date management
- 🎨 Modern Bootstrap UI
- ⚡ Optimized React performance

**Key Technologies:** React Hooks, Bootstrap 5, Vite

---

### 🕐 Bharat Clock
**Location:** `Projects/2-bharat-clock`  
**Live:** [2-bharat-clock-flame.vercel.app](https://2-bharat-clock-flame.vercel.app)

**Features:**
- ⏰ Real-time clock updates every second
- 🌍 Indian Standard Time (IST) display
- 📅 Current date display
- 🎨 Clean, professional UI

**Key Technologies:** React useEffect, setInterval, Bootstrap 5

---

### 🧮 Calculator
**Location:** `Projects/4-calculator-1/calculator`  
**Live:** [calculator-chi-three-94.vercel.app](https://calculator-chi-three-94.vercel.app)

**Features:**
- ➕ Basic arithmetic operations (+, -, *, /)
- 🔢 Decimal number support
- 🧹 Clear function
- ⚖️ Instant calculation
- 🎨 CSS Modules styling

**Key Technologies:** React State Management, CSS Modules, Event Handling

---

### 🍎 Food Items (React Fragments)
**Location:** `18-Fragments/learning-fragments`  
**Live:** [learning-fragments.vercel.app](https://learning-fragments.vercel.app)

**Features:**
- ➕ Add food items on Enter key
- 🎯 React Fragments demonstration
- ⚠️ Smart error handling
- 🎨 Bootstrap styling

**Key Technologies:** React Fragments, Event Handling, Conditional Rendering

---

### 📱 Social Media Application
**Location:** `Projects/7-social-media`  
**Live:** [7-social-media-seven.vercel.app](https://7-social-media-seven.vercel.app)

**Features:**
- 🎨 Modern social media UI design
- 📝 Post creation form
- 📊 Sidebar navigation
- 🎯 Header with search
- 👣 Footer component
- 📱 Fully responsive layout

**Key Technologies:** React Components, Bootstrap 5, Flexbox Layout

---

## 🚀 Deployment

All projects are **automatically deployed** on Vercel with:

- ✅ **Automatic builds** on every push to main branch
- ✅ **Production-ready** configurations
- ✅ **SPA routing** support
- ✅ **HTTPS** enabled
- ✅ **Global CDN** distribution

### Deployment Configuration

Each project includes a `vercel.json` file:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Manual Deployment

If you want to deploy manually:

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to project: `cd Projects/1-app`
3. Deploy: `vercel --prod`

---

## 🏗️ Architecture

### Component Structure
- **Modular Design** - Each project uses component-based architecture
- **Reusable Components** - Shared patterns across projects
- **State Management** - React Hooks (useState, useEffect)
- **Event Handling** - Proper event propagation and handling

### Code Quality
- **ESLint** - Configured for all projects
- **Modern JavaScript** - ES6+ features
- **Best Practices** - Following React and Vite conventions
- **Clean Code** - Readable and maintainable

---

## 📚 Learning Resources

This portfolio demonstrates:

- ✅ React Hooks (useState, useEffect)
- ✅ Component Composition
- ✅ Event Handling
- ✅ State Management
- ✅ React Fragments
- ✅ CSS Modules
- ✅ Bootstrap Integration
- ✅ Vite Configuration
- ✅ Production Deployment

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available for **learning and portfolio purposes**.

---

## 👨‍💻 Author

**Amit Rajput**

- GitHub: [@Amitrajput111](https://github.com/Amitrajput111)
- Repository: [reactAp](https://github.com/Amitrajput111/reactAp)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the incredible build tool
- **Bootstrap Team** - For the UI framework
- **Vercel** - For seamless deployment

---

<div align="center">

**⭐ If you find this portfolio helpful, please consider giving it a star! ⭐**

**Built with ❤️ using React + Vite**

[⬆ Back to Top](#-react-mini-projects-portfolio)

</div>
