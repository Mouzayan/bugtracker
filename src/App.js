import React from 'react';
import store from './app/store';
import { bugAdded } from './app/actions';
import { bugRemoved } from './app/actions';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

const unsubscribe = store.subscribe(() => {
  console.log('store changed!', store.getState());
})

store.dispatch((bugAdded('Bug 1')))

unsubscribe();

store.dispatch((bugRemoved('Bug 1')))


console.log(store.getState());

export default App;
