<h2 align="center">Starlink 2.0</h2>

<br>

## Technologie potrzebne do zadania

- Javascript

## Cele główne

- [ ] Stwórz system zarządzania i kontroli układem satelit umożliwiających połączenie z interenetem z każdego miejsca na globie
- [ ] W projekcie powinny zostać odwzorowane poszczególne elementy

* pojedyncza satelita
* grupa satelit
* opertator
* Overlord - big boss z uprawnieniami administratora

## Kawałek kodu dla lepszego początku!

```javascript
class Satelite {
  // Ma miec: uuid, wysokość, współrzędne, status żagla słonecznego(on/off), status nadawania sygnału(on/off), status włączenia satelity
}

class GroupOfSatelites {
  // Zawiera ewidencję satelit które znajdują się w grupie
}

class Operator {
  // Ma miec: imie, nazwisko, uuid
  // Ma umożliwiać:
  // - zmianę wysokości i wpółrzędnych pojedynczych satelit
  // - zmianę wysokości i wpółrzędnychcałej grupy
  // - otwieranie i składanie żagli słonecznych dla pojedynczego egzemplarza jak i całej grupy
  // - właczanie i wyłączanie sygnału nadawczego dla pojedynczych satelit oraz grup
  // - może tworzyć nowe grupy
}

class Overlord {
  // Ma mieć: imie, nazwisko, uuid
  // Ma umożliwiać:
  // - to samo co zwykły operator
  // - może wyłączyć poszczególne satelity, wybrane grupy lub cały system (wszystkie dostępne satelity)
}
```
