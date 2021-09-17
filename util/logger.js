export default function (reducer) {
  return (state, action, args) => {
    console.group(action);
    console.log('Prev State:', state);
    console.log('Arguments:', args);
    const nextState = reducer(state, action, args);
    console.log('Next State:', nextState);
    console.groupEnd();
    return nextState;
  };
}
