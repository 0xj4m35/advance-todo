import html from './core.js';
import { connect } from './store.js';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';
import Footer from './components/Footer.js';

function App({ todos }) {
  return html`
    <section class="todoapp">
      ${Header()} ${!!todos.length && TodoList()} ${!!todos.length && Footer()}
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>
        Template by
        <a href="http://sindresorhus.com" target="_blank">Sindre Sorhus</a>
      </p>
      <p>
        Created by
        <a href="http://theuranus.github.io" target="_blank">theuranus</a>
      </p>
    </footer>
  `;
}

export default connect()(App);
