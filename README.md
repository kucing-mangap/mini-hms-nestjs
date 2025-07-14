# 🏥 Mini HMS — Full-Stack Hospital Management System

Mini HMS is a minimal yet powerful full-stack hospital management system designed for clinics, small hospitals, or demo purposes. Built to showcase full-stack development skills, it supports role-based access for **Admins**, **Doctors**, and **Patients** with key features like appointment booking, medical record management, and dashboards.

---

## 🚀 Tech Stack

**Backend**: ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=nodedotjs&logoColor=white), ![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)  
**Database**: ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)  
**Authentication**: ![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens)  

---

## 🧑‍⚕️ User Roles & Features

### 🧑‍⚕️ Doctor
- View upcoming appointments
- View and update patient medical records
- Add diagnosis and prescribed medications

### 👤 Patient
- Register and log in
- Book appointments with doctors (based on specialization)
- View and cancel upcoming appointments
- View personal medical records

### 🛠 Admin
- Add new doctor accounts
- View total doctors, patients, appointments (analytics)
- Manage hospital data (read-only for now)

---

## 🗃️ Database Schema Overview

- `doctors`: Doctor details and specialty
- `patients`: Patient personal and health info
- `admins`: Admin user accounts
- `appointments`: Links patients to doctors
- `medical_records`: Doctor-written medical notes per appointment

> For full schema, check `docs/schema.sql`. (_Coming Soon_)

---

## 🧪 Demo

> 🚧 Live Demo: _Coming Soon_  
> 🎥 Loom Walkthrough: _Coming Soon_

---

## 🛠️ Getting Started

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.18 or above)
- [pnpm](https://pnpm.io/) (or you could also use [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/))
- [PostgreSQL](https://www.postgresql.org/)
- [Nest CLI](https://docs.nestjs.com/cli/overview) (optional)

```bash
pnpm add -g @nestjs/cli   # Install Nest CLI as a global package
# or 
npm i -g @nestjs/cli      # If you prefer using npm
```
  
## 🚀 Running the App
### 1. Install dependencies
```bash
pnpm i
```

### 2. Copy and configure environment variables
```bash
cp .env.example .env
```

Then edit the `.env` file with your database credentials

### 3. Set up the database using Prisma
```bash
pnpm prisma generate     # Generate Prisma Client
pnpm prisma migrate dev   # Apply migrations to your local database
```

### 4. Run the app in development mode
```bash
pnpm start:dev
# or
npm run start:dev
```
  
## 🔍 API Documentation
After the app is running, open:
```bash
http://localhost:3000/api-docs
```
This serves the API documentation using [Scalar](https://scalar.com/) for an enhanced OpenAPI experience.  

---

#### Note: this app is still in development, so there are many improvements expected in the future. Even the documentation itself 😁