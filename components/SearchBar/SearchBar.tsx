import React from 'react'
import {StyleSheet, TextInput, View, Image} from 'react-native'
import {styles} from '../../styles'

interface Props {
  onChange: (string: string) => void
}

const SearchBar = (props: Props) => {
  return (
    <View style={styles.cont}>
        <TextInput onChange={(e) => props.onChange(e.nativeEvent.text)} style={style.input} placeholder='Search' placeholderTextColor={'#9C9C9C'}></TextInput>
        <Image style={style.icon} source={require('../../assets/search.png')}></Image>
    </View>
  )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 15,
        fontSize: 16,
        padding: 15,
        paddingLeft: 45,
    },
    icon: {
        position: 'absolute',
        top: 18,
        left: 15
    }
})

export default SearchBar