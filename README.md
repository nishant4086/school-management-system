# School Management System

A comprehensive full-stack school management dashboard built with modern technologies. This application provides role-based access control for administrators, teachers, students, and parents to manage all school operations efficiently.

**Author:** [@nishant4086](https://github.com/nishant4086)  
**Portfolio:** [nishantrankawat.rf.gd](https://nishantrankawat.rf.gd)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Database](#database)
- [Authentication](#authentication)
- [License](#license)

---

## ✨ Features

### Core Features
- **Role-Based Access Control** - Different dashboards and permissions for Admin, Teacher, Student, and Parent roles
- **User Authentication** - Secure authentication using Clerk with JWT tokens
- **Real-Time Dashboard** - Interactive dashboards with live data updates
- **Search & Filter** - Advanced search and filtering capabilities across all modules

### Admin Dashboard
- Manage students, teachers, parents, and admin users
- Create and manage classes, subjects, and grades
- Schedule lessons and exams
- Create and manage events and announcements
- View financial reports and attendance statistics

### Teacher Dashboard
- View assigned classes and students
- Manage lessons and assignments
- Record student attendance
- Create and publish results
- View class performance analytics

### Student Dashboard
- View enrolled classes and subjects
- Check assignments and exam schedules
- View grades and results
- Track attendance records
- Access class announcements

### Parent Dashboard
- Monitor child's academic progress
- View attendance and grades
- Check assignments and exam results
- Receive announcements and events
- Track overall performance

### Common Features
- **Announcements** - System-wide announcements management
- **Events Calendar** - School events and holiday management
- **Attendance Tracking** - Student attendance records and reports
- **Performance Analytics** - Charts and statistics for attendance, grades, and counts
- **User Profiles** - Detailed user profiles with contact information

---

## 🛠 Tech Stack

### Frontend
- **Next.js 14.2.35** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **React Toastify** - Toast notifications

### Backend & Database
- **Node.js** - Runtime environment
- **Prisma ORM 5.19.1** - Database ORM with type safety
- **PostgreSQL** - Primary database (via Supabase)
- **Supabase** - Cloud PostgreSQL provider with connection pooling

### Authentication & Security
- **Clerk v5.4.1** - User authentication and management
- **JWT** - Secure token-based authentication
- **Next.js Middleware** - Route protection and authorization

### UI Components & Visualization
- **React Big Calendar** - Event calendar component
- **Recharts** - Data visualization and charts
- **ESLint 9.0.0** - Code linting

### Development & DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Git** - Version control
- **npm** - Package manager

---

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Protected dashboard routes
│   │   │   ├── admin/          # Admin dashboard
│   │   │   ├── teacher/        # Teacher dashboard
│   │   │   ├── student/        # Student dashboard
│   │   │   ├── parent/         # Parent dashboard
│   │   │   └── list/           # Data management pages
│   │   ├── sign-in/            # Authentication page
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Root redirect page
│   ├── components/             # Reusable React components
│   │   ├── forms/              # Form components
│   │   ├── UserCard.tsx        # User statistics card
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Menu.tsx            # Sidebar menu
│   │   └── ...                 # Other components
│   ├── lib/                    # Utility functions
│   │   ├── actions.ts          # Server actions
│   │   ├── data.ts             # Data fetching utilities
│   │   ├── prisma.ts           # Prisma client
│   │   ├── settings.ts         # Route configuration
│   │   └── utils.ts            # Helper functions
│   └── middleware.ts           # Next.js middleware for auth
├── prisma/
│   ├── schema.prisma           # Database schema
│   ├── seed.ts                 # Database seeding
│   └── migrations/             # Database migrations
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── docker-compose.yml          # Docker configuration
└── package.json                # Dependencies
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (Supabase account)
- Clerk account for authentication
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/nishant4086/school-management-system.git
cd school-management-system
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Variables
Create a `.env.local` file in the root directory with the following variables (see [Environment Variables](#environment-variables) section).

### Step 4: Setup Database
```bash
# Push Prisma schema to database
npx prisma db push

# (Optional) Seed database with sample data
npx prisma db seed
```

### Step 5: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key

# Database URLs
DATABASE_URL="postgresql://user:password@host:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://user:password@host:5432/postgres"

# Auth Bypass (for testing only)
BYPASS_AUTH=false
```

### Getting Your Credentials

1. **Clerk Keys:**
   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Create a new application
   - Copy your publishable and secret keys

2. **Supabase:**
   - Create account at [Supabase](https://supabase.com)
   - Create new project
   - Get database URL from Project Settings → Database

---

## ▶️ Running the Application

### Development Server
```bash
npm run dev
```
Server runs on http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Run with Docker
```bash
docker-compose up
```

---

## 🗄️ Database

### Database Schema

The application uses the following main models:

- **Admin** - System administrators
- **Student** - Students enrolled in school
- **Teacher** - Teaching staff
- **Parent** - Parents/guardians of students
- **Class** - School classes/grades
- **Subject** - Course subjects
- **Lesson** - Individual lessons
- **Exam** - Examinations
- **Assignment** - Student assignments
- **Result** - Exam and assignment results
- **Attendance** - Student attendance records
- **Event** - School events
- **Announcement** - School announcements

### Database Migrations

Migrations are stored in `prisma/migrations/`. To create a new migration:

```bash
npx prisma migrate dev --name migration_name
```

---

## 🔒 Authentication

The application uses **Clerk** for authentication with role-based access control:

1. User signs in with Clerk
2. Role is stored in Clerk's `publicMetadata`
3. Middleware checks role and authorizes route access
4. Different dashboards shown based on user role

### Creating Admin User

To create an admin user:
1. Sign in via Clerk
2. Go to Clerk Dashboard → Users
3. Select the user
4. Update `publicMetadata` with: `{ "role": "admin" }`

---

## 📊 Database Diagram

See `ER_DIAGRAM.md` for the complete entity-relationship diagram.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Nishant Rankawat** (@nishant4086)

- GitHub: [@nishant4086](https://github.com/nishant4086)
- Portfolio: [nishantrankawat.rf.gd](https://nishantrankawat.rf.gd)

---

## 🙏 Acknowledgments

- Original concept from Lama Dev
- Built with [Next.js](https://nextjs.org/)
- Authentication by [Clerk](https://clerk.com/)
- Database by [Supabase](https://supabase.com/)
- ORM by [Prisma](https://www.prisma.io/)

---

## 📞 Support

For issues, questions, or suggestions, please:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Contact via portfolio: [nishantrankawat.rf.gd](https://nishantrankawat.rf.gd)

---

**Last Updated:** April 19, 2026
