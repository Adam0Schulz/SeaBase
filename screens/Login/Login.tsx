import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Heading from '../../components/Heading'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOR_PRIMARY, styles } from '../../styles'
import LabledTextInput from '../../components/TextInput'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, usersRef } from '../../firebase/firebase'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParams } from '../../App'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import { User } from '../../models/models'

const Login = () => {

  const [credentials, setCredentials] = useState<{ email: string, password: string }>({ email: '', password: '' })

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()
  const user = auth.currentUser

  useEffect(() => {
    if (user) {
      navigation.navigate('database', {})
    }
  }, [])

  const login = () => {
    console.log(credentials)
    if (credentials.email != '' && credentials.password != '') {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then(() => navigation.navigate('database', {}))
        .catch((error: any) => alert(error.message))
    }

  }

  const register = () => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((cred) => {
        const newUser: User = {
          saved: [],
          isAdmin: false,
        }
        const userDocRef = doc(usersRef, cred.user.uid);
        setDoc(userDocRef, newUser);
      }
      )
      .catch((err) => alert(err.message))
  }

  return (
    <SafeAreaView style={styles.background}>
      <Heading text='SeaBase Login' />
      <View style={style.inputCont}>
        <LabledTextInput label='E-mail' placeholder='E-mail' onChange={(text) => setCredentials({ ...credentials, email: text })} />
        <LabledTextInput label='Password' placeholder='Password' secure onChange={(text) => setCredentials({ ...credentials, password: text })} />
      </View>
      <TouchableOpacity onPress={(e) => login()} style={style.btn}>
        <Text style={style.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={register}>
        <Text style={style.btnTextSecondary}>Register</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  inputCont: {
    marginVertical: 50
  },
  btn: {
    backgroundColor: COLOR_PRIMARY,
    padding: 15,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnTextSecondary: {
    color: COLOR_PRIMARY,
    opacity: 0.7,
    textAlign: 'center',
    margin: 20
  }
})

export default Login