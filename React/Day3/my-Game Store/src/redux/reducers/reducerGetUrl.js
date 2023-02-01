const intialState = {
  Games: [],
};

export default function GetDataReducer (state = intialState, action)  {
  console.log("=>",action.payload);
  switch (action.type) {
    case "GET-DATA":
      return { ...state, Games: action.payload };
      case "SEARCH-VALUE":
        return { ...state, value: action.payload };
    default:
      return state;
  }
};
