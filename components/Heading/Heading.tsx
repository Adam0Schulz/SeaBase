import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { COLOR_PRIMARY, PAGE_PADDING, styles } from '../../styles'

interface Props {
    text: string
}

const Heading = (props: Props) => {
  return (
    <View style={styles.cont}>
        <Text style={style.heading}>
            {props.text}
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    heading: {
        color: COLOR_PRIMARY,
        fontSize: 55,
        marginTop: 30,
        
        
    }
})

export default Heading