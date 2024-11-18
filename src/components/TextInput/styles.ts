import { StyleSheet } from "react-native";
import THEME from "../../../assets/theme/light.json";

export const styles = StyleSheet.create({
  inputStyle: {
    color: THEME.textInput.secondary,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: THEME.border.primary,
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: THEME.textInput.primary,
  },
});
