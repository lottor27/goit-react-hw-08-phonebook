import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState:{
    filter:''
  },
  reducers: {
    createFilter: (state, { payload }) => {
      state.filter = payload ;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { createFilter } = filterSlice.actions;

// export const filterReducer = (state = initialState,{type,payload})=>{
//   switch (type){
//   case 'changeFilter':
//     return {...state,filter:payload}
//     default: return state
// }}

// export const filterReducer=createReducer(initialState,{
//   [createFilter]:(state,{payload})=>{
//     return {...state,filter:payload}
//   }})
