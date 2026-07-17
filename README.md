# 🌍Immigration Portal

A premium, full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application developed for a modern visa and immigration consultancy. The platform helps users explore immigration destinations, calculate eligibility points, learn about visa services, and book professional immigration consultations online.

---

# 🚀 Live Demo

### 🌐 Frontend (Live Website)
https://immigration-portal-frontend.onrender.com

### ⚙️ Backend API
https://immigration-portal-backend-wdn2.onrender.com

### ❤️ Health Check
https://immigration-portal-backend-wdn2.onrender.com/health

### 📂 GitHub Repository
https://github.com/anujkum9051/immigration-portal

---

# ✨ Features

- 🌎 Dynamic Immigration Destinations
- 📊 Immigration Points Calculator
- 🛂 Visa & Immigration Services
- 📅 Consultation Booking System
- 💾 MongoDB Atlas Database Integration
- ⚡ RESTful Express API
- 📱 Fully Responsive Modern UI
- 🌙 Professional Dark Theme
- 🔥 MERN Stack Architecture
- ☁️ Fully Deployed on Render

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- CSS3
- JavaScript (ES6)

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Deployment

- Render (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

# 📁 Project Structure

```text
immigration-portal/
│
├── README.md
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── config.js
│       ├── main.jsx
│       ├── index.css
│       └── assets/
│
└── backend/
    ├── package.json
    ├── server.js
    ├── .env
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── Assessment.js
    │   ├── Booking.js
    │   ├── Country.js
    │   └── Service.js
    ├── routes/
    │   └── api.js
    └── scripts/
        └── seed.js
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/anujkum9051/immigration-portal.git

cd immigration-portal
```

---

## Install Backend

```bash
cd backend

npm install
```

---

## Install Frontend

```bash
cd ../frontend

npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5001

MONGODB_URI=your_mongodb_atlas_connection_string
```

Example

```env
PORT=5001

MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/immigration?retryWrites=true&w=majority&appName=Cluster0
```

---

# 🌱 Seed Database

Run

```bash
cd backend

npm run seed
```

Expected Output

```text
MongoDB Connected

Database cleared.

Countries Seeded

Services Seeded

Done.
```

---

# ▶️ Run Backend

```bash
cd backend

npm run dev
```

Backend will start on

```
http://localhost:5001
```

---

# ▶️ Run Frontend

Open another terminal

```bash
cd frontend

npm run dev
```

Open

```
http://localhost:5173
```

---

# 🌐 API Endpoints

## Countries

```
GET /api/countries
```

Returns all immigration destinations.

---

## Services

```
GET /api/services
```

Returns available immigration services.

---

## Assessment

```
POST /api/assessments
```

Stores eligibility calculator results.

---

## Book Consultation

```
POST /api/bookings
```

Stores consultation booking requests.

---

# 📷 Application Modules

- Home Page
- Immigration Destinations
- Immigration Services
- Points Calculator
- Consultation Booking
- Contact Information
- MongoDB Database Storage

---

# ☁️ Deployment

## Frontend

Hosted on **Render Static Site**

https://immigration-portal-frontend.onrender.com

---

## Backend

Hosted on **Render Web Service**

https://immigration-portal-backend-wdn2.onrender.com

---

## Database

MongoDB Atlas Cloud Database

---

# 📌 Project Highlights

- Full Stack MERN Project
- REST API Development
- MongoDB Atlas Integration
- Express Backend
- React + Vite Frontend
- Responsive UI
- Dynamic Data Fetching
- Consultation Booking System
- Immigration Eligibility Calculator
- Render Cloud Deployment

---

# 👨‍💻 Author

**Anuj Kumar**

GitHub

https://github.com/anujkum9051

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is created for educational and portfolio purposes.