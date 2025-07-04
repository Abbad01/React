import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>chai aur context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

// 🔄 Full Flow of the Program (Step by Step):
// ➔ Step 1: Context Creation
// UserContext is created with createContext()—an empty context object.

// ➔ Step 2: Context Provider Setup
// In UserContextProvider, useState holds the user and setUser.

// UserContext.Provider passes down { user, setUser } to its children.

// ➔ Step 3: App Level Integration
// In App.js, the whole app is wrapped with <UserContextProvider>. Now every child (like <Login />) can access this context.

// ➔ Step 4: Context Usage in Login
// In Login.js, you use useContext(UserContext) to access setUser.

// When the form is submitted, it updates the shared state (user), which is stored globally.

// ➔ Step 5: Access the Global Data Anywhere
// Now any other component inside <UserContextProvider> can read the user data (user) or update it (setUser) without prop drilling.

// 🎯 What is Going Where?
// File	Purpose	Where It's Used
// UserContext.js	Creates the context object (UserContext)	Imported in both UserContextProvider and Login
// UserContextProvider.js	Holds and provides the context value (user, setUser)	Used in App.js to wrap the application
// App.js	Wraps everything in the provider	Root of the app
// Login.js	Consumes the context, allows setting the user	Used inside the provider in App.js

// ✏️ Example Use Case:
// User opens app → sees Login component.

// User enters username/password → clicks Submit.

// setUser is called → updates the global state.

// Any other component (e.g., a Dashboard or Header) can now read the logged-in user data via useContext(UserContext).
