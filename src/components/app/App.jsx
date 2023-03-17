import { Header } from "../header";
import { NewTodos } from "../newTodo/NewTodos";
import { TodoList } from "../todoList/TodoList";
import { Footer } from "../footer/Footer";

import styles from "./app.module.css";

export const App = () => {
  return (
    <div>
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <Header />
        <NewTodos />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};
