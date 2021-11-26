import React from 'react'
import {observer} from 'mobx-react-lite'
import {useStore} from './Store'

const App = observer(() => {
    const store = useStore();
    return (
        <div>
            {store.count}
            <div>
                <button onClick={()=>(store.decrement())}>-</button> 
                <button onClick={()=>(store.increment())}>+</button>
            </div>
        </div>
    )
})

export default App