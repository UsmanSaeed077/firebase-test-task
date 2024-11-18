import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Helper from '@/src/helpers/HelperFunctions'
import AppKeys from '@/src/constants/AppKeys'
import { useNavigation } from '@react-navigation/native'
import AppRoutes from '@/src/constants/AppRoutes'
import THEME from "../../../assets/theme/light.json"
import auth from '@react-native-firebase/auth';
import { signOut } from '@/src/network/NetworkRequest'

const SplashScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        const data = await Helper.getUserData(AppKeys.userData)

        const user = auth()?.currentUser;

        setTimeout(() => {
            data ? Helper.resetAndGo(navigation, AppRoutes.Home) : Helper.resetAndGo(navigation, AppRoutes.Login)

            if(!user) {
                signOut()
            }
        }, 2500);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.txtStyle}>Loading Application...</Text>
                <ActivityIndicator size={"large"} color={THEME.button.primary} />
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen