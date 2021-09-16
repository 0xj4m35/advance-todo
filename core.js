/**
 * THE LIBRARY WORKS SAME REACT + REDUX
 */

// A tagged template literals to get html string
export default function html([first, ...strings], ...args) {
  return (
    args
      .reduce((acc, curr) => [...acc, ...curr, strings.shift()], [first])
      // Remove all Falsy values except 0
      .filter((x) => (x && x !== true) || x === 0)
      .join('')
  );
}

export function createStore(reducer) {
  let state = reducer();
  /**
   * I use Map here for 2 main reasons:
   * - can loop through all keys
   * - key can be a object which key in object({}) can't be
   */
  const roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const _component = component();
      root.innerHTML = _component;
    }
  }

  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    /**
     * selector: function select data in state
     * Finally assign all props, state and arguments into component's props
     */
    connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
