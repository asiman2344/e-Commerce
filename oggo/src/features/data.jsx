import { createSlice } from "@reduxjs/toolkit";
import { CITY_LIST, CATEGORY_LIST } from "./categories.js";

const initialState = {
    city: CITY_LIST,
    categories:CATEGORY_LIST
};

const dataSlice = createSlice({
    name: "data",
    initialState
});

export default dataSlice.reducer;