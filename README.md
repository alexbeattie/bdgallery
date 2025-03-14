# Vue.js & Firebase Project

This template sets up a complete web application using Vue 3 and Vite for the frontend, with Firebase providing backend services. The application supports user authentication, image uploading and storage, real-time database synchronization, and hosting.

## Features
- **Frontend:** Vue 3 with Vite for efficient build and development workflow.
- **Backend:** Firebase Authentication, Cloud Firestore, Real-Time Database, Cloud Storage, and Hosting.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) with the [Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur).

## Project Configuration

Refer to the [Vite Configuration Reference](https://vite.dev/config/) for customizing your setup.

## Getting Started

### Installation

```sh
npm install
```

### Development Server

Run the development server with hot-reload:

```sh
npm run dev
```

### Production Build

Compile and minify for production deployment:

```sh
npm run build
```

## Firebase Integration

This project uses Firebase services for a robust and scalable backend:

- **Authentication:** Secure user login and registration with Firebase Authentication.
- **Cloud Firestore:** Efficiently store and query structured data.
- **Real-Time Database:** Synchronize data in real-time across clients.
- **Cloud Storage:** Upload, store, and manage images seamlessly.
- **Hosting:** Quick and easy deployment and hosting of your Vue application.

### Firebase Setup

1. Create a project on [Firebase Console](https://console.firebase.google.com/).
2. Register your web application and obtain the Firebase configuration.
3. Add your Firebase configuration details to your Vue project, typically within a `.env` file or directly in your project configuration.
4. Enable Authentication methods in the Firebase console.
5. Set up Firestore and Cloud Storage rules as needed.
6. Deploy your project to Firebase Hosting:

```sh
firebase deploy
```

Refer to the official [Firebase Documentation](https://firebase.google.com/docs) for detailed guidance.
