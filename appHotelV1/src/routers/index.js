import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login, Home} from '../screens';
import RegisterScreen from '../screens/login/Register';




const Stack = createNativeStackNavigator();

const Routers = () => {
  return (




         <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Splash" component={Splash} />
      
    </Stack.Navigator>
  
  



   
    
  );
  
};
export default Routers;
