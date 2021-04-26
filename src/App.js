import React from 'react';
import store from './app/store';
import { bugAdded, bugRemoved, bugResolved } from './app/actions';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

const unsubscribe = store.subscribe(() => {
  console.log('Store Changed!', store.getState());
})

store.dispatch((bugAdded('Bug 1')))
store.dispatch((bugAdded('Bug 2')))
store.dispatch((bugAdded('Bug 3')))

//unsubscribe();

store.dispatch((bugResolved(1)))
//store.dispatch((bugRemoved(2)))

console.log(store.getState());

export default App;
