import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

const navigator = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
        },
        RestaurantDetails: {
            screen: RestaurantDetailsScreen,
        },
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Restaurants Search',
        },
    }
);

export default createAppContainer(navigator);
