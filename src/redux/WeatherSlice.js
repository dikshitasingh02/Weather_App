import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY  = "14e28ef80dc64d5cbbd185445252503"
const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?key=14e28ef80dc64d5cbbd185445252503&q=New%20York&days=5"


export const fetchForecastByCity = createAsyncThunk(
    "weather/fetchForecastByCity",
    async (city) => {
        const response = await axios.get(
            `${BASE_URL}/fetchForecastByCity.json?key=${API_KEY}&q=${city}&days=5`
            );
        return response.data;
    }
);

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        forecast: {},
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchForecastByCity.fulfilled, (state,action) =>{
            state.forecast = action.payload
        })
    }
})

export default weatherSlice.reducer;