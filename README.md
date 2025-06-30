# 🧠 VAPI-Powered Interview Assistant (Next.js + TypeScript)

An AI-driven voice assistant app built with **Next.js**, **TypeScript**, **VAPI**, and **Firebase** — designed to simulate job interview scenarios through natural voice interaction.

🚀 **Live & Deployed** — but currently **interview generation is unavailable** due to VAPI changes.  
🎙️ You can still chat with the assistant via voice!

[https://js-ai-interview-app.vercel.app/](https://js-ai-interview-app.vercel.app/)

---

## ✨ Features

- ⚛️ **Next.js** — server-rendered React for high performance
- 🔐 **Firebase Auth** — secure user authentication
- ☁️ **Firebase Firestore** — scalable cloud storage for sessions/interviews
- 🎙️ **VAPI Integration** — voice-based interaction with AI assistant _(partially working)_
- 🎨 **Tailwind CSS** — clean and responsive UI styling
- 🧩 Modular and scalable architecture

---

### 1. Clone the repo

```bash
git clone https://github.com/burcinismail8/js_ai_interview_app.git
cd vapi-interview-assistant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running locally.

---

## 🛠️ Tech Stack

| Tech             | Purpose                          |
| ---------------- | -------------------------------- |
| **Next.js**      | React framework with SSR support |
| **TypeScript**   | Static type checking             |
| **VAPI**         | Voice Assistant API              |
| **Firebase**     | Auth & cloud Firestore           |
| **Tailwind CSS** | Utility-first CSS framework      |

---

## 🔐 Firebase Setup (Required)

Make sure to configure your Firebase credentials in `.env.local`:

```env
FIREBASE_PRIVATE_KEY=your-key
FIREBASE_CLIENT_EMAIL=firebase-adminsdk------
GOOGLE_GENERATIVE_AI_API_KEY = ----------------
NEXT_PUBLIC_VAPI_WEB_TOKEN = ---------------
NEXT_PUBLIC_VAPI_WORKFLOW_ID = -------------
```

---

## ⚠️ Current Status

- ✅ UI fully functional and deployed
- ✅ Firebase Auth and data storage working
- ✅ Voice assistant interaction **works**
- ❌ Interview generation via VAPI is **currently disabled**
  - VAPI has recently changed its workflow and assistant API
  - Refactoring is in progress to support the new system

---

## 🌐 Deployment

The app is deployed and live. You can:

- 🔓 Log in or register with Firebase Auth
- 🗣️ Talk to the voice assistant (intro, small talk, etc.)
- ❌ Cannot generate full interview sessions at this time

---

## 🙏 Acknowledgments

Built using:

- [VAPI](https://vapi.ai/)
- [Firebase](https://firebase.google.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---
