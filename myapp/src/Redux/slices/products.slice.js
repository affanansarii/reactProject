import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: null,
  data: null,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
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

export const { setLoading, setData, setError } = productsSlice.actions;

export default productsSlice.reducer;

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    });
    dispatch(setLoading(false));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.response.data));
  }
};

// const productsSlice = createSlice({
//   name: "products",
//   initialState: initialState,
//   extraReducers: (res) => {
//     res
//       .addCase(getProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.data = null;
//         state.error = action.payload;
//       });
//   },
// });

// export default productsSlice.reducer;

// export const getProducts = createAsyncThunk("getProducts", async () => {
//   try {
//     const { data } = await axios({
//       method: "GET",
//       url: "https://fakestoreapi.com/products",
//     });
//     return data;
//   } catch (error) {
//     return error.response.data;
//   }
// });
