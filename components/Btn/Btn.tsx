import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { COLOR_PRIMARY, PAGE_PADDING } from '../../styles'

interface Props {
    onPress: () => void,
    back?: boolean,
    text?: string,
    secondary?: boolean
}

const Btn = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{...style.btn, ...(props.secondary ? style.btnSecondary : {})}}>
            {props.back ?
                <Image style={style.icon} source={require('../../assets/back.png')} />
                :
                <></>
            }
            {props.text ?
                <Text style={{...style.btnText, ...(props.secondary ? style.btnTextSecondary : {})}}>{props.text}</Text>
                :
                <></>
            }
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    icon: {
        height: 15,
        width: 10
    },
    btn: {
        backgroundColor: COLOR_PRIMARY,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 15,
        marginBottom: 30

    },
    btnSecondary: {
        backgroundColor: 'rgba(255,255,255,0.1)',

    },
    btnText: {
        fontSize: 16,
        color: 'black'
    },
    btnTextSecondary: {
        color: COLOR_PRIMARY
    }

})

export default Btn