import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Iprops {
  firstValue: number;
  secondValue: number;
  total: number;
}

export interface Okok {
  firstValue: number;
  secondValue: number;
}

const initState: Iprops = { firstValue: 0, secondValue: 0, total: 0 };

const okSlice = createSlice({
  name: "ok",
  initialState: initState,
  reducers: {
    cong(state, action: PayloadAction<Okok>) {
      state.total = action.payload.firstValue + action.payload.secondValue;
    },
    tru(state, action: PayloadAction<Okok>) {
      state.total = action.payload.firstValue - action.payload.secondValue;
    },
    nhan(state, action: PayloadAction<Okok>) {
      state.total = action.payload.firstValue * action.payload.secondValue;
    },
    chia(state, action: PayloadAction<Okok>) {
      state.total = action.payload.firstValue / action.payload.secondValue;
    },
  },
});

const store = configureStore({
  reducer: { ok: okSlice.reducer },
});

export const { cong, tru, nhan, chia } = okSlice.actions;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
