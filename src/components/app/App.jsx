// COMPONENTS
import { Header } from "components/header";
import { NewTodos } from "components/newTodo/NewTodos";
import { TodoList } from "components/todoList/TodoList";
import { Footer } from "components/footer/Footer";

// STYLES
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
