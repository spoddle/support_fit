import { createSlice } from '@reduxjs/toolkit';

const complaintSlice = createSlice({
  name: 'complaints',
  initialState: {
    complaintsList: [],
  },
  reducers: {
    addComplaint: (state, action) => {
      state.complaintsList.push({
        ...action.payload,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'pending',
      });
    },
    updateComplaintStatus: (state, action) => {
      const { id, status } = action.payload;
      const complaint = state.complaintsList.find(c => c.id === id);
      if (complaint) {
        complaint.status = status;
      }
    },
    deleteComplaint: (state, action) => {
      state.complaintsList = state.complaintsList.filter(c => c.id !== action.payload);
    },
  },
});

export const { addComplaint, updateComplaintStatus, deleteComplaint } = complaintSlice.actions;
export default complaintSlice.reducer;
