const defaultParams = {
  todos: [
    {
      title: 'Item: 1',
      complete: false,
    },
  ],
};

export default function (state = defaultParams, action, args) {
  switch (action) {
    case 'ADD_ITEM': {
      const [newItem] = args;
      return {
        ...state,
        todos: [
          ...state.todos,
          { title: `${newItem} ${state.todos.length + 1}`, complete: false },
        ],
      };
    }
    default:
      return state;
  }
}
