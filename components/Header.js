import html from '../core.js';

function Header() {
  return html`
    <header class="header">
      <h1>todos</h1>
      <p>
        This is a demo app using my self-build react + redux clone library.<br />
        <i
          >The library is about 40 lines in
          <a
            href="https://github.com/theuranus/advance-todo/blob/main/core.js"
            target="_blank"
            ><b>core.js</b></a
          ></i
        >
      </p>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onkeyup="event.keyCode === 13 && this.value.trim() && dispatch('ADD_ITEM', this.value.trim())"
      />
    </header>
  `;
}

export default Header;
