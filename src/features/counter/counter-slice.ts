// Slice is a Slice of Global Redux state, it represent state managment for a single functionality.

import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// createSlice is the main API funciton you use to define redux logic
// PayloadAction is a ts type that define, This is the contents of one given action object 

// Shape of a state, inside of slice that is managed by reducer 
interface CounterState {
  value: number,
}

// initial state
const initialState: CounterState = {
  value: 10,
}

// slice reducer logic
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { 
    // incremented Reducer
    // Opinion: function name itself is kind off ACTION
    incremented(state){
      // mutable state change works due to immer (immer wraps our state object, and tracks our mutations)
      state.value++;
    },
  },
});




// slice Object has -> reducer function that knows how to update the data, for any case
// and it automatically generate the action creator for each function in reducers

export const { incremented } = counterSlice.actions;  
export default counterSlice.reducer;

