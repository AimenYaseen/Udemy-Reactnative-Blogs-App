import dataContext from "./dataContext";

// REDUCER
const blogReducer = (state, action) => {
  switch (action.type) {
    case "editBlogPost":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
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
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "editBlogPost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = dataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
