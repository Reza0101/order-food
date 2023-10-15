import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: <any>[],
  authState: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.data.push({ data: action.payload });
      state.authState = true;
    },
    logout: (state, action) => {
      state.authState = false;
      state.data = [];
    },
  },
});

export const { loginUser, logout } = userSlice.actions;
export default userSlice.reducer;
