import React from 'react';
import { ActivityIndicator, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';
import THEME from "../../../assets/theme/light.json"

interface Props {
    loading?: boolean,
    disabled?: boolean,
    text: string,
    customStyle?: StyleProp<ViewStyle>,
    txtStyle?: StyleProp<TextStyle>,
    onPress(): void
}

function AppButton({ disabled = false, loading, text, customStyle, txtStyle, onPress }: Props) {
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}
            disabled={disabled}
            activeOpacity={0.7}
            style={[styles.container, customStyle]}
        >
            {loading ?
                <ActivityIndicator size={"small"} color={THEME.button.secondary} />
                :
                <Text style={[styles.txtStyle, txtStyle]}>{text}</Text>
            }
        </TouchableOpacity>
    );
}

export default AppButton;