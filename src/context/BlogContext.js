import dataContext from "./dataContext";

// REDUCER
const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

// ACTIONS
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "addBlogPost", payload: { title, content } });
    callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};

export const { Context, Provider } = dataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
