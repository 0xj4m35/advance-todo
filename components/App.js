import html from '../core.js';
import { connect } from '../store.js';

function App({ todos }) {
  return html`
    <button onclick="dispatch('ADD_ITEM', 'Item:')">Add item</button>
    <ul>
      ${todos.map((item) => `<li>${item.title}</li>`)}
    </ul>
  `;
}

export default connect()(App);
