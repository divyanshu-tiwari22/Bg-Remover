# bg.removal - AI Powered Background Remover App

bg.removal is a modern, full-stack web application that enables users to remove image backgrounds quickly and seamlessly. It offers a clean user interface built with **React.js** and **Tailwind CSS**, robust backend support with **Node.js** and **Express.js**, and data persistence using **MongoDB**.

🌐 Live: [bg-remover-three-theta.vercel.app](https://bg-remover-three-theta.vercel.app/)  
📦 GitHub: [divyanshu-tiwari22/Bg-Remover](https://github.com/divyanshu-tiwari22/Bg-Remover)

---

## ✨ Features

- 🔍 Upload images and remove their backgrounds instantly
- 💾 Save and retrieve processed images using MongoDB Atlas
- ⚡ Fast and responsive UI built with React and Tailwind CSS
- 🌐 RESTful API for image processing and user data handling
- ☁️ Hosted frontend on Vercel and backend on Express.js

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- Multer (for file uploads)

**Database:**
- MongoDB Compass
- Mongoose

**Deployment:**
- Vercel (Frontend)
- Vercel (Backend)

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14+)
- Understanding of MongoDB Compass & Atlas
- Git & Github

---

### Project Structure

```
BG-REMOVER/
├── client/               # Frontend (React)
│   └── src/

├── server/               # Backend (Express)
│   ├── routes/
│   ├── controllers/
│   └── models/
├── .env
└── README.md
```

---

###  Local Setup

#### 1. Clone the repository

```
bash
git clone https://github.com/divyanshu-tiwari22/Bg-Remover.git
cd BG-Remover
```

#### 2. Install dependencies

**Frontend:**

```
bash
cd client
npm install
```

**Backend:**

```
bash
cd ../server
npm install
```

#### 3. Environment Variables

Create a `.env` file inside `server/` with the following:

```
env
PORT=4000
MONGO_URI=your_mongodb_atlas_connection_string
```

#### 4. Run the app

**Backend:**

```
bash
cd server
npm run dev
```

**Frontend:**

```
bash
cd client
npm start
```

---

## 🖼️ Image Processing

The backend uses a third-party API or algorithm to remove image backgrounds. Ensure the service or logic is implemented in the backend route handling image uploads.

---

## 📁 File Upload Handling

Uses `Multer` to handle image uploads and sends files to the background removal API or processing logic before saving metadata in MongoDB.

---

## 🔐 Authentication with Clerk

bg.removal integrates [Clerk](https://clerk.com) for secure and seamless user authentication.

### ✨ Authentication Features:
- 👤 User sign-up and sign-in with email/password or OAuth providers
- 🔐 Secure session management with automatic token refresh
- 🚪 User logout with session termination
- 🧭 Route protection for authenticated features

Clerk handles all the heavy lifting for user identity, making it easy to integrate authentication flows directly into the React frontend and Node backend.

---

## 📦 Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com/)
- **Backend:** Deploy using [Vercel](https://vercel.com/)

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📧 Contact

Created by [divyanshu-tiwari22](https://github.com/divyanshu-tiwari22)