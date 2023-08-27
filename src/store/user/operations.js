import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance} from 'API/Instance';
import axios from 'axios';


const token ={
  set(token){
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(){
    axios.defaults.headers.common.Authorization = '';
  }
}

export const signUpUserThunk = createAsyncThunk(
  'user/signUp',
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.post('users/signup', body);
      token.set(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInUserThunk = createAsyncThunk(
  'user/signIn',
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.post('users/login', body);
      token.set(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUserThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('https://connections-api.herokuapp.com/users/logout');
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })

  export const refreshUserThunk = createAsyncThunk(
    'user/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.user.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      token.set(persistedToken);
      try {
        const { data } = await axios.get(
          'https://connections-api.herokuapp.com/users/current'
        );
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
