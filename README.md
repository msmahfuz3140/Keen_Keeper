
# 🤝 Keen Keeper

### A Smart Friend Relationship Tracker built with Next.js

🔗 Live Demo: https://keen-keeper-wine.vercel.app/

---

## 📌 Overview

Keen Keeper is a modern **friend relationship tracking web application** built with Next.js.  
It helps users organize important connections, track interaction history, and view relationship insights through analytics.

---

## ✨ Key Features

- 👥 View curated friend list from local JSON data
- 🔍 Search friends by name
- 📄 Dynamic friend profile page (`/friendDetails/[id]`)
- 📞 Quick interaction actions (Call / Text / Video)
- 🕒 Timeline tracking with filters
- 📊 Analytics dashboard with charts
- 🔔 Toast notifications for user actions

---

## 🌐 Routes

| Route | Description |
|------|-------------|
| `/` | Home page with stats, hero section & friend list |
| `/time_line` | Interaction timeline with filters |
| `/stats` | Analytics dashboard with charts |
| `/friendDetails/[id]` | Dynamic friend profile page |

---

## 🛠 Tech Stack

- ⚛️ Next.js 16 (App Router)
- ⚛️ React 19
- 🎨 Tailwind CSS 4
- 🎯 DaisyUI 5
- 🎨 Lucide React (Icons)
- 📊 Recharts (Data Visualization)
- 🔔 React Toastify
- ⏳ React Spinners

---

## 📁 Project Structure

```text
src/
  app/
    friendDetails/[id]/
    stats/
    time_line/

  Components/
    Friends/
    Header/
    Footer/
    Stats/
    ContactHis/
    TimlineButton/

  Context/
  Hooks/

public/
  friends.json
  images/
  Icons/