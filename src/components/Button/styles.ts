import { StyleSheet } from 'react-native';
import THEME from '../../../assets/theme/light.json'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.button.primary
    },
    txtStyle: {
        fontSize: 16,
        color: THEME.text.tertiary,
        fontWeight: "600",
        textAlign: 'center',
    },
})