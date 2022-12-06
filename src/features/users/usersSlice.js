import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    name: 'Abdullah Sevmez',
  },
  {
    id: 1,
    name: 'Meriem Sevmez',
  },
  {
    id: 2,
    name: 'Melinay Sevmez',
  },
];
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
