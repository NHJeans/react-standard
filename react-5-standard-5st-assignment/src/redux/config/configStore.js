import { configureStore } from '@reduxjs/toolkit';
import texts from '../slices/textSlice';

const store = configureStore({
  reducer: {
    texts
  },
});

export default store;