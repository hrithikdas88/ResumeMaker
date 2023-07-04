import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setNameAsync = createAsyncThunk(
  "input/setNameAsync",
  async (name) => {
    return name;
  }
);

const inputSlice = createSlice({
  name: "input",
  initialState: {
    personalInfo: {
      name: "",
    },
    submittedName: "",
    loading: false,
    error: null,
  },
  reducers: {
    setName: (state, action) => {
      state.personalInfo.name = action.payload;
    },
    setSubmittedName: (state, action) => {
      state.submittedName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setNameAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setNameAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.personalInfo.name = action.payload;
        state.submittedName = action.payload;
      })
      .addCase(setNameAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setName, setSubmittedName } = inputSlice.actions;
export default inputSlice.reducer;

