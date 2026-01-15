# ThinkMentor - React Learning Platform

<div align="center">
  <h3>🧠 Your Personalized Learning Platform for Success</h3>
</div>

---

## 📋 Table of Contents

- [Steps to Run the Project](#-steps-to-run-the-project)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Assumptions Made](#-assumptions-made)
- [Evaluation Criteria](#-evaluation-criteria)

---

## 🚀 Steps to Run the Project

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation & Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd react-thinkmentor

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173
```

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code quality checks       |

---

## 🛠 Tech Stack

| Category       | Technology       | Version      |
| -------------- | ---------------- | ------------ |
| **Framework**  | React            | 19.2.0       |
| **Build Tool** | Vite             | 7.2.4        |
| **Routing**    | React Router DOM | 7.11.0       |
| **Styling**    | Tailwind CSS     | 4.1.18       |
| **Icons**      | React Icons      | (Feather)    |
| **Font**       | Inter            | Google Fonts |

---

## ✨ Features

### Landing Page

- 🏠 **Hero Section** - Compelling headline with CTA buttons
- 📊 **Stats Section** - Platform statistics display
- 🎯 **Features Grid** - Six feature cards with icons
- 💬 **Testimonials** - User reviews with ratings
- 📞 **CTA Section** - Call-to-action banner
- 🦶 **Footer** - Brand and copyright info

### Authentication Pages

- 🔐 **Login Page** - Email/password authentication with comprehensive validation
- 📝 **SignUp Page** - Full registration with terms acceptance
- 👁 **Password Toggle** - Show/hide password functionality
- ✅ **Real-time Validation** - Instant error feedback with detailed messages
- 🛡 **Strong Password Requirements** - Uppercase, lowercase, number, special character
- 📧 **Email Validation** - RFC-compliant email format checking
- 🚫 **Weak Password Detection** - Blocks common passwords

### Super Admin Dashboard

- 📊 **Dashboard Layout** - Responsive sidebar and header
- 🎛 **Collapsible Sidebar** - Toggle between expanded/collapsed states
- 🔍 **Global Search** - Search functionality in header
- 🌐 **Multi-Language Support** - English, Hindi, Odia translations
- 🌗 **Dark/Light Theme** - Theme toggle with context
- 🔔 **Notifications** - Notification dropdown in header
- 👤 **User Profile** - Profile avatar with dropdown menu

### Users & Roles Management

- 👥 **User Management Tab** - View, edit, delete users
- 🛡 **Role Management Tab** - Manage user roles with permissions
- 📋 **Data Tables** - Sortable tables with checkboxes
- 🔎 **Search & Filters** - Filter and search functionality
- 📤 **Export CSV** - Export data functionality
- ➕ **Add Entry Modal** - Create new users/roles with forms

### Master Data Hub

- 📚 **Boards Tab** - CBSE, ICSE, BSEODISHA board management
- 📖 **Classes Tab** - Class 1-12 management
- 📝 **Subjects Tab** - Subject organization
- 📑 **Chapters Tab** - Chapter management
- 👁 **View/Edit/Delete Actions** - Row-level actions with modals

### Syllabus Management

- 📜 **Syllabus Tab** - Curriculum mapping by board/class/subject
- 🔍 **Filter System** - Filter by board, class, subject
- ➕ **Add/Edit/Delete** - Full CRUD operations

### Settings

- ⚙️ **Platform Settings** - General configuration
- 🔒 **Security Settings** - Password and access controls

---

## 📁 Project Structure

```
react-thinkmentor/
├── src/
│   ├── assets/
│   │   ├── ThinkMentorLogo.jsx     # Reusable brand logo component
│   │   ├── LoginPage.svg           # Login illustration
│   │   └── SignUpPage.svg          # SignUp illustration
│   ├── components/
│   │   └── layout/
│   │       ├── DashboardLayout.jsx  # Main dashboard wrapper
│   │       ├── Header.jsx           # Top navigation header
│   │       └── Sidebar.jsx          # Collapsible sidebar
│   ├── context/
│   │   ├── LanguageContext.jsx     # i18n context provider
│   │   └── ThemeContext.jsx        # Dark/Light theme provider
│   ├── locales/
│   │   ├── en.js                   # English translations
│   │   ├── hi.js                   # Hindi translations
│   │   └── od.js                   # Odia translations
│   ├── pages/
│   │   ├── SuperAdmin/
│   │   │   ├── Dashboard.jsx       # Dashboard home page
│   │   │   ├── DataHub.jsx         # Master Data Hub page
│   │   │   ├── UsersAndRoles.jsx   # User/Role management
│   │   │   ├── Syllabus.jsx        # Syllabus management
│   │   │   └── Settings.jsx        # Settings page
│   │   ├── LandingPage.jsx         # Public landing page
│   │   ├── Login.jsx               # Login page
│   │   └── SignUp.jsx              # Registration page
│   ├── App.jsx                     # Router configuration
│   ├── App.css                     # App styles
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Tailwind + custom variables
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 💡 Assumptions Made

1. **Frontend Only** - No backend API integration; data is sample/mocked
2. **Modern Browsers** - ES6+ support required
3. **Responsive Design** - Mobile-first with tablet/desktop breakpoints
4. **Client-Side Validation** - Comprehensive form validation without server
5. **No Session Management** - No JWT/cookie-based authentication
6. **Inter Font** - Google Fonts Inter used throughout
7. **Role-Based Routes** - Super Admin routes prefixed with `/superadmin/`

---

## ✅ Evaluation Criteria

### 1. UI Accuracy
------------------------------------
| Criteria                 | Status |
| ------------------------ | ------ |
| Landing page with hero   | ✅     |
| Two-column auth layout   | ✅     |
| Responsive dashboard     | ✅     |
| Collapsible sidebar      | ✅     |
| Tab navigation           | ✅     |
| Data tables with actions | ✅     |
| Modal forms              | ✅     |
| Dark/Light theme         | ✅     |

### 2. Code Quality
------------------------------------
| Criteria              | Status |
| --------------------- | ------ |
| Component separation  | ✅     |
| Modular structure     | ✅     |
| Consistent naming     | ✅     |
| Reusable components   | ✅     |
| Context API usage     | ✅     |
| Custom SVG components | ✅     |

### 3. Validation
------------------------------------
| Criteria                | Status |
| ----------------------- | ------ |
| Real-time validation    | ✅     |
| Visual error feedback   | ✅     |
| Form-level validation   | ✅     |
| Strong password rules   | ✅     |
| Email format validation | ✅     |
| Name format validation  | ✅     |
| Weak password detection | ✅     |

### 4. Navigation (Super Admin Routes)
-----------------------------------------------
| Route                     | Page            |
| ------------------------- | --------------- |
| `/`                       | Landing Page    |
| `/login`                  | Login page      |
| `/signup`                 | Sign Up page    |
| `/superadmin/dashboard`   | Dashboard home  |
| `/superadmin/data-hub`    | Master Data Hub |
| `/superadmin/syllabus`    | Syllabus Mgmt   |
| `/superadmin/users-roles` | Users & Roles   |
| `/superadmin/settings`    | Settings        |

### 5. Internationalization (i18n)
---------------------
| Language | Status |
| -------- | ------ |
| English  | ✅     |
| Hindi    | ✅     |
| Odia     | ✅     |

---

<div align="center">
  <p>Built with ❤️ using React + Vite + Tailwind CSS</p>
</div>
