import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost : (dispatch) => {return () => {}} }
    boundActions = {};
    for (let key in actions) {
      // key === addBlogPost
      // boundActions[key] === boundActions.addBlogPost
      // actions[key](dispatch) === actions.addBlogPost(dispatch)
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
