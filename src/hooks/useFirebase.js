import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoding, setIsLoding] = useState(true);

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        setIsLoding(true);
        return signInWithPopup(auth, Googleprovider)
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoding(false);
        });
        return () => unsubscribed
    }, [])
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleRegisterWithEmail = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setErrorMessage('');
                setUserName();
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        })
            .catch((error) => {
            });
    }
    const handleLoginWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    const handlelogOut = () => {
        setIsLoding(true)
        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {
                setErrorMessage('')
            })
            .finally(() => setIsLoding(false))
    }
    return {
        user,
        errorMessage,
        handleGoogleLogin,
        handleName,
        handleEmail,
        handlePassword,
        handleRegisterWithEmail,
        handleLoginWithEmail,
        handlelogOut,
        isLoding,
        setIsLoding
        // handleForgetPassword
    }
}

export default useFirebase;