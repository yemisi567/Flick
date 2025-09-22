# Flick 💳

A modern, responsive financial dashboard application built with React that provides comprehensive payment and transaction management capabilities for merchants and businesses.

## Features

### Dashboard & Analytics

- **Overview Dashboard** - Real-time performance metrics and transaction insights
- **Multi-Currency Support** - Nigerian Naira (NGN), US Dollar (USD), and Kenyan Shilling (KES)
- **Transaction Analytics** - Visual charts and graphs showing transaction trends over time
- **Real-time Balance Tracking** - Live balance updates across multiple currencies

### Financial Management

- **Balance Management** - Track and manage balances across different currencies
- **Payment Processing** - Comprehensive payment management system
- **Direct Debit** - Automated recurring payment management
- **OTC Dashboard** - Over-the-counter transaction management

### User Experience

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, intuitive interface built with Tailwind CSS
- **Interactive Sidebar** - Collapsible navigation with smooth animations
- **Search & Filter** - Advanced search and filtering capabilities for transactions

### Technical Features

- **Multi-page Application** - Single Page Application (SPA) with React Router
- **Component-based Architecture** - Reusable, modular React components
- **Icon System** - Custom SVG icon components for consistent design
- **State Management** - React hooks for efficient state management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Flick-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── header/          # Header component
│   ├── sidebar/         # Navigation sidebar
│   ├── icons/           # Custom SVG icon components
│   └── toggle-switch/   # Toggle switch component
├── pages/               # Page components
│   ├── balance/         # Balance management
│   ├── data/            # Data analytics
│   ├── direct-debit/    # Direct debit management
│   ├── get-started/     # Onboarding page
│   ├── otc-dashboard/   # OTC transaction dashboard
│   ├── overview/        # Main dashboard
│   ├── payments/        # Payment management
│   └── settings/        # Application settings
├── App.js              # Main application component
└── index.js            # Application entry point
```

## Technologies Used

- **React 18.3.1** - Frontend framework
- **React Router DOM 6.26.2** - Client-side routing
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Ant Design 5.20.6** - UI component library
- **Create React App** - Development environment

## Design System

### Color Palette

- **Primary**: Custom primary colors for branding
- **Background**: `#F6F7F9` - Light gray background
- **Cards**: White with rounded corners (`12px` border radius)
- **Text**: Various shades of gray for hierarchy

### Typography

- **Headings**: Custom font weights and sizes
- **Body Text**: Optimized for readability
- **Status Indicators**: Color-coded for transaction states

### Components

- **Cards**: Consistent white background with subtle shadows
- **Buttons**: Rounded corners with hover states
- **Icons**: Custom SVG icons for consistency
- **Forms**: Clean input fields with proper spacing

## Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
REACT_APP_API_URL=
REACT_APP_ENVIRONMENT=
```

### Tailwind Configuration

The project uses a custom Tailwind configuration (`tailwind.config.js`) with:

- Custom color schemes
- Responsive breakpoints
- Custom spacing and sizing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
alegbeyemi@gmail.com

---

**Built with ❤️ by the Mojisola Alegbe**
