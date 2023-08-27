export const handlePanding = state => {
  state.isLoading = true;
  state.error = '';
}
export const handleRejected =(state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
}
export const handleFullfilledSignUp =(state, {payload}) => {
  state.isLoading = false;
  state.token = payload.token;
  state.profile = payload.user
  state.isLoggedIn = true;
}
export const handleFullfilledSignIn =(state,{payload}) => {
  state.isLoading = false;
  state.token = payload.token
  state.profile = payload.user
  state.isLoggedIn = true;
}
export const handleFullfilledRefresh =(state,{payload}) => {
  state.isLoading = false;
  state.profile = payload
  state.isLoggedIn = true;
}

  export const handleFullfilledLogOut =(state) => {
    state.isLoading = false;
    state.token = ''
    state.profile = null
    state.isLoggedIn = false;
  }