
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

// Create the Redux store using configureStore from @reduxjs/toolkit
export const store = configureStore({
    reducer: rootReducer, // Root reducer combining all reducers
    // Middleware and DevTools configuration is handled automatically
});
