import { StyleSheet } from 'react-native'
import THEME from "../../../assets/theme/light.json";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: THEME.backgroundColor,
    },
    container: {
        flex: 1,
        backgroundColor: THEME.backgroundColor,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 140,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    headingTitle: {
        fontSize: 30,
        color: THEME.text.primary,
        fontWeight: "bold",
    },
    contentContainer: {
        marginTop: 38,
    },
    inputContainer: {
        marginTop: 22,
    },
    inputHeadTxtStyle: {
        fontSize: 16,
        color: THEME.text.primary,
        fontWeight: "normal",
        marginBottom: 6,
    },
    txtStyle: {
        fontSize: 16,
        color: THEME.text.primary,
        fontWeight: "normal",
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: THEME.border.primary,
        paddingRight: 10,
    },
    passwordInputStyle: {
        flex: 1,
        borderWidth: 0,
    },
    eyeIcon: {
        width: 25,
        height: 25,
    },
    btnStyle: {
        marginTop: 38,
    },
    alreadyHaveAccount: {
        alignSelf: 'center',
        marginTop: 50,
    },
    alreadyHaveAccountTxt: {
        fontSize: 16,
        color: THEME.text.primary,
    },
    loginTxtStyle: {
        fontWeight: "bold",
    },
})

export default styles