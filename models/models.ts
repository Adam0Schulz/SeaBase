import { Region } from "react-native-maps/lib/sharedTypes";

export interface DatabaseItem {
    id?: string,
    typeOfSpecies: 'fish' | 'coral',
    name: string,
    description: string,
    price: number,
    habitat: Region,
    images: string[]
}

export interface User {
    id?: string,
    saved: string[],
    isAdmin: boolean
    
}