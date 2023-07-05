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
      age: "",
      email: "",
      number: "",
      languages: [],
    },
    additionalInfo: {
      skills: [],
      workExperience: [],
      educationalQualification: [],
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
    setPersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    addLanguage: (state, action) => {
      state.personalInfo.languages.push(action.payload);
    },
    addSkill: (state, action) => {
      state.additionalInfo.skills.push(action.payload);
    },
    addWorkExperience: (state, action) => {
      state.additionalInfo.workExperience.push(action.payload);
    },
    addEducationalQualification: (state, action) => {
      state.additionalInfo.educationalQualification.push(action.payload);
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

export const {
  setName,
  setSubmittedName,
  setPersonalInfo,
  addLanguage,
  addSkill,
  addWorkExperience,
  addEducationalQualification,
} = inputSlice.actions;

export default inputSlice.reducer;


