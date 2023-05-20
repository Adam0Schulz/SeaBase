import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { styles } from '../../styles'
import React, { useState, useEffect } from 'react'
import Heading from '../../components/Heading';
import SearchBar from '../../components/SearchBar';
import { useCollectionData } from "react-firebase-hooks/firestore"
import { DocumentData, limit, orderBy, query, where } from 'firebase/firestore';
import { faunaRef, itemConverter } from '../../firebase/firebase';
import Filters from '../../components/Filters';
import ItemCard from '../../components/ItemCard/ItemCard';
import { DatabaseItem } from '../../models/models';
import Loading from '../../components/Loading';
import { searchByName } from '../../utils';

const Database = () => {

    const [category, setCategory] = useState('fish')
    const [data, loading] = useCollectionData<DocumentData>(query(faunaRef.withConverter(itemConverter), where('typeOfSpecies', '==', category)))
    const [items, setItems] = useState<DocumentData[]>([])
    const [searchKeyword, setSearchKeyword] = useState('')
    const [scrollOffset, setScrollOffset] = useState(0)

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
    

    return (
        <SafeAreaView style={styles.background}>
            {scrollOffset > 30 ? <></> : <Heading text='SeaBase'/>}
            <SearchBar onChange={(searchString) => setSearchKeyword(searchString)} />
            <Filters onChange={(cat) => setCategory(cat)}/>
            

            {loading ? 
                <Loading />
            :
                <FlatList
                data={items}
                renderItem={item => <ItemCard item={item}></ItemCard>}
                onScroll={e => setScrollOffset(e.nativeEvent.contentOffset.y)}
                >
                    
                </FlatList>
            }
            
        </SafeAreaView>
    )
}

export default Database