import { Provider, observer } from 'mobx-react';
import React from 'react';
import App from '../src/App';
import stores from '../src/Stores';

const index = observer(() => {
  return (
    <Provider {...stores}>
      <App />
    </Provider>
  );
});
export default index;
