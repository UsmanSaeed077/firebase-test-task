import { StyleSheet } from 'react-native'
import THEME from "../../../assets/theme/light.json"

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: THEME.backgroundColor,
    },
    container: {
        flex: 1,
        backgroundColor: THEME.backgroundColor,
        justifyContent: 'center',
        alignItems: "center",
    },
    txtStyle: {
        fontSize: 20,
        color: THEME.text.primary,
        marginBottom: 10,
    },
})

export default styles