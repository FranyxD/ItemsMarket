import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface itemInfo {
  id: number;
  wantTo: string;
  nombre: string;
  precio: number;
}

export const fetchItems = createAsyncThunk("items/fetch", async () => {
  const response = await axios.get("http://localhost:3010/items");
  const data = await response.data;
  console.log(data);
  return data;
});

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action): any => {
      return { ...state, ...action.payload };
    },
    removeItem: (state, action) => {
      // return state.filter(item => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
        return action.payload;
    });
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
