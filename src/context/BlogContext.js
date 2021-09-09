import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={15}>{children}</BlogContext.Provider>;
};

export default BlogContext;
