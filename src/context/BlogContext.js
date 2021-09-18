import dataContext from "./dataContext";

// REDUCER
const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post # ${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

// ACTIONS
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "addBlogPost" });
  };
};

export const { Context, Provider } = dataContext(
  blogReducer,
  { addBlogPost },
  []
);
