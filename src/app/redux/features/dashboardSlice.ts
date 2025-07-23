// redux/features/dashboardSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDashboard = createAsyncThunk('dashboard/fetch', async () => {
  const res = await fetch('/api/dashboard');
  return await res.json();
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { data: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
