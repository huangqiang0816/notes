export default function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log("Reducer执行");
      return {
        ...state,
        count: state.count + 1
      };
    case "DECERMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
