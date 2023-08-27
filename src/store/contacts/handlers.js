export const handlePanding = state => {
  state.isLoading = true;
  state.error = '';
}
export const handleFullfilled =(state, action) => {
  state.isLoading = false;
  state.contacts = action.payload;
}
export const handleRejected =(state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
}
export const handleFullfilledDelete = (state, action) => {
  state.isLoading = false;
  
}
export const handleFullfilledUpdate = (state, action) => {
  state.isLoading = false;
  
}