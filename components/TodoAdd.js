import React from "react";
import axios from "axios";
import { TodoListContext } from "./TodoListContext";
import styles from "../styles/Home.module.css";

export const TodoAdd = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { addTodoItem, loadTodoList } = React.useContext(TodoListContext);
  
  const loadInitialState = async () => {
    try {
        const response = await axios.get(
          "https://handy-humpback-40.hasura.app/api/rest/list",
          {
            headers: {
              "x-hasura-access-key":
                "oGEEecLxhSc4Kbbe2IJD2DlJM0NnRL60IwhkMQBS0wy8xKr1b1nsc4EG17l9K1TL",
            },
          }
        );
        console.log(response)
        loadTodoList(response.data.todoItems || [])
      } catch (error) {
        console.error(error);
      }
}

const handleSubmit = (event) => {
    event.preventDefault();
    addTodoItem(event.target.todo.value)
    loadInitialState();
  }

  return (
    <>
      <form className={styles.cardForm} onSubmit={handleSubmit}>
        <input
          className={styles.cardInput}
          type="text"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your exciting TODO item!"
        />
      </form>
    </>
  );
};
