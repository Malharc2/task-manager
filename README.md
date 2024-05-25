# 🌟 Task Scheduler

A simple and elegant task scheduler application built with **Angular** and styled using **Tailwind CSS**. This application allows users to seamlessly add, view, edit, and delete tasks.

## ✨ Features

- 📝 **Add new tasks** with title, description, and due date.
- 📋 **View a list of tasks** with clear, user-friendly UI.
- ✏️ **Edit existing tasks** to update details.
- 🗑️ **Delete tasks** that are no longer needed.
- ✔️ **Mark tasks as complete/incomplete** for easy tracking.

## 🚀 Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Angular CLI** (v11 or later)

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/task-scheduler.git
   cd task-scheduler
2. Install dependencies:
npm install
3. Install Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

4. Configure Tailwind CSS:
Update tailwind.config.js:
module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.ts',
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

5. Create Tailwind CSS file:
Create src/styles/tailwind.css and add the following:

@tailwind base;
@tailwind components;
@tailwind utilities;
6. Update Angular styles configuration:
In angular.json, update the styles array:
"styles": [
  "src/styles/tailwind.css",
  "src/styles.css"
],

📚 Usage
Running the Application
To run the application in development mode:
ng serve
Navigate to http://localhost:4200/ in your browser to see the application.

📂 Project Structure
src/app/: 
Contains the main application code
app.component.ts: 
Main app component
task.ts: 
Task model
task.service.ts: 
Service for managing tasks
task-list/:
Task list component
task-list.component.ts: 
Task list component logic
task-list.component.html:
Task list component template
task-list.component.css:
Task list component styles
task-form/: 
Task form component
task-form.component.ts:
Task form component logic
task-form.component.html: 
Task form component template
task-form.component.css: 
Task form component styles



🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the style and conventions of the project.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

🙏 Acknowledgments
Angular
Tailwind CSS
Made with ❤️ by Malhaar
