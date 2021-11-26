import React from 'react';

import { configure } from 'mobx';
import CounterStore from './CounterStore';

configure({ enforceActions: 'never' });

export const stores = {
  CounterStore,
};

// export const StoreContext = React.createContext(Globalstore);

// export const Store = () => React.useContext(StoreContext);

// export const Store = store;

export default stores;
