import { createSlice } from "@reduxjs/toolkit";

type TTestState = {
  currentQuestionIndex: number;
  timeRemaining: number;
  testFinished: boolean;
};

const initialState: TTestState = {
  currentQuestionIndex: 0,
  timeRemaining: 60,
  testFinished: false,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    updateCurrentQuestionIndex(state: TTestState) {
      state.currentQuestionIndex += 1;
    },
    resetTest() {
      return initialState;
    },
    updateTime(state, action) {
      state.timeRemaining = action.payload;
    },
    updateTestFinished(state, action) {
      state.testFinished = action.payload;
    },
  },
});

export const {
  updateCurrentQuestionIndex,
  resetTest,
  updateTime,
  updateTestFinished,
} = testSlice.actions;

export default testSlice.reducer;
export { type TTestState };
