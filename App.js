import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from './scr/screens/WelcomeScreen';
import LoginScreen from './scr/screens/LoginScreen';
import HelpCenterScreen from "./scr/screens/HelpCenterScreen";
import RegisterScreen from "./scr/screens/RegisterScreen";
import ImageUploader from "./scr/screens/cryingStudents";
import FAQSection from "./scr/components/FAQSection";
import ComplaintScreen from './scr/screens/ComplaintScreen';
import { Provider } from 'react-redux';
import { store } from './scr/store/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Cry" component={ImageUploader} />
          <Stack.Screen name="FAQ" component={FAQSection} />
          <Stack.Screen name="ComplaintScreen" component={ComplaintScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;