import jsonServer from "../api/jsonServer";
import dataContext from "./dataContext";

// REDUCER
const blogReducer = (state, action) => {
  switch (action.type) {
    case "getBlogPost":
      return action.payload;
    case "editBlogPost":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

// ACTIONS
const getBlogPost = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogposts");
      console.log(response.data);
      // response.data === [{}, {}, {}]
      dispatch({ type: "getBlogPost", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    // dispatch({ type: "addBlogPost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "editBlogPost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = dataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
