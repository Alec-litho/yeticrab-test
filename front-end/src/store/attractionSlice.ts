import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Attraction, Status } from "../types.d";
import axios from "axios";

interface AttractionState {
  attractions: Attraction[];
  isLoading: boolean;
  error: null | string;
}

const URL = "http://localhost:3001/attraction"

const initialState: AttractionState = {
  attractions: [],
  isLoading: false,
  error: null,
};

export const fetchAttractionsThunk = createAsyncThunk<Attraction[], void>("data/fetchAttractions", async (_) => {
  const {data} = await axios.get(URL);
  return data
});

export const createAttractionThunk = createAsyncThunk<Attraction, Omit<Attraction, "id" | "addedDate">>("data/createItem", async (attraction: Omit<Attraction, "id" | "addedDate">) => {
   const {data} =await axios.post(URL, attraction);
   return data;
});

export const updateAttractionThunk = createAsyncThunk<Attraction,Attraction>("data/updateAttraction", async ({ id, ...attraction }) => {
  console.log(attraction)
  const {data} = await axios.patch<Attraction>(`${URL}/${id}`, attraction);
  return data
});

export const deleteAttractionThunk = createAsyncThunk<Attraction, number>("data/deleteAttraction", async (id: number) => {
  const {data} = await axios.delete(`${URL}/${id}`);
  return data
});

const attractionSlice = createSlice({
  name: "attractions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttractionsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAttractionsThunk.fulfilled, (state, action: PayloadAction<Attraction[]>) => {
        state.attractions = action.payload
        state.isLoading = false;
      })
      .addCase(fetchAttractionsThunk.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch attractions";
        state.isLoading = false;
      })
      .addCase(createAttractionThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createAttractionThunk.fulfilled, (state, action: PayloadAction<Attraction>) => {
        state.attractions.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createAttractionThunk.rejected, (state, action) => {
        state.error = action.error.message || "Failed to create attraction";
        state.isLoading = false;
      })
      .addCase(updateAttractionThunk.fulfilled, (state, action: PayloadAction<Attraction>) => {
        const index = state.attractions.findIndex((attraction) => attraction.id === action.payload.id);
        if (index !== -1) {
          state.attractions[index] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(updateAttractionThunk.rejected, (state, action) => {
        state.error = action.error.message || "Failed to update attraction";
        state.isLoading = false;
      })
      .addCase(deleteAttractionThunk.fulfilled, (state, action: PayloadAction<Attraction>) => {
        state.attractions = state.attractions.filter((attraction) => attraction.id !== action.payload.id);
        state.isLoading = false;
      })
      .addCase(deleteAttractionThunk.rejected, (state, action) => {
        state.error = action.error.message || "Failed to delete attraction";
        state.isLoading = false;
      });
  },
});

export default attractionSlice.reducer;

