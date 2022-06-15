<h2 align="center">Electronic Grade Book</h2>

<br>

## Wymagana wiedza

- Podstawy Javascript
- Podstawy Object Oriented Programming(OOP)

## Technologie potrzebne do zadania

- Javascript

## Przydatne linki

- Czym jest OOP - https://www.freecodecamp.org/news/how-javascript-implements-oop/
- Object w JS - https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript

## Cele główne

- [ ] Stwórz dziennik elektroniczny, który będzie umożliwiał prowadzenie ewidencji i postępów klasy:

* Stwórz obiekt odwzorowywujący nauczyciela oraz wychowawcę klasy
* Stwórz obiekt odwzorowywujący ucznia
* Stwórz obiekt odwzorowywujący rodzica
* Stwórz obiekt odwzorowywujący dziennik

## Kawałek kodu dla lepszego początku!

```javascript
class Teacher {
  // Ma miec: Imie, Nazwisko, uuid, nauczany przedmiot, oraz skrzynkę odbiorczą na wiadomości od rodziców i uczniów
  // Ma umożliwiać:
  // - przeglądanie listy uczniów i rodziców
  // - przeglądanie ocen każdego ucznia
  // - dodawanie ocen każdemu uczniowi
  // - wpisywanie nieobecności każdemu uczniowi
  // - odczytywanie wiadomości
  // - odpisywanie na wiadomości
}

class ClassTeacher {
  // to samo co klasa Teacher, i dodatkowo możliwość dodawania i usuwania uczniów, rodziców i nauczycieli z dziennika, oraz wysyłanie wiadomości do wszystkich uczniów w klasie lub rodziców naraz
}

class Parent {
  // Ma miec: imie, nazwisko, uuid, oraz powinien mieć przypisanego studenta jako dziecko
  // Ma umożliwiać:
  // - przeglądanie ocen swojego dziecka
  // - przeglądanie nieobecności swojego dziecka
  // - usprawiedliwianie nieobecności swojego dziecka
  // - wymianę wiadomości z nauczycielem
}

class Student {
  // Ma mieć: imie, nazwisko, uuid oraz przypisanego rodzica
  // Ma umożliwiać:
  // - przeglądanie swoich ocen
  // - przeglądanie swoich nieobecności
  // - wymianę wiadomości z nauczycielem
}

class GradeBook {
  // Ma miec:
  // - przypisanego wychowawcę
  // - listę nauczycieli
  // - liste uczniów z przypisanymi rodzicami
  // Ma umożliwiać:
  // - dodawanie uczniów i rodziców
  // - przypisywanie uczniów do rodziców lub na odwrót
  // - dodawanie nauczycieli (przy odpowiednich uprawnieniach)
  // - listę nieobecności
  // - kanały komunikacyjne
}
```
