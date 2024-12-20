# GPK-Frontend

This project is a Vue 3 application designed to manage and display product widgets in a responsive and interactive UI. It leverages modern tools and libraries to ensure a seamless development experience, maintainable code, and scalable architecture.

---

## **Features**

- **Responsive UI**: Built with `Vuetify` to ensure the application is responsive across all devices.
- **State Management**: `Pinia` is used for efficient and easy-to-use global state management.
- **API Integration**: `Axios` is used for handling HTTP requests, providing a clean and efficient way to interact with APIs.
- **Interactive Components**: Custom widgets that support dynamic interactions like color selection, toggles, and linked states.
- **Multilingual Support**: Implemented with `i18n` for internationalization, supporting multiple languages effortlessly.
- **Storybook Integration**: Components are documented and tested visually with `Storybook`.
- **Unit Testing**: `Vitest` is used for unit testing to ensure code reliability.
- **Code Quality**: Code formatting and linting are handled by `antfu/eslint-config` for consistency and maintainability.
- **Auto Imports**: `unplugin-auto-import` is used to reduce boilerplate and minimize package size.
- **Environment Variables**: `.env` and `.env.production` files are used to manage environment-specific configurations.

---

## **Tech Stack**

### **Core Framework**
- **Vue 3**: A progressive framework for building user interfaces.

### **UI Library**
- **Vuetify**: Material Design Component Framework for responsive and customizable UI.

### **State Management**
- **Pinia**: Simple and intuitive state management for Vue applications.

### **Networking**
- **Axios**: A promise-based HTTP client for API communication, with support for request/response interceptors.

### **Internationalization**
- **Vue I18n**: A robust internationalization solution for managing translations and supporting multiple languages.

### **Tooling**
- **Storybook**: For visual documentation and testing of components.
- **Vitest**: A fast unit testing framework for Vue 3.
- **ESLint**: Enforced with `antfu/eslint-config` for consistent code quality.
- **unplugin-auto-import**: Reduces boilerplate by automatically importing commonly used functions.

### **Environment Configuration**
- **`.env`**: Stores development environment variables.
- **`.env.production`**: Stores production-specific configurations.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/HLN177/gpk-frontend.git
cd gpk-frontend
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run the Development Server**
```bash
npm run dev
```
This will start the application in development mode.

### **4. Run Storybook**
To view and interact with components in isolation:
```bash
npm run storybook
```

### **5. Run Tests**
To execute unit tests with Vitest:
```bash
npm run test
```

### **6. Build for Production**
To compile the application for production:
```bash
npm run build
```

---

## **Directory Structure**

```plaintext
src/
├── api/                # API service layer
├── assets/             # Static assets like global styles and images
├── components/         # Vue components
├── locales/            # i18n translations
├── pages/              # Page-level components
├── plugins/            # Plugin registration (Vuetify, etc.)
├── shared/             # Common modules
├── stores/             # Pinia stores
├── types/              # TypeScript type definitions
├── App.vue             # Root component
├── main.ts             # Application entry point
```

---

## **Environment Variables**

Environment variables are used to manage configurations for different environments.

### Example `.env` File
```plaintext
VITE_ENDPOINT=https://api.example.com
```

### Example `.env.production` File
```plaintext
VITE_ENDPOINT=https://api.production.example.com
```
