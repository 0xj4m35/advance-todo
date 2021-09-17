import FILTERS from './constants/filters.js';
import storage from './storage/local.js';

const defaultParams = {
  todos: storage.get(),
  filterType: 'all',
  editIndex: null,
};

export default function (state = defaultParams, action, args) {
  switch (action) {
    case 'ADD_ITEM': {
      const [newItem] = args;
      state.todos = [...state.todos, { title: newItem, complete: false }];
      storage.set(state.todos);
      break;
    }
    case 'TOGGLE_ITEM': {
      const [index] = args;
      state.todos[index].completed = !state.todos[index].completed;
      storage.set(state.todos);
      break;
    }
    case 'TOGGLE_ALL_ITEM': {
      const [checked] = args;
      state.todos.forEach((todo) => (todo.completed = checked));
      storage.set(state.todos);
      break;
    }
    case 'REMOVE_ITEM': {
      const [index] = args;
      state.todos.splice(index, 1);
      storage.set(state.todos);
      break;
    }
    case 'REMOVE_COMPLETED_ITEM': {
      state.todos = state.todos.filter(FILTERS.active);
      storage.set(state.todos);
      break;
    }
    case 'SWITCH_FILTER_TYPE': {
      state.filterType = args[0];
      break;
    }
    case 'SET_EDIT_INDEX': {
      state.editIndex = args[0];
      break;
    }
    case 'UPDATE_ITEM_TITLE': {
      const [index, title] = args;
      state.todos[index].title = title;
      storage.set(state.todos);
      break;
    }
    default:
      break;
  }
  return state;
}
