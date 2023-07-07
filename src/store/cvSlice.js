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
      languages: [{ language: "" }],
      skills: [{ skill: "" }],
      workExperiences: [{ Employername: "", Jobtitle: "", Duration: "" }],
      educationalQualifications: [
        { InstituteName: "", Qualification: "", Cgpa: "" },
      ],
    },

    submittedName: "",
    loading: false,
    error: null,
    image: null,
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

    addWorkExperience: (state) => {
      state.personalInfo.workExperiences.push({
        Employername: "",
        Jobtitle: "",
        Duration: "",
      });
    },
    addEducationalQualification: (state) => {
      state.personalInfo.educationalQualifications.push({
        InstituteName: "",
        Qualification: "",
        Cgpa: "",
      });
    },
    setImage: (state, action) => {
      state.image = action.payload;
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
  setImage,

  addEducationalQualification,
} = inputSlice.actions;

export const selectAge = (state) => state.input.personalInfo.age;
export const selectEmail = (state) => state.input.personalInfo.email;
export const selectNumber = (state) => state.input.personalInfo.number;

export default inputSlice.reducer;
