const initialState = 1;

const pageNumReducer = (state = initialState, action) => {
   const { type } = action;
   switch (type) {
      case 'NEXT_PAGE':
         return state + 1;
      case 'PREV_PAGE':
         return state - 1;
      default:
         return state;
   }
}

export default pageNumReducer;