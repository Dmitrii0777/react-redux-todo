export const selectTodods = (state) => state.todos;

export const selectVisibleTodos = (state, filters) => {
  const { todos } = state.todos;

  switch (filters) {
    case "all": {
      return todos;
    }
    case "active": {
      return todos.filter((item) => !item.completed);
    }
    case "completed": {
      return todos.filter((item) => item.completed);
    }
    default: {
      return todos;
    }
  }
};
