# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🌐 My Portfolio Setup Guide (Vite + React + Tailwind CSS)

This README explains how to set up a portfolio project using Vite, React, and Tailwind CSS.

# 📁 Project Setup
## 1. Create Project Folder
mkdir my-portfolio
cd my-portfolio

## ⚡ 2. Create Vite App
npm create vite@latest

Options to select:

Project name → .
Framework → React
Variant → JavaScript

## 📦 3. Install Dependencies
npm install
Install additional packages:
npm install react-router-dom
npm install react-icons
npm install framer-motion

## ▶️ 4. Run the Project
npm run dev

## 🎨 5. Install Tailwind CSS

Follow official docs: https://tailwindcss.com/docs/installation/using-vite

Install Tailwind:
npm install tailwindcss @tailwindcss/vite

## 🔤 6. Add Google Font

Visit: https://fonts.google.com/selection/embed

Add this to your index.css file:
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');