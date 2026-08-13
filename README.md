# AXPL Services

A React-based frontend for the Services section of the AXPL website.

The project includes the main AXPL service pages with a reusable layout, responsive navigation, service sidebar, footer, and service-to-service navigation.

## Services

- Solar Cold Storages
- Electrical System & Solar Power
- Automation & Water System
- Electrical Vehicle

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Vite
- Lucide React

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ServiceSidebar.jsx
│   └── Footer.jsx
│
├── data/
│   └── services.js
│
├── pages/
│   └── ServicePage.jsx
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── images/
    ├── solar-cold-storage.svg
    ├── solar-power.svg
    ├── water-system.svg
    └── electric-vehicle.svg