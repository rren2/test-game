# 🎮 Test Game - React Router Tic-Tac-Toe

A modern, interactive tic-tac-toe game built with React Router v7, showcasing advanced React patterns, beautiful UI design, and time travel functionality.

![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![React Router](https://img.shields.io/badge/React%20Router-7.5.3-red?logo=react-router)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.3.3-646CFF?logo=vite)

## ✨ Features

### 🎯 Interactive Tic-Tac-Toe Game
- **Modern UI Design**: Beautiful gradient backgrounds with glass morphism effects
- **Smooth Animations**: Hover effects, scaling transitions, and smooth state changes
- **3D Visual Effects**: Perspective transforms and shadow effects for an engaging experience
- **Color-Coded Players**: Blue for X, Red for O with emoji indicators
- **Winner Detection**: Automatic game state management with celebration effects
- **Draw Detection**: Handles tie games with appropriate messaging

### ⏰ Time Travel Functionality
- **Game History**: Complete move-by-move history tracking
- **Jump to Any Move**: Click any historical state to return to that point
- **Current Move Highlighting**: Visual indication of the current game state
- **New Game Reset**: Fresh start functionality with single click

### 🎨 Design Excellence
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Dark Mode Support**: Seamless dark/light theme switching
- **Custom Animations**: Carefully crafted CSS animations and transitions
- **Accessibility Features**: Keyboard navigation and focus management
- **Modern Typography**: Inter font family with gradient text effects

### 🚀 Technical Features
- **React 19**: Latest React with modern hooks and patterns
- **React Router v7**: File-based routing with nested layouts
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS v4**: Utility-first CSS with custom design system
- **Vite**: Fast development and optimized production builds

## 🏗️ Project Structure

```
test-game/
├── app/
│   ├── routes/
│   │   ├── home.tsx          # Landing page with navigation
│   │   ├── about.tsx         # Application information page
│   │   └── game.tsx          # Interactive tic-tac-toe game
│   ├── welcome/
│   │   ├── logo-dark.svg     # Dark theme logo
│   │   ├── logo-light.svg    # Light theme logo
│   │   └── welcome.tsx       # Welcome component
│   ├── app.css               # Global styles and game-specific CSS
│   ├── root.tsx              # App root component
│   └── routes.ts             # Route configuration
├── public/
│   └── favicon.ico           # App favicon
├── package.json              # Dependencies and scripts
├── react-router.config.ts    # React Router configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```powershell
   git clone <repository-url>
   cd test-game
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start development server**
   ```powershell
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

```powershell
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run TypeScript type checking
npm run typecheck
```

## 🎯 Usage

### Navigation
- **Home Page** (`/`): Landing page with navigation links
- **About Page** (`/about`): Comprehensive application information
- **Game Page** (`/game`): Interactive tic-tac-toe game

### Playing the Game
1. Click any square on the 3x3 grid to make your move
2. Players alternate between X (blue) and O (red)
3. First player to get three in a row wins
4. Use the game history panel to jump to previous moves
5. Click "New Game" to reset and start over

### Game Features
- **Visual Feedback**: Hover effects and smooth animations
- **State Management**: Automatic turn switching and winner detection
- **History Navigation**: Full game replay functionality
- **Responsive Design**: Optimized for desktop and mobile

## 🛠️ Technical Implementation

### React Patterns Used
- **Custom Hooks**: useState for game state management
- **Component Composition**: Modular Square, Board, and Game components
- **Props Interface**: TypeScript interfaces for type safety
- **Event Handling**: Click handlers with proper state updates

### State Management
```typescript
// Game state structure
const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
const [currentMove, setCurrentMove] = useState(0);
const xIsNext = currentMove % 2 === 0;
```

### Styling Architecture
- **Tailwind CSS Classes**: Utility-first styling approach
- **Custom CSS**: Enhanced animations and 3D effects
- **CSS Variables**: Theme-aware color management
- **Responsive Design**: Mobile-first breakpoint system

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients for X player and accents
- **Secondary**: Red gradients for O player
- **Neutral**: Gray scale for backgrounds and text
- **Success**: Green for new game actions
- **Backgrounds**: Gradient overlays with glass morphism

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold weights with gradient text effects
- **Body Text**: Regular weight with proper contrast ratios
- **Interactive**: Medium weight for buttons and links

### Animations
- **Hover Effects**: Scale and lift transformations
- **State Changes**: Smooth opacity and scale transitions
- **Loading States**: Pulse animations for status updates
- **Focus States**: Ring effects for accessibility

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adaptive grid)
- **Desktop**: > 1024px (two-column game layout)

### Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Simplified navigation patterns
- Optimized font sizes for readability
- Reduced motion for better performance

## 🔧 Development

### Code Standards
- **JavaScript**: Single quotes and tabs for indentation
- **TypeScript**: Strict type checking enabled
- **Components**: Functional components with hooks
- **Naming**: Descriptive variable and function names

### Security Considerations
- **Error Handling**: Custom error pages to prevent information exposure
- **Dependencies**: Regular updates and vulnerability scanning
- **HTTP Headers**: Security headers implementation ready
- **Content Security**: XSS protection measures

### Performance Optimizations
- **Code Splitting**: Route-based lazy loading
- **Bundle Optimization**: Vite's built-in optimizations
- **CSS Purging**: Unused style removal in production
- **Image Optimization**: SVG assets for scalability

## 🚀 Deployment

### Build Process
```powershell
# Create production build
npm run build

# Test production build locally
npm start
```

### Production Considerations
- Environment variable configuration
- CDN setup for static assets
- Server-side rendering capabilities
- Error monitoring and logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the established code standards
- Write descriptive commit messages
- Include tests for new features
- Update documentation as needed

## 📄 License

This project is part of a tutorial demonstration and is available for educational purposes.

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework
- **React Router Team**: For the powerful routing solution
- **Tailwind CSS**: For the utility-first CSS framework
- **Vite Team**: For the lightning-fast build tool

---

**Built with ❤️ using React Router v7 and modern web technologies**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🎮 Game Features

### Tic-Tac-Toe Game
- **Interactive Board** - Click squares to make moves
- **Visual Feedback** - Hover effects and smooth animations
- **Winner Detection** - Automatic winner detection with celebration
- **Draw Detection** - Handles draw scenarios gracefully
- **Move History** - Complete history of all moves made
- **Time Travel** - Jump to any previous game state
- **New Game** - Reset and start fresh anytime

### User Interface
- **Gradient Backgrounds** - Beautiful color transitions
- **Glass Morphism** - Modern frosted glass effects
- **Smooth Animations** - CSS transitions and transforms
- **Responsive Layout** - Mobile-first design approach
- **Accessibility** - Keyboard navigation and screen reader support

## 📁 Project Structure

```
test-game/
├── app/
│   ├── routes/              # Route components
│   │   ├── home.tsx         # Landing page
│   │   ├── about.tsx        # About page
│   │   └── game.tsx         # Tic-tac-toe game
│   ├── welcome/             # Welcome component and assets
│   ├── root.tsx             # Root layout component
│   ├── routes.ts            # Route configuration
│   └── app.css              # Global styles and game CSS
├── public/                  # Static assets
├── .react-router/           # Generated React Router types
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
├── react-router.config.ts   # React Router configuration
├── Dockerfile               # Docker containerization
└── README.md                # Project documentation
```

## 🏗️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run typecheck` | Run TypeScript type checking |

## 🐳 Docker Deployment

### Build and Run Locally

```bash
# Build the Docker image
docker build -t test-game .

# Run the container
docker run -p 3000:3000 test-game
```

### Multi-stage Build Process
The Dockerfile uses a multi-stage build process for optimal production images:

1. **Development Dependencies** - Install all dependencies
2. **Production Dependencies** - Install only production dependencies
3. **Build Stage** - Build the application
4. **Production Image** - Minimal image with only necessary files

### Deployment Platforms
This application can be deployed to any platform supporting Docker:

- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Apps**
- **Digital Ocean App Platform**
- **Heroku Container Registry**
- **Fly.io**
- **Railway**
- **Vercel**
- **Netlify**

## 🎨 Styling and Theming

### Tailwind CSS Configuration
- **Custom Color Palette** - Extended color scheme for games
- **Custom Animations** - Smooth transitions and effects
- **Dark Mode** - Automatic system preference detection
- **Custom Components** - Reusable styled components

### Game-Specific Styles
- **Board Styling** - 3D perspective and gradient effects
- **Square Animations** - Hover states and click feedback
- **Status Indicators** - Dynamic color coding for game state
- **History Panel** - Custom scrollbar and button styles

## 🔧 Configuration Files

### React Router Configuration (`react-router.config.ts`)
```typescript
import type { Config } from '@react-router/dev/config';

export default {
  ssr: true, // Server-side rendering enabled
} satisfies Config;
```

### Vite Configuration (`vite.config.ts`)
```typescript
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **React Router Team** - For the powerful routing solution
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite Team** - For the lightning-fast build tool

---

**Built with ❤️ using React Router v7**

For more information about React Router, visit the [official documentation](https://reactrouter.com/)
