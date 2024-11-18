import { CommonActions } from "@react-navigation/native";
import { Alert, Platform } from "react-native";
import Toast from "react-native-root-toast";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserDataInterface {
    email: string,
    uid: string
}

class HelperFunctions {
    async storeUserData(key: string, data: object) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            // saving error
        }
    };

    async getUserData(key: string) {
        try {
            const data = await AsyncStorage.getItem(key);
            if (data !== null) {
                return JSON.parse(data)
            }
        } catch (e) {
            // error reading value
        }
    }

    async removeKeys() {
        try {
            await AsyncStorage.clear();
        } catch (e) {
        }
    }

    isValidEmail(email: string) {
        var re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    showToast(message: string) {
        try {
            let toast = Toast.show(message, {
                duration: Toast.durations.LONG,
                position:
                    Platform.OS == "ios" ? Toast.positions.TOP : Toast.positions.TOP,
                backgroundColor: "white",
                textColor: "black",
                // shadow: true,
                opacity: 1.0,
                animation: true,
                // hideOnPress: true,
                containerStyle: {
                    width: "100%",
                    borderRadius: 10,
                    marginTop: Platform.OS == "ios" ? 0 : 0,
                },
                delay: 0,

                onShow: () => {
                    // calls on toast\`s appear animation start
                },
                onShown: () => {
                    // calls on toast\`s appear animation end.
                },
                onHide: () => {
                    // calls on toast\`s hide animation start.
                },
                onHidden: () => {
                    // calls on toast\`s hide animation end.
                },
            });
        } catch (error) {
            console.log("showToast ==> ", error);
        }
    }

    showAlert(message: string) {
        Alert.alert("Alert", message, [{ text: "Okay", style: "cancel" }]);
    }

    resetAndGo(navigation: any, routeName: string, params?: any) {
        try {
            if (navigation) {

                if (params) {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{
                                name: routeName,
                                params: params
                            }],
                        })
                    );
                } else {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: routeName }],
                        })
                    );
                }
            }
        } catch (error) {
            console.log("resetAndGo ==> ", error);
        }
    }
}

const Helper = new HelperFunctions();

export default Helper;