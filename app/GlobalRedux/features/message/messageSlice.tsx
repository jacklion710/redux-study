import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MessageState {
  message: string; // New state for the message
}

const initialState: MessageState = {
  message: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    }
  }
});

export const { setMessage } = authSlice.actions;
export default authSlice.reducer;
