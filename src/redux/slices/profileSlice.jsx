import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: "profileData",
  initialState: {
    profileData: {},
    loading: false,
    error: null,
  },
  reducers: {
    setProfileData: (state, action) => {
      state.profileData = action.payload;
      state.loading = false;
      state.error = null;
    },
    resetProfile: (state) => {
      state.profileData = {};
      state.loading = false;
      state.error = null;
    },
  },
});

export const { resetProfile, setProfileData } = profileSlice.actions;

export default profileSlice.reducer;