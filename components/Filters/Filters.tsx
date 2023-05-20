import React, { useEffect, useState } from 'react'
import {View, Text, Switch, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { COLOR_PRIMARY, styles } from '../../styles'

interface Props {
    onChange: (category: string) => void
}

const Filters = (props: Props) => {

    const [category, setCategory] = useState<'fish' | 'coral'>('fish')

    const toggleCategory = () => {
        if(category == 'fish') {
            setCategory('coral')
        } else {
            setCategory('fish')
        }
    }

    useEffect(() => {
        props.onChange(category)
    }, [category])

  return (
    <View style={styles.cont}>
        <TouchableOpacity onPress={toggleCategory} style={style.switch}>
            <View style={{...style.slider, left: category == 'fish' ? 0 : '50%'}}></View>
            <View style={style.iconCont}>
                <Image style={style.icon} source={require('../../assets/fish.png')}></Image>
            </View>
            <View style={style.iconCont}>
                <Image style={style.icon} source={require('../../assets/coral.png')}></Image>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    switch: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.75)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    slider: {
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 20,
        width: '50%',
        height: '100%',
        position: 'absolute',


    },
    iconCont: {
        width: '50%',
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        marginVertical: 5,
        
    }
})

export default Filters