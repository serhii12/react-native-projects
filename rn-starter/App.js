import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        List: {
            screen: ListScreen,
        },
        Image: {
            screen: ImageScreen,
        },
        Counter: {
            screen: CounterScreen,
        },
        Color: {
            screen: ColorScreen,
        },
        Square: {
            screen: SquareScreen,
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App',
        },
    }
);

export default createAppContainer(navigator);
