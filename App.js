

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
});

export default createAppContainer(AppNavigator);