import React from "react";
import { initialState } from "./Todo.reducer";
import { reducer } from "./Todo.reducer";
import { actions } from "./Todo.reducer";

export const TodoListContext = React.createContext();
export const Provider = ({ children }) => {
      
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {
    todoList: state.todoList,
    loadTodoList: (newTodoList) => {
        dispatch({ type: actions.LOAD_TODO_ITEM, newTodoList });
    },
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
      return false;
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: actions.TOGGLE_DONE, todoItemId });
      return false;
    },
  };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};
