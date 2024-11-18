import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { registerRootComponent } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStack from './src/navigation/AppStack';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import THEME from "./assets/theme/light.json"

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={THEME.backgroundColor}
                />
                <NavigationContainer>
                    <AppStack />
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default App
registerRootComponent(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})