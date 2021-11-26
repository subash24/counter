import React, { createContext, useContext } from 'react'
import {makeAutoObservable} from 'mobx'


class Store{
    count = 0

    constructor()
    {
        makeAutoObservable(this);
    }

    increment(){
        this.count += 1;
    }

    decrement(){
        this.count-=1;
    }
}


const StoreContext = createContext(new Store());

const StoreProvider = ({children, store})=>{

    return (<StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>)
}

const useStore = ()=>{
    return useContext(StoreContext);
}

export {StoreProvider, useStore, Store}