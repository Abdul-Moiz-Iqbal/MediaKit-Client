import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editMode: false,
};

const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setEditMode: (state) => {
      state.editMode = !state.editMode;
      console.log(state.editMode,' redux')
    },
  },
});

export const { setEditMode} = HeaderSlice.actions;

export default HeaderSlice.reducer;
