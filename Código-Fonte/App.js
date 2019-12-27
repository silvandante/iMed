import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListMeds from './pages/ListMeds';
import ListInteracoes from './pages/ListInteracoes';
import SplashScreen from './pages/SplashScreen';
const Navigator = createStackNavigator ({

  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: ({navigation}) => ({
      header: null,
    })
  },

  ListMeds: {
    screen: ListMeds,
  },

  ListInteracoes: {
    screen: ListInteracoes
  }

});

export default createAppContainer(Navigator);