import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import LANG from "../../../assets/translation/en.json";
import AppInput from '@/src/components/TextInput/AppInput';
import AppImages from '@/src/constants/AppImages';
import AppButton from '@/src/components/Button/AppButton';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '@/src/constants/AppRoutes';
import Helper from '@/src/helpers/HelperFunctions';
import { loginUser } from '@/src/network/NetworkRequest';

const Register = () => {
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isPaswordVisible, setPaswordVisibility] = useState(true)

  const valdateUser = async () => {
    if (!email) {
      Helper.showAlert("Email is required");
    } else if (!Helper.isValidEmail(email)) {
      Helper.showAlert("Invalid email format");
    } else if (!password) {
      Helper.showAlert("Password is required");
    } else if (password.length < 8) {
      Helper.showAlert("Password must be at least 8 characters long");
    } else {
      setLoading(true)

      await loginUser(email.trim().toLocaleLowerCase(), password.trim()).then((value) => {
        console.log("\n\n\nreturn value: ", value, "\n\n\n")
        setLoading(false)

        if (value) {
          Helper.resetAndGo(navigation, AppRoutes.Home)
        }
      })
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>

      <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : undefined}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >

            {/* Create Account Heading */}
            <Text style={styles.headingTitle}>{LANG.login}</Text>

            <View style={styles.contentContainer}>

              {/* Email Address component */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputHeadTxtStyle}>{LANG.emailAddress}</Text>
                <AppInput
                  editable={loading ? false : true}
                  value={email}
                  placeholder={LANG.emailPlaceHolder}
                  onChangeText={(value: string) => setEmail(value)}
                />
              </View>

              {/* Password component */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputHeadTxtStyle}>{LANG.password}</Text>
                <View style={styles.passwordInputContainer}>
                  <AppInput
                    editable={loading ? false : true}
                    secureTextEntry={isPaswordVisible}
                    value={password}
                    placeholder={LANG.passwordPlaceHolder}
                    onChangeText={(value: string) => setPassword(value)}
                    customStyle={styles.passwordInputStyle}
                  />

                  <TouchableOpacity onPress={() => setPaswordVisibility(!isPaswordVisible)}
                    disabled={loading}
                    hitSlop={5}
                    activeOpacity={0.7}
                  >
                    <Image source={isPaswordVisible ? AppImages.closeEye : AppImages.eye} style={styles.eyeIcon} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Create Account Button */}
              <AppButton
                disabled={loading}
                loading={loading}
                text={LANG.login}
                onPress={() => valdateUser()}
                customStyle={styles.btnStyle}
              />

              {/* Already have an account container */}
              <View style={styles.alreadyHaveAccount}>
                <Text>{LANG.dontHaveAccount}
                  <Text style={styles.loginTxtStyle}
                    disabled={loading}
                    suppressHighlighting={true}
                    onPress={() => { navigation.navigate(AppRoutes.Register as never) }}
                  >
                    {" " + LANG.signUp}
                  </Text>
                </Text>
              </View>

            </View>
          </ScrollView>
        </View>

      </KeyboardAvoidingView >
    </SafeAreaView >
  )
}

export default Register