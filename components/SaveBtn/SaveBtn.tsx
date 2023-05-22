import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'

interface Props {
    onPress: () => void,
    active?: boolean,
}

const SaveBtn = (props: Props) => {

  return (
    <TouchableOpacity style={{}}
        onPress={() => props.onPress()}
    >
        {props.active ? 
            <Image source={require('../../assets/heart-full.png')}></Image>
        :    
            <Image source={require('../../assets/heart-empty.png')}></Image>
        }
    </TouchableOpacity>
  )
}

export default SaveBtn