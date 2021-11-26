import React from 'react'
import App from '../src/App'
import { StoreProvider, useStore } from '../src/Store'
const index = () => {
  const store = useStore();
  return (
    <StoreProvider store={store}>
      <App/>
    </StoreProvider>
  )
}
export default index