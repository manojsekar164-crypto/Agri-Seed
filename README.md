# 🌱 AgriSeed Shop

> A modern e-commerce platform for premium quality seeds tailored for Indian farmers and gardeners.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://agri-seed.vercel.app)
[![GitHub](https://img.shields.io/badge/github-repository-blue)](https://github.com/manojsekar164-crypto/Agri-Seed)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

### Core Functionality
- 🌱 **Product Catalog** - Browse premium seeds by category (vegetables, fruits, flowers, herbs)
- 🛒 **Shopping Cart** - Add, remove, and manage items with real-time updates
- ❤️ **Wishlist** - Save favorite products for later
- 🔐 **User Authentication** - Secure signup and login system
- 💳 **Checkout Process** - Streamlined order placement
- 🔍 **Category Filtering** - Easy navigation through product categories

### Technical Highlights
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI/UX** - Clean design with Tailwind CSS
- 🔒 **Secure** - Password hashing with bcryptjs
- 🌐 **RESTful API** - Well-structured backend architecture

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI library for building interactive interfaces |
| TypeScript | Type-safe JavaScript for better code quality |
| Vite | Next-generation frontend tooling |
| React Router v7 | Client-side routing |
| Tailwind CSS | Utility-first CSS framework |
| Lucide React | Beautiful icon library |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime environment |
| Express | Web application framework |
| MongoDB | NoSQL database |
| bcryptjs | Password hashing and security |
| CORS | Cross-origin resource sharing |
| dotenv | Environment variable management |

## Project Structure

```
seed123/
├── seed-main/          # Frontend React application
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── context/    # React context providers
│   │   ├── config/     # Configuration files
│   │   └── data/       # Static data
│   └── package.json
└── server/             # Backend API
    ├── routes/         # API routes
    ├── config/         # Database configuration
    ├── scripts/        # Utility scripts
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local installation or Atlas account) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager
- **Git** - [Download](https://git-scm.com/downloads)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/manojsekar164-crypto/Agri-Seed.git
cd Agri-Seed/seed123
```

2. **Install Frontend Dependencies**
```bash
cd seed-main
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../server
npm install
```

4. **Set up Environment Variables**

Create a `.env` file in the `server` directory:
```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=seedshop
PORT=5000
```

Create a `.env` file in the `seed-main` directory:
```env
VITE_API_URL=http://localhost:5000
```

5. **Seed the Database (Optional)**
```bash
cd server
npm run seed
```

### Running the Application

#### Option 1: Run Both Servers Separately

**Terminal 1 - Backend Server:**
```bash
cd server
npm start
```
✅ Backend runs on: http://localhost:5000

**Terminal 2 - Frontend Development Server:**
```bash
cd seed-main
npm run dev
```
✅ Frontend runs on: http://localhost:5173

#### Option 2: Quick Start Script (Optional)

You can create a start script to run both servers simultaneously using tools like `concurrently` or `npm-run-all`.

### 🎯 Access the Application

Once both servers are running:
- **Frontend**: Open http://localhost:5173 in your browser
- **Backend API**: Available at http://localhost:5000/api

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/users` | Get all users (admin) |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| GET | `/api/products/category/:category` | Get products by category |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create a new order |
| GET | `/api/orders` | Get all orders |

## 🌐 Deployment

### Frontend Deployment (Vercel)

The frontend is deployed on **Vercel**:
- **Live URL**: [Your Vercel URL]
- **Auto-deployment**: Enabled on push to main branch

**Deploy your own:**
1. Fork this repository
2. Sign up at [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Set Root Directory to `seed123/seed-main`
5. Add environment variable: `VITE_API_URL`
6. Deploy!

### Backend Deployment Options

The backend can be deployed to various platforms:

| Platform | Free Tier | Database | Difficulty |
|----------|-----------|----------|------------|
| [Render](https://render.com) | ✅ Yes | Separate | Easy |
| [Railway](https://railway.app) | ✅ Yes | Included | Easy |
| [Heroku](https://heroku.com) | ❌ No | Add-on | Medium |
| [DigitalOcean](https://digitalocean.com) | ❌ No | Separate | Advanced |

**Recommended**: Railway (includes free MongoDB database)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manoj Sekar**
- GitHub: [@manojsekar164-crypto](https://github.com/manojsekar164-crypto)
- Email: manojsekar164@gmail.com

## 🙏 Acknowledgments

- Thanks to all contributors who help improve this project
- Inspired by the need to support individuals on taking correct edible seeds.
- Built with modern web technologies for optimal performance

## 📞 Support

If you have any questions or need help, please:
- Open an [issue](https://github.com/manojsekar164-crypto/Agri-Seed/issues)
- Contact the author directly

---

<div align="center">
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
