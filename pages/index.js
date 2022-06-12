import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Provider } from "../components/TodoListContext";
import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>
            TODO App with{" "}
            <a href="#">Context, State and Reducer</a>
            <br />
            <br />
          </h1>
          <Provider>
            <TodoAdd />
            <TodoList />
          </Provider>
        </div>
      </main>
    </div>
  );
}
