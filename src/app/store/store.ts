"use client"
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import jobReducer from './jobSlice';

// Define the expected structure for the persisted state
type PersistedState = {
  user: {
    user: {
      name: string;
      email: string;
      username: string;  // Make it a required string
      userType: string;  // Make it a required string
    } | null;
  };
};

// Load state from localStorage with proper typing
const loadState = (): PersistedState => {
  try {
     if (typeof window === "undefined") {
      return { user: { user: null } }; // SSR fallback
    }
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return { user: { user: null } }; // Return empty state if no persisted state
    }
    const state = JSON.parse(serializedState);

    // Handle missing properties by providing default values
    if (state.user && state.user.user) {
      return {
        user: {
          user: {
            name: state.user.user.name,
            email: state.user.user.email,
            username: state.user.user.username || "", // Provide default empty value if missing
            userType: state.user.user.userType || "", // Provide default empty value if missing
          },
        },
      };
    }

    return { user: { user: null } }; // Return empty user state if data is invalid
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return { user: { user: null } }; // Return empty state in case of error
  }
};

// Function to save state to localStorage
const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState); // Save the serialized state
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};

// Load persisted state
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    user: userReducer,
    job:jobReducer,
  },
  preloadedState: persistedState, // Pass persisted state as preloaded state
});

// Subscribe to store updates and save to localStorage
// Subscribe to store updates and save to localStorage
// if (typeof window !== "undefined") {
//   store.subscribe(() => {
//     saveState({
//       user: store.getState().user, // Save only the user slice
//     });
//   });
// }


// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

