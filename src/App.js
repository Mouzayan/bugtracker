import React from 'react';
import store from './app/store';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

store.subscribe(() => {
  console.log('store changed!', store.getState());
})

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1"
  }
})

// store.dispatch({
//   type: "bugRemoved",
//   payload: {
//     id : 1,
//   }
// })

console.log(store.getState());
export default App;
