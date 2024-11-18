import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import AppRoutes from '../constants/AppRoutes';
import Home from '../screens/Home/Home';
import SplashScreen from '../screens/Splash/SplashScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={AppRoutes.Splash}
            screenOptions={{
                headerShown: false,
                animation: "none",
            }}
        >
            <Stack.Screen name={AppRoutes.Splash} component={SplashScreen} />
            <Stack.Screen name={AppRoutes.Login} component={Login} />
            <Stack.Screen name={AppRoutes.Register} component={Register} />
            <Stack.Screen name={AppRoutes.Home} component={Home} />
        </Stack.Navigator>
    )
}

export default AppStack