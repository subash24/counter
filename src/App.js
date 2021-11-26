import React from 'react';
import { observer, inject } from 'mobx-react';

const App = inject('CounterStore')(
  observer(({ CounterStore }) => {
    return (
      <div>
        {CounterStore.count}
        <div>
          <button onClick={() => CounterStore.decrement()}>-</button>
          <button onClick={() => CounterStore.increment()}>+</button>
        </div>
      </div>
    );
  })
);

export default App;
