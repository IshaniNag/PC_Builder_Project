# PC_Builder_Project

🖥️ PC Builder Web Application

A full-stack web application that allows users to build their own custom PC by selecting components such as CPU, GPU, RAM, Storage, and more — similar to PCPartPicker. The app integrates an unofficial PCPartPicker API with asynchronous requests for efficient data retrieval.

🚀 Features

Component Selection – Choose from categories like CPU, GPU, Motherboard, RAM, Storage, PSU, and Case.

Feature-Based Filtering – Filter components by specifications such as clock speed, memory, brand, power consumption, and more.

Real-Time Price Fetching – Get up-to-date pricing information from the API.

Compatibility Checks – Prevent incompatible component selections.

Responsive UI – Works across desktop, tablet, and mobile devices.

Performance Optimization – Uses async requests for faster loading times.

🛠️ Tech Stack <br/>
Frontend:<br/>

HTML, CSS, JavaScript<br/>

Responsive design principles<br/>

Backend:<br/>

Node.js <br/>

Unofficial PCPartPicker API <br/>

Other Tools & Libraries: <br/>

Axios for HTTP requests <br/>

Async/Await for non-blocking API calls <br/>

📂 Project Structure <br/>
PC-Builder/
│
├── frontend/        # UI and client-side logic
├── backend/         # API calls, business logic, server code
├── assets/          # Images, icons, and other static files
├── README.md        # Project documentation
└── package.json     # Dependencies and scripts

⚙️ Installation & Setup <br/>

Clone the repository <br/>

git clone https://github.com/yourusername/pc-builder.git
cd pc-builder

Install dependencies <br/>

npm install     # For Node.js backend

Set up environment variables
Create a .env file in the backend folder:
ini
API_BASE_URL=<Unofficial PCPartPicker API Base URL>PORT=3000

Run the application
npm start

The app should now be running at http://localhost:3000
