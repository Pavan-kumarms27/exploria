# 🌍 Exploria — Handcrafted Global Travel Experiences

Exploria is a premium responsive travel landing page that showcases international vacation packages through a modern, user-friendly interface. It features a responsive auto-grid layout, a system-synchronized Light/Dark theme, and an interactive booking module that calculates trip costs in real time.

## 🌐 Live Demo

🔗 **Website:** https://exploria1.vercel.app/

---
 
## ✨ Features

* **Premium Responsive Navigation**

  * Fixed glassmorphism navigation bar with a mobile-friendly hamburger menu.

* **System-Synced Light/Dark Theme**

  * Automatically matches the user's system preference and remembers the selected theme using `localStorage`.

* **Responsive Destination Catalog**

  * Auto-grid card layout with hover animations and optimized images.

* **Dynamic Booking Calculator**

  * Calculates total booking cost instantly based on the selected package and number of travelers.

* **Lightweight Static Website**

  * No frameworks or build tools required. Runs directly in any modern browser.

---

## 🛠️ Tech Stack

* **HTML5** – Semantic page structure
* **CSS3** – Custom styling
* **Bootstrap 5.3** – Responsive layout and UI components
* **JavaScript (ES6)** – Interactive functionality and booking logic
* **Google Fonts** – Montserrat & Inter
* **Ionicons** – Icons

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Pavan-kumarms27/exploria.git
cd exploria
```

### Run the Project

No installation is required.

Simply open:

```text
index.html
```

in your browser.

For a better development experience, use the **Live Server** extension in Visual Studio Code.

---

## 📁 Project Structure

```text
exploria/
│
├── .github/
│   └── workflows/
├── img/
├── index.html
├── exploria.css
├── exploria.js
└── README.md
```

---

## ⚙️ Core Functionality

### Theme Management

```javascript
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
}
```

Automatically restores the previously selected theme before the page renders to prevent flashing.

### Booking Cost Calculation

```javascript
const totalCost = packagePrice * numberOfGuests;
```

The booking form updates the total cost dynamically whenever the package or guest count changes.

---

## 📱 Responsive Design

Exploria is fully responsive and optimized for:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

---

## 🚀 Future Improvements

* User authentication
* Online payment integration
* Destination search and filters
* Wishlist functionality
* Backend booking management
* Email confirmation system

---

## 👨‍💻 Author

**Pavan Kumar**

* GitHub: https://github.com/Pavan-kumarms27
* Live Demo: https://exploria1.vercel.app/
