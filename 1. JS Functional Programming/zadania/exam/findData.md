<h2 align="center">findData</h2>

<br>

## Wymagana wiedza

## Technologie potrzebne do zadania

- JS

## Cele główne

- [ ] Napisz funkcję pozwalającą połączyć dane występujące w różnych tablicach w nowy obiekt.
- [ ] Dane należy połaczyć jeśli jakiekolwiek pola obiektów z tablic są identyczne, pod warunkiem że reszta pól nie koliduje ze sobą
- [ ] Funkcja powinna przyjmować tablicę obiektów jako argument.
- [ ] Nie wszystkie tablice mają tą samą długość, oraz nie każdy obiekt posiada tą samą ilość odpowiadających mu wartości.
- [ ] Z metod tablicowych skorzystaj tylko z metody reduce().

## Kawałek kodu dla lepszego początku!

```javascript
Przykładowe obiekty które funkcja powinna móc obsłużyć (pamiętaj by przekazać tablicę obiektów):
- {id: 1, name: "Grzegorz"}
- {name:"Grzegorz" , surname: "NieGrzegorz", animal: { name: "Czarny", age: 1} }
- {id: 1, city: Gliwice }
- {age: 1, color: Black }
- {friends: [{id: 1241, name: Adam}]}
- {name: Adam, lastName: "NieAdam" }
Wynikiem złączenia tablic takich obiektów powinno być:
- {id: 1, name: "Grzegorz", surname: "NieGrzegorz", animal : {name: "Czarny", age: 1 , color: Black}, city: Gliwice}
- {id: 1241, name: Adam, lastName: "NieAdam" }
- {friends: [{id: 1241, name: Adam}]}
```
