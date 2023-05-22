import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../styles'
import React, { useState, useEffect } from 'react'
import Heading from '../../components/Heading';
import SearchBar from '../../components/SearchBar';
import { useCollectionData } from "react-firebase-hooks/firestore"
import { DocumentData, addDoc, limit, orderBy, query, where } from 'firebase/firestore';
import { auth, faunaRef, faunaConverter, usersRef, userConverter } from '../../firebase/firebase';
import Filters from '../../components/Filters';
import ItemCard from '../../components/ItemCard/ItemCard';
import { DatabaseItem, User } from '../../models/models';
import Loading from '../../components/Loading';
import { initialPopulationOfDatabase, searchByName } from '../../utils';
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../App';
import Btn from '../../components/Btn';

const Database = () => {

    // States
    const [category, setCategory] = useState('fish')
    const [searchKeyword, setSearchKeyword] = useState('')
    const [scrollOffset, setScrollOffset] = useState(0)
    const [displaySaved, setDisplaySaved] = useState<boolean>(false)
    const [items, setItems] = useState<DocumentData[]>([])
    const [display, setDisplay] = useState<'map' | 'list'>('list')

    // Firebase queries
    const [users, loadingUsers] = useCollectionData<DocumentData>(query(usersRef.withConverter(userConverter)))
    const [data, loading] = useCollectionData<DocumentData>(query(faunaRef.withConverter(faunaConverter), where('typeOfSpecies', '==', category)))

    // Other Variables
    const user = auth.currentUser
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()
    //   @ts-ignore
    const userProperties: User | undefined = users?.find(u => u.id == user?.uid)

    // Use Effects
    useEffect(() => {
        if(!user) navigation.navigate('login', {})
    }, [])
    

    useEffect(() => {
        data ?
            setItems(data)
            :
            {}
    }, [data])

    useEffect(() => {
        !loading && data ?
            setItems(searchByName(data.map(i => i as DatabaseItem), searchKeyword))
            :
            {} // equivalent of pass in python - does nothing        
    }, [searchKeyword])

    useEffect(() => {
        displaySaved && data && userProperties ?
            setItems(data.filter((item) =>
                userProperties.saved.includes(item.id)
            ))
            :
            data ? setItems(data) : {}
    }, [displaySaved])


    // Functions
    const handleLogout = () => {
        auth.signOut()
        navigation.navigate('login', {})
    }
    
    

    // Render
    return (
        <SafeAreaView style={styles.background}>
            {scrollOffset > 30 ? <></> : 
                <View style={style.header}>
                    <Heading text='SeaBase' />
                    <Btn onPress={() => handleLogout()} text='Logout' secondary/>
                </View>
            }
            <SearchBar onChange={(searchString) => setSearchKeyword(searchString)} />
            <Filters onCategoryChange={(cat) => setCategory(cat)} onSavedChange={(display) => setDisplaySaved(display)} onDisplayChange={(display => setDisplay(display))} />
            {loading ?
                <Loading />
                :
                display == 'list' ?
                    <FlatList
                        data={items}
                        renderItem={item => <ItemCard item={item}></ItemCard>}
                        onScroll={e => setScrollOffset(e.nativeEvent.contentOffset.y)}
                    ></FlatList>
                    :
                    <MapView initialRegion={{"latitude": 6.493537121964622, "latitudeDelta": 128.51542242004138, "longitude": 37.452889002466236, "longitudeDelta": 113.78387075187146}} style={style.map}>
                        {items.map((item) => <Marker onPress={() => navigation.navigate("detail", {item: item as DatabaseItem})} coordinate={{ latitude: item.habitat.latitude, longitude: item.habitat.longitude }}></Marker>)}
                    </MapView>
            }

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    map: {
        width: '100%',
        height: 450
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    }
})

export default Database