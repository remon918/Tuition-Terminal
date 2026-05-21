# 🎓 Tuition Terminal

<div align="center">

### Smart Tutor Booking Platform for Students & Tutors

A modern full-stack tutor booking web application where students can discover expert tutors, book learning sessions, and manage schedules seamlessly.

🌐 **Live Demo:** https://tuitionterminal.vercel.app

</div>

---

# 📖 Project Overview

**Tuition Terminal** is a modern tutor booking platform designed to simplify the connection between students and tutors.

Students can explore tutors based on subject, availability, teaching mode, and expertise while tutors can manage tutoring services efficiently through a clean and responsive dashboard.

The platform focuses on:

- Smooth tutor discovery
- Organized booking management
- Secure authentication
- Real-time slot management
- Responsive user experience
- Modern UI/UX design

This project was built using **Next.js, MongoDB, Express.js, Better Auth, Tailwind CSS, and Framer Motion**.

---

# ✨ Key Features

## 👨‍🏫 Tutor Management

- Add new tutors with detailed information
- Update tutor information dynamically
- Delete tutors with confirmation modal
- Manage tutor availability and teaching modes
- Personalized tutor management dashboard

---

## 📚 Smart Session Booking

- Book tutoring sessions instantly
- Auto decrease available slots after booking
- Prevent booking when no slots are available
- Cancel booked sessions anytime
- Booking status management system

---

## 🔐 Authentication & Security

- Email & Password Authentication
- Google Social Login
- JWT Protected Routes
- Secure API verification using JOSE
- Private route protection system

---

## 🎨 Modern User Experience

- Fully responsive design
- Dark / Light theme support
- Smooth animations with Framer Motion
- Beautiful modals and toast notifications
- Interactive UI components

---

## 🔎 Search & Filtering

- Search tutors by name
- Case-insensitive search functionality
- Filter tutors using date range
- Fast and user-friendly browsing experience

---

# 🖼️ Website Sections

## 🏠 Home Page

- Dynamic hero banner slider
- Featured tutors section
- Interactive educational sections
- Animated cards and components

---

## 👨‍🏫 Tutors Page

- Responsive tutor cards
- Search and filtering system
- Tutor details navigation
- Smooth animations

---

## 📅 Booking System

- Booking modal
- Auto slot reduction
- Booking confirmation system
- Booking status update

---

## 👤 User Profile

- Profile information display
- Update profile modal
- Email verification badge
- User activity information

---

# 🛠️ Tech Stack

## Frontend

- Next.js 16
- React.js
- Tailwind CSS
- Framer Motion
- Swiper.js
- Lucide React
- React Icons
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- MongoDB
- JOSE JWT Verification

---

## Authentication

- Better Auth
- Google Authentication
- JWT Token System

---

## Deployment

- Vercel (Frontend)
- vercel (Backend)

---

# 📂 Project Structure

```bash
tuition-terminal/
│
├── client/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── providers/
│   │   └── styles/
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── middleware/
│   ├── routes/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/remon918/Tuition-Terminal.git
```

---

## 2️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```bash
http://localhost:3000
```

---

## 3️⃣ Backend Setup

```bash
cd server
npm install
npm start
```

Backend will run on:

```bash
http://localhost:8000
```

---

# 🔑 Environment Variables

## Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## Backend `.env`

```env
PORT=8000

---

# 🔗 API Endpoints

## Tutors Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/tutors` | Get all tutors |
| GET | `/featured` | Get featured tutors |
| GET | `/tutors/:id` | Get tutor details |
| PATCH | `/tutors/slot/:id` | Decrease available slot |

---

## Booking Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/booking` | Create booking |
| GET | `/booking/:userId` | Get user bookings |
| PATCH | `/booking/:id` | Cancel booking |

---

## Added Tutors Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/addedtutors` | Add tutor |
| PATCH | `/addedtutors/:id` | Update tutor |
| DELETE | `/addedtutors/:id` | Delete tutor |

---

# 🔐 Authentication Flow

- User logs in using Email/Password or Google
- JWT token is generated
- Token is stored client-side
- Protected routes verify token
- Secure tutor & booking operations
- Private routes remain accessible after reload

---

# 🎨 UI/UX Highlights

- Clean modern dashboard layout
- Smooth page transitions
- Professional modal system
- Reusable component architecture
- Consistent typography and spacing
- Mobile-first responsive design
- Modern glassmorphism inspired sections

---

# 🚀 Future Improvements

- Online video class integration
- Tutor rating & review system
- Payment gateway integration
- Real-time notifications
- Tutor availability calendar
- Admin dashboard
- Session reminders via email
- Chat system between tutor & student

---

# 🤝 Contributing

Contributors are welcome!

## Steps to contribute:

### 1️⃣ Fork the repository

---

### 2️⃣ Create a new branch

```bash
git checkout -b feature-name
```

---

### 3️⃣ Commit your changes

```bash
git commit -m "Added new feature"
```

---

### 4️⃣ Push the branch

```bash
git push origin feature-name
```

---

### 5️⃣ Open a Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

### Developed by: Remon Hossen

- GitHub: https://github.com/remon918
- LinkedIn: https://www.linkedin.com/in/remon-hossen

---

# 💬 Support

If you like this project, consider giving it a ⭐ on GitHub.

For any support or suggestions:

📧 mdremonhossen7778@gmail.com

---

<div align="center">

## ⭐ Thank You For Visiting Tuition Terminal ⭐

### Empowering Learning Through Smart Tutor Booking

</div>