# 🎯 Interview AI — AI-Powered Interview Preparation Assistant

**Interview AI** is an intelligent full-stack application designed to help job seekers prepare for interviews with precision. By evaluating a candidate's resume (PDF) or self-description against a target job description, the platform utilizes **Google Gemini AI** to generate personalized interview strategies, technical & behavioral questions, skill gap analyses, structured 7-day preparation roadmaps, and custom PDF resumes.

---

## 🌟 Key Features

- **📄 Resume & Job Analysis:** Upload your resume (`.pdf`) or input a self-description alongside any target job posting.
- **🎯 Profile Match Score:** Instant percentage score indicating how closely your experience aligns with job requirements.
- **❓ Targeted Interview Questions:**
  - **Technical Questions:** Deep-dive technical queries with expected answers and interviewer intent.
  - **Behavioral Questions:** Scenario-based questions with optimal response strategies (STAR framework).
- **📊 Skill Gap Analysis:** Highlights missing or weak skills categorized by severity (*Low*, *Medium*, *High*).
- **🗓️ 7-Day Actionable Preparation Plan:** A customized day-by-day roadmap tailored to address your specific skill gaps and job demands.
- **📄 AI PDF Resume Generator:** Automatically renders and downloads a tailored, professionally styled resume PDF powered by Puppeteer.
- **🔐 Secure Authentication:** JWT-based authentication stored in secure `HTTP-only` cookies with server-side token blacklisting on logout.

---

## 🛠️ Tech Stack & Architecture

### **Frontend**
- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Styling:** [Sass / SCSS](https://sass-lang.com/)
- **HTTP Client:** Axios with credential sharing enabled

### **Backend**
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js v5](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) via [Mongoose ODM](https://mongoosejs.com/)
- **Authentication:** JWT (`jsonwebtoken`), `bcryptjs`, `cookie-parser`
- **AI Integration:** `@google/genai` (Google Gemini `gemini-3-flash-preview` model)
- **Validation:** [Zod](https://zod.dev/) & `zod-to-json-schema` (Structured JSON outputs)
- **File Parsing & Rendering:** `pdf-parse` (PDF extraction), `multer` (Upload handling), `puppeteer` (HTML to PDF rendering)

---

## 📂 Project Structure

```text
interview-ai/
├── Backend/
│   ├── src/
│   │   ├── config/          # Database connection setup
│   │   ├── controllers/     # Request handlers (auth, interview logic)
│   │   ├── middlewares/     # Auth verification, multer upload handling
│   │   ├── models/          # Mongoose schemas (User, InterviewReport, Blacklist)
│   │   ├── routes/          # Express route definitions
│   │   ├── services/        # Google Gemini AI & Puppeteer PDF services
│   │   └── app.js           # Express application initialization
│   ├── server.js            # Node HTTP server entry point
│   ├── package.json
│   └── .env                 # Backend environment variables
│
└── Frontend/
    ├── src/
    │   ├── features/
    │   │   ├── auth/        # Auth Context, Hooks, Login/Register pages, API calls
    │   │   └── interview/   # Interview Context, Hooks, Home/Report pages, API calls
    │   ├── style/           # Global styles and button SCSS
    │   ├── App.jsx          # Root component
    │   ├── app.routes.jsx   # Route configuration
    │   └── main.jsx         # Vite entry point
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## 🚀 Getting Started

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) instance (local or MongoDB Atlas)
- [Google Gemini API Key](https://aistudio.google.com/)

---

### **1. Backend Setup**

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_GENAI_API_KEY=your_gemini_api_key
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend server will start on `http://127.0.0.1:3000`.

---

### **2. Frontend Setup**

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend application will be accessible at `http://localhost:5173`.

---

## 📡 API Endpoints Reference

### **Authentication (`/api/auth`)**
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Authenticate user & set JWT cookie | ❌ |
| `POST` | `/api/auth/logout` | Logout user & blacklist JWT token | ✅ |
| `GET` | `/api/auth/me` | Get current logged-in user details | ✅ |

### **Interview & AI Reports (`/api/interview`)**
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/interview/` | Upload resume + job description to generate AI report | ✅ |
| `GET` | `/api/interview/` | Get list of all interview reports for logged-in user | ✅ |
| `GET` | `/api/interview/report/:interviewId` | Get detailed interview report by ID | ✅ |
| `POST` | `/api/interview/resume/pdf/:interviewReportId` | Generate & download tailored resume PDF | ✅ |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the repository issues or submit a pull request.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
