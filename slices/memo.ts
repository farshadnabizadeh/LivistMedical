import { createSlice } from "@reduxjs/toolkit";
// React Slices
const Menu = (state: any, action: any) => {
  return {
    ...state,
    status: action,
  };
};
const Id = (state: any, action: any) => {
  return {
    ...state,
    id: action,
  };
};
const Memo = createSlice({
  name: "Memo",
  initialState: {
    status: false,
    id: 0,
  },
  reducers: {
    Menu,
    Id,
  },
});

export const { Menu: MenuAction, Id: IdAction } = Memo.actions;
export default Memo.reducer;
