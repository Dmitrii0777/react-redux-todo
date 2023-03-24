// COMPONENTS
import Header from "@components/header";
import NewTodos from "@components/newTodo";
import TodoList from "@components/todoList";
import Footer from "@components/footer";

// STYLES
import styles from "./app.module.css";

const App = () => {
  return (
    <>
      <div className={styles.fullscreen}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Header />
            <NewTodos />
            <TodoList />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
