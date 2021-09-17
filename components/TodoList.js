import html from '../core.js';
import TodoItem from './TodoItem.js';
import { connect } from '../store.js';
import FILTERS from '../constants/filters.js';

function TodoList({ todos, filterType, editIndex }) {
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        ${todos.every(FILTERS.completed) && 'checked'}
        onchange="dispatch('TOGGLE_ALL_ITEM', this.checked)"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos
          .filter(FILTERS[filterType])
          .map((todo, index) => TodoItem({ todo, index, editIndex }))}
      </ul>
    </section>
  `;
}

export default connect()(TodoList);
