import React from 'react';
import { ColorValue, KeyboardTypeOptions, NativeSyntheticEvent, ReturnKeyTypeOptions, StyleProp, TextInput, TextInputSubmitEditingEventData, TextStyle } from 'react-native';
import { styles } from './styles';
import THEME from '../../../assets/theme/light.json'

interface Props {
    editable?: boolean | undefined,
    autoFocus?: boolean | undefined,
    secureTextEntry?: boolean | undefined,
    maxLength?: number | undefined,
    value: string,
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,
    keyboardType?: KeyboardTypeOptions | undefined,
    placeholder: string,
    customStyle?: StyleProp<TextStyle> | undefined,
    onChangeText: ((text: string) => void) | undefined,
    onSubmitEditing?: ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined,
    returnKeyType?: ReturnKeyTypeOptions | undefined,
    textAlign?: "center" | "left" | "right" | undefined,
    textAlignVertical?: "center" | "auto" | "top" | "bottom" | undefined,
    multiline?: boolean | undefined,
    maxHeight?: number | undefined,
    placeholderTextColor?: ColorValue | undefined,
}

function AppInput({
    editable = true,
    autoFocus,
    secureTextEntry = false,
    maxLength,
    value,
    autoCapitalize,
    keyboardType = 'default',
    placeholder,
    customStyle,
    onChangeText,
    onSubmitEditing,
    returnKeyType,
    textAlign = 'left',
    textAlignVertical = 'center',
    multiline,
    maxHeight,
    placeholderTextColor,
}: Props) {
    return (
        <TextInput
            editable={editable}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            textAlignVertical={textAlignVertical}
            textAlign={textAlign}
            multiline={multiline}
            maxLength={maxLength}
            autoFocus={autoFocus}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor || THEME.textInput.placeHolder}
            onChangeText={(text) => onChangeText && onChangeText(text)}
            onSubmitEditing={(text) => onSubmitEditing && onSubmitEditing(text)}
            style={[styles.inputStyle, customStyle, { height: maxHeight ? maxHeight : 50 }]}
        />
    );
}

export default AppInput;