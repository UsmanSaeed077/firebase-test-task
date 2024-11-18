import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import LANG from "../../../assets/translation/en.json"
import AppButton from '@/src/components/Button/AppButton'
import { signOut } from '@/src/network/NetworkRequest'
import Helper, { UserDataInterface } from '@/src/helpers/HelperFunctions'
import AppKeys from '@/src/constants/AppKeys'
import { useNavigation } from '@react-navigation/native'
import AppRoutes from '@/src/constants/AppRoutes'


const Home = () => {

    const navigation = useNavigation()

    const [userData, setUserData] = useState<UserDataInterface>()

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        const data = await Helper.getUserData(AppKeys.userData)

        setUserData(data)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.txtStyle}>{LANG.loginInfo}</Text>
                {userData && <Text style={styles.txtStyle}>{userData?.email}</Text>}

                <View style={styles.logoutBtnContainer}>
                    <AppButton
                        text={LANG.logout}
                        onPress={() => {
                            Helper.resetAndGo(navigation, AppRoutes.Login)
                            signOut()
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home