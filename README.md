# 🚗 EV Dashboard – Analytics Assessment  
**Screening Test – Summer Internship under Dr. Abhijit Chandra**

![EV Dashboard Preview](https://github.com/user-attachments/assets/01ff6e9a-774b-4d13-bdac-6304eb6de34f)

## 🌐 Live Demo  
🔗 [Visit the Dashboard](https://ev-dashboard-xi.vercel.app/) <!-- Replace with your actual deployment URL -->

---

## 📌 Overview  
An interactive **Electric Vehicle (EV) Analytics Dashboard** built with **React**, **Recharts**, and **Tailwind CSS**. The dashboard visualizes EV adoption, manufacturing trends, and geographical patterns in an elegant and animated interface.

---

## ✨ Features  
- 📊 **Data Visualizations** using Recharts (bar charts, pie charts, area charts)  
- 🎨 **Tailwind CSS** for modern, responsive styling  
- 🚀 **Performance Optimized** with Vite and modular code structure  
- 🔄 **Global State Management** using Zustand for smooth data handling  

---

## 🛠️ Tech Stack  
- **Frontend Framework:** React.js (Vite)  
- **Data Visualization:** Recharts  
- **Styling:** Tailwind CSS  

---

## ⚙️ Getting Started  

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/ev-dashboard.git
cd ev-dashboard
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Run Development Server
```bash
npm run dev
```
The app will be live at: http://localhost:5173/
## 📁 Project Structure
```bash
📂 ev-dashboard
├── 📁 src
│   ├── 📁 assets        # Images and static content
│   ├── 📁 components    # Reusable UI elements
│   ├── 📁 pages         # Main dashboard pages
│   ├── 📁 store         # Zustand state management
│   ├── 📄 App.jsx       # Root component
│   └── 📄 main.jsx      # Application entry point
├── 📄 package.json      # Project dependencies and scripts
├── 📄 README.md         # Documentation
```
## 📊 Key Components

### 📍 `TrendsPage.jsx`
- **EV Registration Trends**  
  Vertical bar chart showing electric vehicle registration trends across the top 10 Indian cities over several years.

- **EV Manufacturer Growth Trends**  
  Another vertical bar chart that illustrates how production output of top EV manufacturers has evolved over time.

---

### 📍 `AnalyticsPage.jsx`
- **Top 10 Cities with Most EVs**  
  Displays the cities with the highest EV populations using a bar or pie chart.

- **EV Distribution by Country**  
  Pie chart showing how EVs are distributed across countries (or regions/states if localized).

- **Top 10 EV Manufacturers by Production**  
  Bar chart showcasing the manufacturers leading in EV output.

- **Yearly EV Production Area Chart**  
  Area chart visualizing production growth trends over time, broken down by brand.

---

### 🧠 `store/fetchAll.js`
- Central data-fetching logic using Zustand to:
  - Make asynchronous API calls
  - Store and manage global state
  - Provide data across components without prop drilling
## 📬 Contact

If you have any questions, feedback, or wish to discuss this project further, feel free to reach out:

- 📧 Email: [kanishkraj600@gmial.com](kanishkraj600@gmial.com)
- 💼 GitHub: [KanishkRajTech](https://github.com/KanishkRajTech)

---

 Thanks for checking out the EV Dashboard! 🚀
