import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Database from './screens/Database';
import Login from './screens/Login';
import Detail from './screens/Detail';
import { DatabaseItem } from './models/models';

export type StackParams = {
  login: {}
  database: {}
  detail: {
    item: DatabaseItem
  }
}

const Stack = createNativeStackNavigator<StackParams>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='database'
      >
        <Stack.Screen
        name='login'
        component={Login}
        />
        <Stack.Screen
        name='database'
        component={Database}
        />
        <Stack.Screen
        name='detail'
        component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


