// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from 'firebase/storage'
import { getFirestore, collection, FirestoreDataConverter, DocumentData, WithFieldValue, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { DatabaseItem, User } from '../models/models'
import { firebaseConfig } from "./firebaseConfig"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const faunaRef = collection(db, 'sea-fauna')
const usersRef = collection(db, 'users')

const faunaConverter: FirestoreDataConverter<DatabaseItem> = {
  toFirestore(item: WithFieldValue<DatabaseItem>): DocumentData {
    return { 
        typeOfSpecies: item.typeOfSpecies,
        name: item.name,
        description: item.description,
        price: item.price,
        habitat: item.habitat,
        images: item.images
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): DatabaseItem {
    const data = snapshot.data(options);
    return {
        id: snapshot.id,
        name: data.name,
        typeOfSpecies: data.typeOfSpecies,
        description: data.description,
        price: data.price,
        habitat: data.habitat,
        images: data.images
    };
  },
}

const userConverter: FirestoreDataConverter<User> = {
  toFirestore(item: WithFieldValue<User>): DocumentData {
    return { 
        saved: item.saved,
        isAdmin: item.isAdmin
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);
    return {
        id: snapshot.id,
        saved: data.saved,
        isAdmin: data.isAdmin
    };
  },
}

export { auth, db, faunaRef, usersRef, storage, faunaConverter, userConverter }