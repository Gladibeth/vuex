export const increment = ( state ) => {
  state.counter++;
  state.lastMutation = 'increment';
}

export const incrementBy = ( state, val ) => {
  state.counter += val;
  state.lastMutation = 'incrementBy';
  state.newVal = val;
}

export const setLoading = ( state,val ) =>{
  state.isLoading = val;
  state.lastMutation = 'setLoading';
}