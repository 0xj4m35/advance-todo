import { createStore } from './core.js';
import reducer from './reducer.js';

const { connect, dispatch, attach } = createStore(reducer);

// for easy to use globally
window.dispatch = dispatch;

export { attach, connect };
