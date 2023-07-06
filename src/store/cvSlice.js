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
      skills: [],
      workExperience: {
          jobtitle:[],
          Employeename:[],
          Duration:[]
      },
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
      state.personalInfo.skills.push(action.payload);
    },
    addWorkExperiencetitle: (state, action) => {
      state.personalInfo.workExperience.jobtitle.push(action.payload);
    },
    addWorkExperienceEmployeename: (state, action) => {
      state.personalInfo.workExperience.Employeename.push(action.payload);
    },
    addWorkExperienceDuration: (state, action) => {
      state.personalInfo.workExperience.Duration.push(action.payload);
    },
    addEducationalQualification: (state, action) => {
      state.personalInfo.educationalQualification.push(action.payload);
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
  
  addWorkExperiencetitle,
  addWorkExperienceEmployeename,
  addWorkExperienceDuration,
  addEducationalQualification,
} = inputSlice.actions;

export default inputSlice.reducer;


