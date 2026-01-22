# 🚀 Gemini Generative AI – Node.js Backend Project

A **modern, clean, and extensible Generative AI backend** built with **Node.js + Express** using **Google Gemini API**.
This project demonstrates how to build real‑world AI APIs for **text generation, chat, code generation, and AI-powered prompts**.

> 💡 Perfect for **learning**, **portfolio projects**, **hackathons**, and **AI SaaS prototypes**.

---

## ✨ Features

✅ Text generation (blogs, explanations, summaries)
✅ Chat-based AI (conversation memory support)
✅ Code generation (backend/frontend snippets)
✅ Image prompt generation (ready for AI image models)
✅ Clean MVC architecture (controllers, routes, config)
✅ Environment-based configuration
✅ Easy to extend (NestJS / SaaS ready)

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **Google Gemini API** (`@google/generative-ai`)
* **dotenv** for environment variables

---

## 📁 Project Structure

```
gemini-ai-project/
├── src/
│   ├── config/
│   │   └── gemini.js
│   ├── controllers/
│   │   ├── text.controller.js
│   │   ├── code.controller.js
│   │   ├── chat.controller.js
│   │   └── image.controller.js
│   ├── routes/
│   │   ├── text.routes.js
│   │   ├── code.routes.js
│   │   ├── chat.routes.js
│   │   └── image.routes.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## 🔑 Getting Gemini API Key (FREE)

1. Visit **Google AI Studio** 👉 [https://aistudio.google.com/](https://aistudio.google.com/)
2. Go to **Get API Key**
3. Create a new API key
4. Copy and store it safely

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

⚠️ Never expose your API key in frontend or GitHub.

---

## 📦 Installation & Setup

```bash
npm install
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### 📝 Text Generation

**POST** `/api/text/generate`

```json
{
  "prompt": "Explain Generative AI in simple words"
}
```

---

### 💻 Code Generation

**POST** `/api/code/generate`

```json
{
  "prompt": "Create REST API with Express",
  "language": "Node.js"
}
```

---

### 💬 Chat with AI

**POST** `/api/chat/chat`

```json
{
  "messages": [
    { "role": "user", "content": "Hello Gemini" }
  ]
}
```

---

### 🎨 Image Prompt Generation

**POST** `/api/image/generate`

```json
{
  "prompt": "A futuristic smart city at night"
}
```

> ℹ️ This endpoint generates **high‑quality image prompts** which can be used with AI image generators.

---

## 🧠 Why This Project?

This project follows **real backend engineering practices**:

* Separation of concerns
* Scalable architecture
* API-first design
* Easy migration to **NestJS** or **microservices**

Ideal for:

* Backend developers learning AI
* Students & fresh graduates
* Portfolio & resume projects
* AI SaaS MVPs

---

## 🔒 Security Best Practices

* API key stored in `.env`
* Never expose secrets to frontend
* Add rate limiting before production
* Use authentication (JWT) for real apps

---

## 🚀 Future Enhancements

* Streaming responses
* Conversation memory with Redis
* Authentication & role-based access
* AI usage analytics
* Migration to Vertex AI
* Frontend integration (React / Next.js)

---

## 🤝 Contribution

Pull requests are welcome. Feel free to fork and improve this project.

---

## 📬 Contact

If you’d like to collaborate, improve this project, or build AI-powered products:

📧 Reach out anytime — happy to connect and build together!

---

### ⭐ If this project helped you, consider giving it a star on GitHub!

Happy Coding 🚀
