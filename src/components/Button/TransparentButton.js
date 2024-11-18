import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import NormalText from '../AppText/NormalText';
import THEME from '../../../assets/theme/light.json'

function TransparentButton({ disabled, text, customStyle, txtStyle, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}
            disabled={disabled}
            activeOpacity={0.7}
            style={[styles.container, { backgroundColor: disabled ? THEME.button.tertiary : null }, customStyle]}>
            <NormalText text={text} customStyle={[styles.txtStyle, txtStyle]} />
        </TouchableOpacity>
    );
}

export default TransparentButton;