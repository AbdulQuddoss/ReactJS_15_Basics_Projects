const reducer = (state, action) => {
  //console.log(action.payload, action.Id);
  if(action.type === "ADD_TODO"){
      return {...state,
      items: [
        ...state.items,
        {
          text: action.payload
        }
      ],
      loading: true,
      }
  }
}
export default reducer;