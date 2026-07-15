# TerraFlex & Flyder Immigration Portal

A premium, highly interactive MERN (MongoDB, Express, React, Node.js) web application designed for a modern visa and immigration consultancy. The application provides dynamic relocation insights, a points-based immigration eligibility calculator, step-by-step visa timelines, and direct lawyer booking facilities.

---

## 📁 Full File Structure

Below is the complete, detailed directory layout of the MERN project:

```text
/Users/kunal/Desktop/new/
├── README.md                 # Project documentation & run guides
├── frontend/                 # React client SPA (scaffolded via Vite)
│   ├── package.json          # Frontend packages & dev scripts
│   ├── vite.config.js        # Vite build configurations
│   ├── index.html            # Entry HTML document with Outfit & Inter Google Fonts
│   ├── .gitignore            # Git exclusion settings for client build/packages
│   ├── public/               # Static folder for shared client assets
│   └── src/
│       ├── App.jsx           # App entry, dynamic MERN fetches, point calculator state, testimonial slider, forms, SVGs
│       └── index.css         # Core CSS layout rules, glassmorphism tokens, and keyframe animations
│
└── backend/                  # Node.js Express server API
    ├── package.json          # Node dependencies (Express, Mongoose, nodemon)
    ├── server.js             # Express start script, middlewares, and API route mappings
    ├── .env                  # Configuration variables (PORT, MONGO_URI)
    ├── config/
    │   └── db.js             # Mongoose MongoDB connection pool initialization
    ├── models/               # Mongoose Document Schemas
    │   ├── Country.js        # Destination countries schema with sub-pathway documents
    │   ├── Service.js        # Core immigration services details schema
    │   ├── Assessment.js     # User points calculations log schema
    │   └── Booking.js        # Consultation booking inquiries schema
    ├── routes/
    │   └── api.js            # Router endpoints for DB reads/writes (POST/GET)
    └── scripts/
        └── seed.js           # Populates local MongoDB collections with countries and services data
```

---

## 🚀 How to Run the Project

Follow these step-by-step instructions to get the backend, database, and frontend running locally.

### 📋 Prerequisites
1. **Node.js**: Version 20.19.0+ or 22.12.0+ is recommended.
2. **MongoDB**: Ensure MongoDB Community Server is installed and running locally on port `27017`.

---

### Step 1: Install Dependencies
Open a terminal in the root project folder `/Users/kunal/Desktop/new` and run the installations for both directories:

#### Install Backend Packages:
```bash
cd backend
npm install
```

#### Install Frontend Packages:
```bash
cd ../frontend
npm install
```

---

### Step 2: Seed the Database
Before running the servers, populate your local MongoDB database with the primary visa destinations and core services:

```bash
cd ../backend
npm run seed
```
*Expected Output:*
```text
MongoDB Connected: 127.0.0.1
Database cleared of existing countries & services.
Seeded 5 countries successfully.
Seeded 4 services successfully.
Seeding process finished!
```

---

### Step 3: Run the Backend API
Start the Express server on port `5001` (to prevent conflicts with macOS AirPlay binding to port `5000`):

```bash
npm run dev
```
*Expected Output:*
```text
[nodemon] starting `node server.js`
Server running on port 5001 in production/development mode
MongoDB Connected: 127.0.0.1
```

---

### Step 4: Run the Frontend Application
Open a **new terminal window** in the root project folder, navigate to the frontend directory, and start Vite:

```bash
cd frontend
npm run dev
```
*Expected Output:*
```text
  VITE v8.1.4  ready in 148 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open **`http://localhost:5173/`** in your browser to interact with the application.

---

## 🌐 API Reference

All routes are prefixed with `/api` and serve/consume JSON payloads:

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `http://localhost:5001/api/countries` | Fetch all dynamic immigration destinations from MongoDB. |
| **GET** | `http://localhost:5001/api/services` | Fetch core consultancy services list. |
| **POST** | `http://localhost:5001/api/assessments` | Submit and log a points calculator eligibility record. |
| **POST** | `http://localhost:5001/api/bookings` | Submit a new consultation request card to the database. |
