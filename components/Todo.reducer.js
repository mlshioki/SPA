import axios from "axios"

export const initialState = {
  todoList: [],
};

export const actions = {
  LOAD_TODO_ITEM: "LOAD_TODO_ITEM",
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  TOGGLE_DONE: "TOGGLE_DONE",
};

const addTodo = async (description) => {
  try {
    const response = await axios.post(
      "https://handy-humpback-40.hasura.app/api/rest/list",
      {
        description,
      },
      {
        headers: {
          "x-hasura-access-key":
            "oGEEecLxhSc4Kbbe2IJD2DlJM0NnRL60IwhkMQBS0wy8xKr1b1nsc4EG17l9K1TL",
        },
      }
    );
    console.log(response)
  } catch (error) {
    console.error(error);
  }
};

const updateTodo = async (id) => {
    console.log("cheguei aqui")
    try {
      const response = await axios.delete(
        "https://handy-humpback-40.hasura.app/api/rest/list/" + id,
        {
          headers: {
            "x-hasura-access-key":
              "oGEEecLxhSc4Kbbe2IJD2DlJM0NnRL60IwhkMQBS0wy8xKr1b1nsc4EG17l9K1TL",
          },
        }
      );
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOAD_TODO_ITEM: {
      return {
        todoList: [...action.newTodoList],
      };
    };
    case actions.ADD_TODO_ITEM:
      const newTodo = action.todoItemLabel;
      addTodo(newTodo);
      return {
        todoList: [
          ...state.todoList,
        ],
      };
    case actions.TOGGLE_DONE: {
        const idTodo = action.todoItemId;
        console.log("cheguei aqui")
        updateTodo(idTodo);
      return {
        todoList: [
          ...state.todoList,
        ],
      };
    }
    default:
      return state;
  }
};
