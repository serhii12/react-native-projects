import React, { useReducer, createContext } from 'react';

const bindActionCreators = (actions = {}, dispatch, state) => {
    const boundActions = {};
    for (const key of Object.keys(actions)) {
        boundActions[key] = actions[key](dispatch, state);
    }

    return boundActions;
};

export const createStore = (reducer, actions, initialState) => {
    const Context = createContext(initialState);

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const actionCreators = bindActionCreators(actions, dispatch, state);

        return <Context.Provider value={{ state, ...actionCreators }}>{children}</Context.Provider>;
    };

    return { Context, Provider };
};
