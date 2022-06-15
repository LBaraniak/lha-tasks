// przerób zadania z modułu pierwszego na TS w taki sposób, 
// aby każdy argument funkcji był typowany 
// oraz był odpowiedni typ na to co zwraca dana funkcja

// dla przykładu:
// funkcja getMyAge może przyjać Date, number i string jako input
// i zawsze zwraca number


type AllowedTypes = Date | number | string

function getMyAge(input: AllowedTypes): number {
    // ...
    return 0 // tylko dla przykładu
}
