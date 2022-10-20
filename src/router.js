import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Page from './pages/Page';

const Stack = createNativeStackNavigator();

function Routes() {

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Page" component={Page} />
          </Stack.Navigator>
        </NavigationContainer>
      );

}

export default Routes