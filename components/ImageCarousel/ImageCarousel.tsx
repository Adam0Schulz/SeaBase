import React, { useState } from 'react'
import {View, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { styles } from '../../styles'

interface Props {
    images: string[]
}

const ImageCarousel = (props: Props) => {

    const [mainImg, setMainImg] = useState(0)

  return (
    <View style={styles.cont}>
        <View style={style.imgCont}>
            <Image style={style.img} source={{uri: props.images[mainImg]}}></Image>
        </View>
        <View style={style.carousel}>
            {props.images.map((img, index) =>
            <TouchableOpacity onPress={() => setMainImg(index)} style={style.smallImgCont}>
                <Image style={style.smallImg} key={index} source={{uri: img}} />
            </TouchableOpacity>
            )}
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    img: {
        width: '100%',
        aspectRatio: 1,
        
    },
    smallImg: {
        width: '100%',
        height: '100%'
    },
    smallImgCont: {
        width: '29%',
        height: 80,
        borderRadius: 20,
        overflow: 'hidden',
    },
    imgCont: {
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'black',
        marginBottom: 20
    },
    carousel: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        flexWrap: 'wrap'
    }
})

export default ImageCarousel