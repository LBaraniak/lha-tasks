// przerób zadania z modułu drugiego na TS w taki sposób, 
// abys miał kompletny interfejs dla każdej z klas zawierający typowanie wszystkich propów i metod klas

// dla przykładu:

type ChangeableKeys = 'name' | 'price' | 'category'
type ValuesType = string | number

interface ICartItem {
    uuid: string
    name: string
    price: number
    category?: string
    modify: (key: ChangeableKeys, value: ValuesType) => void
}

class CartItem implements ICartItem {
    uuid: string
    name: string
    price: number
    category?: string

    constructor(name: string, price: number, category: string) { 

    }
    modify = (key: ChangeableKeys, value: ValuesType): void => { }
}