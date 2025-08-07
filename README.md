# Simple Docker App

- **React frontend**
- **Express backend**
- Docker + Docker Compose support
- Works both **locally without Docker** and **fully containerized**

---

## ⚙️ Features

- React app fetches a message from Express backend (`/api`)
- Works in two modes:
  - Local development with Node/npm
  - Docker setup with Compose
- Clean `.gitignore` and modular structure

---

## 🛠️ Local Setup (No Docker)

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/simple-docker-app.git
cd simple-docker-app
```
### 2. Install and Run Backend
```bash
cd backend
npm install
npm start
```
Backend runs at http://localhost:5000

### 3. Install, Build & Serve Frontend
```bash
cd ../frontend
npm install
npm run build
npx serve -s build
```
Frontend runs at http://localhost:3000
Make sure the backend is running before opening the frontend.

---
## 🐳 Docker Setup (Alternative Method)
Dockerized into separate containers using Docker Compose. Frontend communicates with the backend internally.

## 1. Build and Run
```bash
docker-compose up --build
```

## 2. Access the App
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## 3. Rebuild everything
```bash
docker-compose down -v
docker-compose up --build
```

## 4. Stop all containers
```bash
docker-compose down
```
---

