import { Region } from "react-native-maps/lib/sharedTypes";

export interface DatabaseItem {
    id?: string,
    typeOfSpecies: 'fish' | 'coral',
    name: string,
    description: string,
    price: number,
    habitat?: Region, // will fill this in when I know what data type it is
    images: string[]
}

export interface User {
    email: string,
    
}