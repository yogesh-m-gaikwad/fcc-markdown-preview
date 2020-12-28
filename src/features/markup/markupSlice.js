import { createSlice, createAction } from '@reduxjs/toolkit';

const refresh = createAction('markup/refresh');

// This is the markup reducer required for application.
export const markupSlice = createSlice({
  name: 'markup',
  initialState: {
      text: '',
  },
  reducers: {
    refresh: (state, action) => {
        state.text = action.payload;
      }
  },
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const refreshAsync = markup => dispatch => {  
  setTimeout(() => {      
      dispatch(refresh(markup));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMarkup = state => state.markup.text;

export default markupSlice.reducer;
