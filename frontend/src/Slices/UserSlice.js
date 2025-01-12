import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem("loginUser")) ? JSON.parse(localStorage.getItem("loginUser")) : null
  },
  reducers: {
    userDataReducers: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userDataReducers } = UserSlice.actions

export default UserSlice.reducer