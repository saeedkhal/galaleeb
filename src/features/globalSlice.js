import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsSidebarOpen: (state, actions) => {
      state.isSidebarOpen = actions.payload;
    },
  },
});

export const { setIsSidebarOpen } = globalSlice.actions;
export default globalSlice.reducer;
