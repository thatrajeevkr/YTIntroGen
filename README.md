# YTIntroGen

A simple web app that generates catchy YouTube intros based on a provided video script. It uses OpenAI's API for creating engaging and professional-quality introductions.

---

## Tech Stack

### Frontend

- **React, CSS**

### Backend

- **Node.js, Express**: For backend development and framework for handling API requests.
- **openai-api**
- **dotenv**: For managing environment variables.
- **cors**: For handling cross-origin requests.

### Steps to Run Locally

1. Clone the repo

```bash

git clone https://github.com/thatrajeevkr/YTIntroGen.git
cd YTIntroGen
```

2. Install dependencies

```bash
cd backend
npm install express dotenv openai-api cors
cd ../frontend
npm install react react-dom web-vitals


```

3. Setup env variables

```bash
OPENAI_API_KEY=your-openai-api-key

```

4. Start Everything

```bash
cd backend
npm start
cd ../frontend
npm start


```
