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
| **Font**       | Inter            | Google Fonts |

---

## ✨ Features

### Authentication Pages

- 🔐 **Login Page** - Email/password authentication with validation
- 📝 **SignUp Page** - Full registration with terms acceptance
- 👁 **Password Toggle** - Show/hide password functionality
- ✅ **Real-time Validation** - Instant error feedback

### Admin Dashboard

- 📊 **Dashboard Layout** - Responsive sidebar and header
- 🎛 **Collapsible Sidebar** - Toggle between expanded/collapsed states
- 🔍 **Global Search** - Search functionality in header
- 🌐 **Language Selector** - Multi-language support UI
- 🔔 **Notifications** - Notification bell in header
- 👤 **User Profile** - Profile avatar with dropdown

### Users & Roles Management

- 👥 **User Management Tab** - View, edit, delete users
- 🛡 **Role Management Tab** - Manage user roles
- 📋 **Data Tables** - Sortable tables with checkboxes
- 🔎 **Search & Filters** - Filter and search functionality
- 📤 **Export CSV** - Export data functionality
- ➕ **Add Entry** - Create new users/roles

### Master Data Hub

- 📚 **Boards Tab** - CBSE, ICSE board management
- 📖 **Classes Tab** - Class level management
- 📝 **Topics Tab** - Topic organization
- 📑 **Chapters Tab** - Chapter management
- 📜 **Syllabus Tab** - Curriculum mapping
- 👁 **View/Edit/Delete Actions** - Row-level actions

---

## 📁 Project Structure

```
react-thinkmentor/
├── src/
│   ├── assets/                    # Static assets (SVGs, images)
│   ├── components/
│   │   └── layout/
│   │       ├── DashboardLayout.jsx  # Main dashboard wrapper
│   │       ├── Header.jsx           # Top navigation header
│   │       └── Sidebar.jsx          # Collapsible sidebar
│   ├── pages/
│   │   ├── Dashboard.jsx          # Dashboard home page
│   │   ├── DataHub.jsx            # Master Data Hub page
│   │   ├── Login.jsx              # Login page
│   │   ├── SignUp.jsx             # Registration page
│   │   └── UsersAndRoles.jsx      # User/Role management
│   ├── App.jsx                    # Router configuration
│   ├── App.css                    # App styles
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind + custom variables
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 💡 Assumptions Made

1. **Frontend Only** - No backend API integration; data is sample/mocked
2. **Modern Browsers** - ES6+ support required
3. **Desktop-First For Dashboard** - Primary focus on 1024px+ screens
4. **Client-Side Validation** - No server-side validation implemented
5. **No Session Management** - No JWT/cookie-based authentication
6. **Inter Font** - Google Fonts Inter used throughout

---

## ✅ Evaluation Criteria

### 1. UI Accuracy

| Criteria                 | Status |
| ------------------------ | ------ |
| Two-column auth layout   | ✅     |
| Responsive dashboard     | ✅     |
| Collapsible sidebar      | ✅     |
| Tab navigation           | ✅     |
| Data tables with actions | ✅     |

### 2. Code Quality

| Criteria             | Status |
| -------------------- | ------ |
| Component separation | ✅     |
| Modular structure    | ✅     |
| Consistent naming    | ✅     |
| Reusable components  | ✅     |

### 3. Validation

| Criteria              | Status |
| --------------------- | ------ |
| Real-time validation  | ✅     |
| Visual error feedback | ✅     |
| Form-level validation | ✅     |

### 4. Navigation

| Route          | Page            |
| -------------- | --------------- |
| `/login`       | Login page      |
| `/signup`      | Sign Up page    |
| `/dashboard`   | Dashboard home  |
| `/data-hub`    | Master Data Hub |
| `/users-roles` | Users & Roles   |
| `/settings`    | Settings        |

---

<div align="center">
  <p>Built with ❤️ using React + Vite + Tailwind CSS</p>
</div>
