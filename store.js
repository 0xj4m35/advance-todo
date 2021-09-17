import { createStore } from './core.js';
import reducer from './reducer.js';
import loggerMiddleware from './util/logger.js';

const { connect, dispatch, attach } = createStore(loggerMiddleware(reducer));

// for easy to use globally
window.dispatch = dispatch;

export { attach, connect };
