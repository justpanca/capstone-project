const accessReducer = (state, action) => {
    switch (action.type) {
        case "Auth/AccessLogin":
        return {
          ...state,
          accessLogin: action.payload
        };
        case "My/Course":
        return {
          ...state,
          buyCourse: [...state.buyCourse, action.payload]
        };
      default:
        return state;
    }
  };

  export {accessReducer}