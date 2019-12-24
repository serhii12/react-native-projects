import React, { useState, useReducer } from 'react';
import { View, Text, Button } from 'react-native';

// const CounterScreen = () => {
//     const [count, setCount] = useState(0);

//     const _onCountIncrease = () => {
//         setCount(count + 1);
//     };

//     const _onCountDecrease = () => {
//         setCount(count - 1);
//     };

//     return (
//         <View>
//             <Button title="Increase" onPress={_onCountIncrease} />
//             <Button title="Decrease" onPress={_onCountDecrease} />
//             <Text>Current Count: {count}</Text>
//         </View>
//     );
// };

// export default CounterScreen;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            break;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const _onCountIncrease = () => {
        dispatch({ type: 'increment', payload: 1 });
    };

    const _onCountDecrease = () => {
        dispatch({ type: 'decrement', payload: 1 });
    };

    return (
        <View>
            <Button title="Increase" onPress={_onCountIncrease} />
            <Button title="Decrease" onPress={_onCountDecrease} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

export default CounterScreen;
