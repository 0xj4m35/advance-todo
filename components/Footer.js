import FILTERS from '../constants/filters.js';
import html from '../core.js';
import { connect } from '../store.js';

function Footer({ todos, filterType }) {
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter(FILTERS.active).length}</strong> item left</span
      >
      <ul class="filters">
        ${Object.keys(FILTERS).map(
          (filter) => `<li>
          <a class="${
            filterType === filter && 'selected'
          }" href="#" onclick="dispatch('SWITCH_FILTER_TYPE', '${filter}')">${filter}</a>
        </li>`
        )}
      </ul>
      <button
        class="clear-completed"
        onclick="dispatch('REMOVE_COMPLETED_ITEM')"
      >
        Clear completed
      </button>
    </footer>
  `;
}

export default connect()(Footer);
