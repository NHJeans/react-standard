import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem('texts')
  ? JSON.parse(localStorage.getItem('texts'))
  : [];

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    onAddText: (state, action) => {
      state.push(action.payload)
      localStorage.setItem("texts", JSON.stringify(state));
    }
  }
})

export const { onAddText } = textSlice.actions
export default textSlice.reducer