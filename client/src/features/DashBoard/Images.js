// src/features/hero/heroSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileImage: null, // URL of the profile image
  styles:{
    scale:0,
    horizontalOrientation:0,
    verticalOrientation:0
  },
  backgroundImage: '', // URL of the background image
  backgroundImages: [], // Array of multiple background images
  backgroundVideo: null, // URL of the background video
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setProfileImageSlice: (state, action) => {
      state.profileImage = action.payload;
      
    },
    setImageStyles: (state,action) => {
        state.styles = action.payload
        console.log(state.styles)
    },
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
    setBackgroundImages: (state, action) => {
      state.backgroundImages = action.payload;
    },
    setBackgroundVideo: (state, action) => {
      state.backgroundVideo = action.payload;
      console.log(state.backgroundVideo)
    },
  },
});

export const {
  setProfileImageSlice,
  setImageStyles,
  setBackgroundImage,
  setBackgroundImages,
  setBackgroundVideo,
} = heroSlice.actions;

export default heroSlice.reducer;
