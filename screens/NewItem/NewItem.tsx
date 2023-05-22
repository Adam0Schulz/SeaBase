import React, { useState } from 'react'
import {View, SafeAreaView} from 'react-native'
import { styles } from '../../styles'
import LabeledTextInput from '../../components/TextInput'
import MapView from 'react-native-maps'
import {useUploadFile} from 'react-firebase-hooks/storage'
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { db, storage } from '../../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import * as ImagePicker from 'expo-image-picker'

const NewItem = () => {

    const [images, setImages] = useState<string[]>([])
    const [imageLoading, setImageLoading] = useState(false)
    const [uploadFile, uploadingFile] = useUploadFile()

    const handleUploadImage = async (imagePath: string) => {
        setImageLoading(true)
        const res = await fetch(imagePath);
        const blob = await res.blob();
    
        const result = await uploadFile(storageRef(storage, blob.name), blob)
        if (result) {
          getDownloadURL(storageRef(storage, result.metadata.fullPath)).then((url) => {
            setImageLoading(false)
            setImages([...images, url])
          })
    
        }
    
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
    
          handleUploadImage(result.assets[0].uri)
        }
      };

  return (
    <SafeAreaView style={styles.background}>
        <LabeledTextInput label={'Name of the Species'} placeholder='Name' onChange={(e) => console.log(e)}/>
        <LabeledTextInput label={'Name of the Species'} placeholder='Name' onChange={(e) => console.log(e)}/>
        <LabeledTextInput label={'Name of the Species'} placeholder='Name' onChange={(e) => console.log(e)}/>
        <LabeledTextInput label={'Name of the Species'} placeholder='Name' onChange={(e) => console.log(e)}/>
        <MapView onRegionChange={(e) => console.log(e)}></MapView>
        
    </SafeAreaView>
  )
}

export default NewItem