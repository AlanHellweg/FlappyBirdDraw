// App.tsx 

import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./types";
import { Config, Game, Home } from "@screens";
const App = createStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <App.Navigator initialRouteName="home">
      <App.Screen name="home" component={Home} options={{ headerShown: false }} />
      <App.Screen name="config" component={Config} options={{ headerShown: false }} />
      <App.Screen name="game" component={Game} options={{ headerShown: false }} />
    </App.Navigator>
  );
};

export default AppNavigation;
