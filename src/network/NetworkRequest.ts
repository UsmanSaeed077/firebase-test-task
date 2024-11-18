import auth from '@react-native-firebase/auth';
import Helper from '../helpers/HelperFunctions';
import AppKeys from '../constants/AppKeys';

const createUser = async (email: string, password: string): Promise<boolean> => {
    try {
        const result = await auth().createUserWithEmailAndPassword(email, password);
        Helper.showToast('User account created & signed in!');

        const userInfo = {
            uid: result?.user?.uid,
            email: result?.user?.email
        }

        Helper.storeUserData(AppKeys.userData, userInfo)

        return true;
    } catch (error: any) {
        if (error?.code === 'auth/email-already-in-use') {
            Helper.showAlert('That email address is already in use!');
        } else if (error?.code === 'auth/invalid-email') {
            Helper.showAlert('That email address is invalid!');
        } else {
            console.error(error);
        }
        return false;
    }
};


const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
        const result = await auth().signInWithEmailAndPassword(email, password);
        Helper.showToast('User signed in');

        const userInfo = {
            uid: result?.user?.uid,
            email: result?.user?.email
        }

        Helper.storeUserData(AppKeys.userData, userInfo)

        return true;
    } catch (error: any) {

        if (error?.code == "auth/invalid-credential") {
            Helper.showAlert("Invalid credentials")
        } else {
            Helper.showAlert('That email address is invalid!')
        }

        return false;
    }
};

const signOut = async () => {
    await Helper.removeKeys()
    await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}

export { createUser, loginUser, signOut }