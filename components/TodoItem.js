import html from '../core.js';

function TodoItem({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && 'completed'} ${editIndex === index &&
      'editing'}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          onchange="dispatch('TOGGLE_ITEM', ${index})"
          ${todo.completed && 'checked'}
        />
        <label ondblclick="dispatch('SET_EDIT_INDEX', ${index})"
          >${todo.title}</label
        >
        <button
          class="destroy"
          onclick="dispatch('REMOVE_ITEM', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onblur="dispatch('SET_EDIT_INDEX', null)"
        onkeyup="if (event.keyCode === 13) {
					this.value.trim() 
						? dispatch('UPDATE_ITEM_TITLE', ${index}, this.value.trim()) 
						: dispatch('REMOVE_ITEM', ${index});
					dispatch('SET_EDIT_INDEX', null);
			} 
			else if (event.keyCode === 27) {dispatch('SET_EDIT_INDEX', null)}"
      />
    </li>
  `;
}

export default TodoItem;
