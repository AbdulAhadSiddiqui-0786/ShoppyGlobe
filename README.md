# 🛍️ ShoppyGlobe - E-Commerce Application

A modern e-commerce web application built with React, Redux Toolkit, and Tailwind CSS. Features infinite scroll, real-time search, and cart management.

![Demo](https://via.placeholder.com/800x400.png?text=ShoppyGlobe+Demo) *Replace with actual screenshot*

## 🚀 Features

- **Product Browsing**  
  - Infinite scroll for seamless product loading
  - Responsive grid layout
  - Product details page

- **Search**  
  - Real-time API-powered search
  - Instant results with loading states

- **Cart Management**  
  - Add/remove items
  - Quantity adjustment
  - Total price calculation

- **Responsive Design**  
  - Mobile-first approach
  - Tailwind CSS styling

- **Error Handling**  
  - Error boundaries
  - 404 page

## 🛠️ Technologies

- **Frontend**  
  ![React](https://img.shields.io/badge/React-18.2.0-blue)
  ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9.5-purple)
  ![React Router](https://img.shields.io/badge/React_Router-6.16.0-orange)

- **Styling**  
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-blueviolet)

- **API**  
  [DummyJSON](https://dummyjson.com/docs/products)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shoppyglobe.git

2.Install dependencies:
```bash 
cd shoppyglobe
npm install
npm install -D tailwindcss postcss autoprefixer
npm install react-redux react-router-dom @reduxjs/toolkit prop-types
```



3.Start Development Server
npm run dev

📂 Project Structure
```bash

shoppyglobe/
├── src/
│   ├── components/     
│   ├── hooks/           
│   ├── pages/           
│   ├── store/           
│   ├── App.jsx          
│   └── main.jsx         
```
🔑 Key Functionality
```bash

// Example: Infinite Scroll Implementation
useEffect(() => {
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === 
      document.documentElement.offsetHeight) {
      loadMoreProducts();
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [loading]);
```
## Author

- Abdul Ahad Siddiqui  
- GitHub: [AbdulAhadSiddiqui-0786](https://github.com/AbdulAhadSiddiqui-0786)





