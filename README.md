Here’s a **README.md** for your Notes API GitHub repo — beginner-friendly, complete with setup instructions.

---

```markdown
# 📝 Notes API

A beginner-friendly RESTful API for managing notes using **Node.js**, **Express**, and **Firebase Firestore**.  
Supports creating, reading, updating, and deleting notes with proper validation and error handling.

---

## ✨ Features
- 🚀 **CRUD operations** for notes (`Create`, `Read`, `Update`, `Delete`)
- 📂 **Modular folder structure** (controllers, routes, validators)
- ✅ **Validation** using Joi
- 🔐 **Firebase Firestore** as the database
- 🕒 Automatic timestamps for creation and updates
- ⚠ Centralized **error handling** with HTTP status codes

---

## 🛠 Tech Stack
- [Node.js](https://nodejs.org/) – Backend runtime
- [Express.js](https://expressjs.com/) – Web framework
- [Firebase Firestore](https://firebase.google.com/docs/firestore) – NoSQL database
- [Joi](https://joi.dev/) – Request validation
- [Dotenv](https://www.npmjs.com/package/dotenv) – Environment variables

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/NOTES.git
cd NOTES
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Firebase

* Go to [Firebase Console](https://console.firebase.google.com/)
* Create a project → Enable Firestore Database (Test mode)
* Go to **Project Settings → Service accounts**
* Click **Generate new private key** → Download the `.json` file
* Convert the file to a **single-line JSON** for `.env`:

  ```env
  FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"<your-id>",...}
  PORT=3000
  ```

### 4️⃣ Start the Server

```bash
npm start
```

The API will be available at `http://localhost:3000`.

---

## 📌 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/notes`     | Create a new note |
| GET    | `/notes`     | Get all notes     |
| GET    | `/notes/:id` | Get a note by ID  |
| PUT    | `/notes/:id` | Update a note     |
| DELETE | `/notes/:id` | Delete a note     |

---

## 📜 Example Request

```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Note", "content":"This is a test note"}'



