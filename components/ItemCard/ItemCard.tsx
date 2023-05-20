import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { DatabaseItem } from '../../models/models'
import { DocumentData } from 'firebase/firestore'
import { PAGE_PADDING, styles } from '../../styles'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParams } from '../../App'

interface Props {
    item: DocumentData
}


const ItemCard = (props: Props) => {

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()

    return (
        <View style={styles.cont}>
            <TouchableOpacity onPress={() => navigation.navigate("detail", {item: props.item.item})} style={style.card}>
                <Image style={style.img} source={{uri: props.item.item.images[0]}}></Image>
                <LinearGradient 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']} 
                    start={{
                        x: 0,
                        y: 0
                    }}
                    end={{
                        x: 0,
                        y: 1
                    }}
                    style={style.contrastOverlay} />
                <View style={style.contrastOverlay}></View>
                <View style={style.headingCont}>
                    <Text style={style.heading}>{props.item.item.name}</Text>
                    <Text style={style.heading}>{props.item.item.price}€</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        width: '100%',
        height: 166,
        borderRadius: 20,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    contrastOverlay: {  
        width: '100%',
        height: 83,
        position: 'absolute',
        bottom: 0,
        
    },
    headingCont: {
        position: 'absolute',
        left: PAGE_PADDING,
        bottom: PAGE_PADDING,
        right: PAGE_PADDING,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        
    }
})

export default ItemCard