import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { styles } from '../../styles'

interface Props {
    label: string,
    placeholder: string,
    secure?: boolean,
    onChange: (text: string) => void
}

const LabeledTextInput = (props: Props) => {
  return (
    <View style={styles.cont}>
        <Text style={style.label}>{props.label}</Text>
        <TextInput style={style.input} onEndEditing={(e) => props.onChange(e.nativeEvent.text)} placeholder={props.placeholder} secureTextEntry={props.secure}></TextInput>
    </View>
  )
}

const style = StyleSheet.create({
    label: {
        color: 'white',
        fontSize: 14,
        marginBottom: 14
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 15,
        fontSize: 16,
        padding: 15,
    }
})

export default LabeledTextInput