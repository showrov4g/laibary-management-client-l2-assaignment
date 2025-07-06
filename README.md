# 📚 Minimal Library Management System

A clean, responsive, and functional **Library Management System** built using **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**.  
This project demonstrates core CRUD functionality and borrow tracking without the complexity of authentication or payments—perfect for learning or rapid prototyping.

![Library Banner](https://i.ibb.co/bwjsjZz/6899308.jpg) <!-- Replace with your own banner if needed -->

---

## 🚀 Live Demo

👉 [Live Site](https://library-management-client-theta.vercel.app/)  
🔗 [Backend API](https://library-management-api-pearl.vercel.app/)

---

## 🧠 Project Overview

> Build a **minimalist yet powerful** front-end client to manage books and borrowing records, interact with a RESTful API, and practice modern web development best practices.

- View, add, edit, and delete books.
- Borrow books with quantity and due date validation.
- Aggregated borrow summary.
- Fully responsive and intuitive UI.
- No authentication or admin login required.

---

## ✨ Features

### ✅ 1. Public Access (No Auth)
- All routes and features are **open to all users**.
- Great for demos, learning, and quick prototyping.

### 📖 2. Book Management
- **Book List Table**
  - View all books in a tabular layout.
  - Columns: `Title`, `Author`, `Genre`, `ISBN`, `Copies`, `Availability`, `Actions`.
- **Add New Book**
  - Form with inputs: `Title`, `Author`, `Genre`, `ISBN`, `Description`, `Copies`.
  - After submission: auto-redirect to list.
- **Edit Book**
  - Pre-filled form with current book data.
  - Instant UI update after API success.
- **Delete Book**
  - Confirmation prompt to prevent accidental deletions.
- **Availability Logic**
  - If `copies = 0`, mark book as `Unavailable`.

### 📚 3. Borrow Book
- Open a form from the "Borrow" button.
- Fields:
  - `Quantity`: cannot exceed available copies.
  - `Due Date`: required.
- On success:
  - Book count reduces.
  - Redirects to **Borrow Summary**.

### 📊 4. Borrow Summary
- Aggregated data via API.
- Columns: `Book Title`, `ISBN`, `Total Quantity Borrowed`.

---

## 🧩 Pages & Routes

| Route              | Description                                      |
|-------------------|--------------------------------------------------|
| `/books`          | View all books (list with actions)               |
| `/create-book`    | Add a new book                                   |
| `/books/:id`      | View book details                                |
| `/edit-book/:id`  | Edit existing book info                          |
| `/borrow/:bookId` | Borrow form for selected book                    |
| `/borrow-summary` | Aggregated borrow summary (report view)          |

---

## 🖼️ UI/UX Highlights

- 🎯 **Minimal Design**: Tailwind CSS for clean visuals.
- 📱 **Responsive**: Looks great on all screen sizes.
- 💡 **User Friendly**: Simple forms, intuitive navigation.
- 🧼 **Clean Codebase**: Organized with TypeScript and Redux Toolkit Query.

---

## 🔧 Tech Stack

| Tech             | Purpose                      |
|------------------|------------------------------|
| React            | Frontend Library             |
| TypeScript       | Static Typing                |
| Redux Toolkit    | State Management             |
| RTK Query        | API Querying & Caching       |
| Tailwind CSS     | Utility-first UI Framework   |
| RESTful API      | Data Source (Hosted on Vercel)|

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/minimal-library-client.git
cd minimal-library-client

# Install dependencies
npm install

# Run the development server
npm run dev
