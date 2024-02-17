import { configureStore } from "@reduxjs/toolkit";
import Memo from "./slices/memo";
const Store = configureStore({
  reducer: {
    Memo: Memo,
  },
});

export default Store;
