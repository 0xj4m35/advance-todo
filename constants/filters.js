const FILTERS = {
  all: (todo) => todo,
  active: (todo) => !todo.completed,
  completed: (todo) => todo.completed,
};

export default FILTERS;
