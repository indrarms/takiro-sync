# Smart Chili Plantation Monitoring Dashboard

A web-based monitoring dashboard for **real-time soil moisture tracking in chili plantations**.
This project visualizes sensor data collected from IoT devices and stored in **Firebase**, allowing farmers or researchers to monitor soil conditions and optimize irrigation.

Built with **Next.js, React, Firebase, and Chart.js**.

---

# Features

* **Realtime Sensor Monitoring**

  * Displays live soil moisture data from sensors

* **Data Visualization**

  * Interactive charts showing moisture trends over time

* **Soil Moisture Level Detection**

  * Automatically categorizes soil condition:

    * Dry
    * Normal
    * Wet

* **Dashboard Interface**

  * Clean UI with cards and charts

* **Statistics Page**

  * Historical moisture visualization

* **Settings Page**

  * Configuration for system behavior

* ℹ**Information Page**

  * Documentation or project information

---

# System Overview

The system architecture works as follows:

```
Soil Sensor (IoT)
       │
       ▼
Firebase Realtime Database
       │
       ▼
Next.js Web Dashboard
       │
       ▼
Charts + Realtime Monitoring UI
```

1. Sensors send soil moisture data.
2. Data is stored in **Firebase Realtime Database**.
3. The **Next.js frontend subscribes to realtime updates**.
4. Charts and UI components update automatically.

---

# Tech Stack

### Frontend

* **Next.js 16**
* **React 19**
* **TailwindCSS**

### Visualization

* **Chart.js**
* **React ChartJS 2**
* **Recharts**

### Backend / Data

* **Firebase Realtime Database**

### UI

* **React Icons**

---

# Project Structure

```
takiro-sync
│
├── app/                         # Next.js App Router
│   │
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout
│   ├── page.js                  # Main dashboard page
│   │
│   ├── informasi/               # Information page
│   │   └── page.js
│   │
│   ├── sensor/                  # Sensor monitoring page
│   │   └── page.js
│   │
│   ├── statistik/               # Statistics and chart visualization
│   │   └── page.js
│   │
│   └── setelan/                 # Settings page
│       └── page.js
│
├── components/                  # Reusable React components
│   │
│   ├── MoistureChart.jsx        # Soil moisture chart visualization
│   ├── RealtimeSensor.jsx       # Realtime sensor data display
│   ├── grafik.jsx               # Additional graph component
│   ├── kartu.jsx                # Dashboard card component
│   ├── sidebar.jsx              # Sidebar navigation
│   └── levelLogic.js            # Soil moisture level classification logic
│
├── lib/                         # External service configurations
│   └── firebase.js              # Firebase initialization
│
├── public/                      # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
│
├── package.json                 # Project dependencies and scripts
├── package-lock.json
│
├── .gitignore
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/indrarms/takiro-sync.git
cd takiro-sync
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# Firebase Setup

1. Create a **Firebase project**
2. Enable **Realtime Database**
3. Update configuration inside:

```
lib/firebase.js
```

Example configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID"
};
```

---

# Example Use Cases

* Smart agriculture monitoring
* Soil moisture research
* IoT farming dashboards
* Automated irrigation systems

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

# License

This project is licensed under the **MIT License**.

---

# Author

1. Indra Ramdani Saputra
2. Mohamad Haikal Nur Rafidan
3. Faaris Muwaffaq

Informatics Student

Telkom University Purwokerto
