import React from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { COLOR_PRIMARY, styles } from '../../styles'
import Heading from '../../components/Heading'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../../App'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'

type Props = NativeStackScreenProps<StackParams, "detail">

const Detail = (props: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()

  const item = props.route.params.item
  console.log(item.images[0])

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <Heading text={item.name} />
        <View style={styles.cont}>
          <Text style={style.heading}>{item.price}€</Text>
        </View>
        <ImageCarousel images={item.images}></ImageCarousel>
        <View style={styles.cont}>
          <Text style={style.heading}>Description</Text>
          <Text style={style.paragraph}>{item.description}</Text>
        </View>
        <View style={styles.cont}>
          <Text style={style.heading}>Habitat</Text>
          <MapView style={style.map}
          initialRegion={item.habitat}
          >
            {item.habitat ? 
              <Marker coordinate={{latitude: item.habitat.latitude, longitude: item.habitat.longitude}} />
            :
            <></>
            }
          </MapView>
        </View>
        
        
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={style.backBtn}>
          <Image style={style.icon} source={require('../../assets/back.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  heading: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20
  },
  paragraph: {
    color: 'white',
    fontSize: 16
  },
  icon: {
    height: 15,
    width: 10
  },
  backBtn: {
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    position: 'absolute',
    bottom: 50,
    right: 20

  },
  map: {
    width: '100%',
    height: 500,
    borderRadius: 20,
  }
})

export default Detail