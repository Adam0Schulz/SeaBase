import React, { useEffect, useState } from 'react'
import {View, Text, Switch, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { COLOR_PRIMARY, PAGE_PADDING, styles } from '../../styles'
import SaveBtn from '../SaveBtn'

interface Props {
    onCategoryChange: (category: string) => void,
    onSavedChange: (displaySaved: boolean) => void,
    onDisplayChange: (string: "map" | "list") => void
}

const Filters = (props: Props) => {

    const [category, setCategory] = useState<'fish' | 'coral'>('fish')
    const [displaySaved, setDisplaySaved] = useState<boolean>(false)

    const toggleCategory = () => {
        if(category == 'fish') {
            setCategory('coral')
        } else {
            setCategory('fish')
        }
    }

    useEffect(() => {
        props.onCategoryChange(category)
    }, [category])

    useEffect(() => {
        props.onSavedChange(displaySaved)
    }, [displaySaved])

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
        <View style={style.otherDisplayOptions}>
            <View style={style.displayOptions}>
                <TouchableOpacity onPress={() => props.onDisplayChange('list')}>
                    <Image source={require('../../assets/display-one-columns.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onDisplayChange('map')}>
                    <Image source={require('../../assets/display-map.png')}></Image>
                </TouchableOpacity>
            </View>
            <SaveBtn onPress={() => setDisplaySaved(!displaySaved)} active={displaySaved}></SaveBtn>
        </View>
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
        
    },
    otherDisplayOptions: {
        marginTop: PAGE_PADDING,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    displayOptions: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        gap: PAGE_PADDING
    }
})

export default Filters