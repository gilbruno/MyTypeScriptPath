/**
 * 
 * 
 interface Identity {
  name: string
  surname: string
  pseudo: strin
} 

Simulate Utility Pick Type without using it

Exemple : 

const myIdentity = MyPick<Identity, 'name'>
  
  
 */

interface Identity {
  name: string
  surname: string
  pseudo: string
}

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

type Identity2 = MyPick<Identity, 'name'>

const myId: Identity = {
    name: 'bruno',
    surname: 'gilles',
    pseudo: 'gb' 
} 

const myId2: MyPick<Identity, 'surname'>  = {
    surname: 'toto'
}
