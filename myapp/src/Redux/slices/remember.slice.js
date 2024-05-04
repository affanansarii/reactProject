import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checked: false,
  email: "",
  password: "",
};

const rememberSlice = createSlice({
  name: "remember",
  initialState: initialState,
  reducers: {
    setRemember(state, action) {
      //   state.checked = true;
      //   state.email = action.payload.email;
      //   state.password = action.payload.password;
      return (state = {
        ...action.payload,
        checked: true,
      });
    },
    eraseRemember(state) {
      //   state.checked = false;
      //   state.email = "";
      //   state.password = "";
      return (state = initialState);
    },
  },
});

export const { setRemember, eraseRemember } = rememberSlice.actions;
export default rememberSlice.reducer;
