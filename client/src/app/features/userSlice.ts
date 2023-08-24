import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface UserType {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  id: string;
}

const initUserState: UserType = {
  fullName: "",
  userName: "",
  email: "",
  password: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initUserState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initUserState;
    },
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
