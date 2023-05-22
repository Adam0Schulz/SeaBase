import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOR_PRIMARY, styles } from '../../styles'
import Heading from '../../components/Heading'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../../App'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import SaveBtn from '../../components/SaveBtn'
import { DocumentData, deleteDoc, doc, query, setDoc } from "firebase/firestore";
import { auth, db, userConverter, usersRef } from '../../firebase/firebase'
import { DatabaseItem, User } from '../../models/models'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loading from '../../components/Loading'
import Btn from '../../components/Btn/Btn'

type Props = NativeStackScreenProps<StackParams, "detail">

const Detail = (props: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()
  const [users, loadingUsers] = useCollectionData<DocumentData>(query(usersRef.withConverter(userConverter)))

  const user = auth.currentUser
  // @ts-ignore
  const userProperties: User | undefined = users?.find(u => u.id == user?.uid)
  const item = props.route.params.item

  const saved = userProperties?.saved.includes(item.id ? item.id : '')


  useEffect(() => {
    if (!user) navigation.navigate('login', {})
  }, [])

  const toggleSave = () => {
    if (userProperties && user && item.id) {

      if (saved) {
        const updatedSaved = userProperties.saved.filter(i => i != item.id)
        setDoc(doc(db, 'users', user.uid), { ...userProperties, saved: updatedSaved } as User)
      } else {
        setDoc(doc(db, 'users', user.uid), { ...userProperties, saved: [...userProperties.saved, item.id] } as User)
      }
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Heading text={item.name} />
        <View style={style.header}>
          <Text style={style.heading}>{item.price}€</Text>
          {loadingUsers ? <Loading /> : <SaveBtn onPress={toggleSave} active={saved}></SaveBtn>}
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
              <Marker coordinate={{ latitude: item.habitat.latitude, longitude: item.habitat.longitude }} />
              :
              <></>
            }
          </MapView>
        </View>


      </ScrollView>
      <View style={style.backBtnCont}><Btn onPress={() => navigation.goBack()} back></Btn></View>
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
  map: {
    width: '100%',
    height: 500,
    borderRadius: 20,
  },
  backBtnCont: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Detail