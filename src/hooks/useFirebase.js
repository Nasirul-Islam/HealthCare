import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, Googleprovider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
    }, [])
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }
    const handleRegisterWithEmail = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    const handleLoginWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    const handlelogOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setErrorMessage('');
        });
    }
    return {
        user,
        errorMessage,
        handleGoogleLogin,
        handleEmail,
        handlePassword,
        handleRegisterWithEmail,
        handleLoginWithEmail,
        handlelogOut
        // handleForgetPassword
    }
}

export default useFirebase;