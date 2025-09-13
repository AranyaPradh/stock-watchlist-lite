"# stock-watchlist-lite" 
A single-page React web application that allows users to view and interact with a stock watchlist. 
This project was built as part of a Frontend Intern Assignment.

---

## 🚀 Features

- Watchlist Grid 
- Displays 6 stock cards per row (responsive layout). 
- Each card shows Trading Symbol, Capital Market LTP, Futures LTP, % Change, and Last Updated time. 
- Toggle button to switch between two views (CM ↔ Futures). 
- Positive % change is highlighted in green, negative in red. 

- Filters & Sorting 
- Search bar to filter stocks by Trading Symbol. 
- Sort cards by Percentage Change, Capital Market LTP, or Futures LTP (asc/desc). 

- Details Drawer 
- Opens on clicking a stock card. 
- Displays a dummy line chart (30-point) of Capital Market LTP. 
- Shows detailed stock info. 
- Error state with a friendly message when data is missing. 

- Refresh & Resilience 
- Refresh button to reload dummy data. 
- Loading skeletons while fetching data. 
- Random simulated errors with retry option. 
- Auto-updating “Last updated … ago” text. 

- Testing 
- Unit tests using Jest + React Testing Library: 
1. Cards render with correct fields. 
2. Toggle switches between View A and View B. 
3. Error state and retry functionality. 

---

## 📦 Tech Stack

- React (Vite or CRA) 
- JavaScript (ES6+) 
- HTML, CSS (Responsive design) 
- Jest + React Testing Library (for unit tests) 

---
