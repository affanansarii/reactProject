import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: null,
  data: null,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setData, setError } = postSlice.actions;
export default postSlice.reducer;

export const getPost = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      });
      dispatch(setLoading(false));
      dispatch(setData(data));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.response.data));
    }
  };
};
