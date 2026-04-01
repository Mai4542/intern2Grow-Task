# 🚀 Inter2Grow Task

A Next.js project showcasing a products listing page and product details page using Static Site Generation (SSG) and Tailwind CSS.

---

## 🛠 Tech Stack

- ⚡ **Next.js** (App Router)
- 🎨 **Tailwind CSS**
- 🗂 **Static Site Generation (SSG)**
- 🌐 **DummyJSON API** — [https://dummyjson.com/products](https://dummyjson.com/products)

---

## 📄 Features

### 🏷 Products Listing Page
- Displays **8 products** in a clean, responsive grid
- Each product links to its details page

### 📦 Single Product Page
- Dynamic routing (`/products/[id]`)
- Breadcrumb navigation: `Home / Product Name`
- Product details fetched using **SSG**

### 📱 Fully responsive design
- Mobile + desktop optimized using **Tailwind CSS**
- Minimal UI — only products and product details (no navbar or footer)

---

## 🌐 Live Demo

🔗 [https://interntask-ruddy.vercel.app/](https://interntask-ruddy.vercel.app/)

---

## 💡 Implementation Approach

- Products fetched from **DummyJSON API** at build time (SSG)
- **Dynamic routing** for individual product pages
- Clean, **mobile-first UI** with Tailwind CSS
- Focused on minimal and functional design

---

## 🏃‍♂️ Run Locally

```bash
git clone https://github.com/Mai4542/intern2Grow-Task.git
cd interntask
npm install
npm run dev
