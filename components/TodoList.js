import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { TodoListContext } from "./TodoListContext";
import styles from "../styles/Home.module.css";

export const TodoList = () => {
  const { loadTodoList, todoList, markAsCompleted } = React.useContext(TodoListContext)
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
  useEffect(() => {
    
    loadInitialState();
  }, []);
  const handleSubmit = (id) => {
    markAsCompleted(id)
    loadInitialState();
  }
  return (
    <>
      {todoList.filter((item) => !item.done).map((item) => (
        <a
          href="#"
          onClick={() => handleSubmit(item.id)}
          className={styles.card}
          key={item.id}
        >
          <p>{item.description}</p>
        </a>
      ))}
    </>
  );
};
