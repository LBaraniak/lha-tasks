<h2 align="center">Will It Fly</h2>

<br>

## Technologie potrzebne do zadania

- Javascript

## Cele główne

- [ ] Potrzebne jest narzędzie, które sprawdzi czy wykonywane loty są opłacalne, i czy da sie je odbyć bez międzylądowania (w celach tankowania).
- [ ] Warunki przyjęte w ramach zadania:

* minimum do odbycia lotu to 50% obłożenia najniższej klasy występującej w samolocie
* najniższa klasa zajmuje 80% miejsc w samolocie
* odległość liczymy od lotniska do lotniska w linii prostej

- [ ] Stałe przyjęte do zadania:

* cena biletu klasy ekonomicznej - 300 zł
* cena biletu klasy biznes - 2x ekonomiczna
* cena biletu pierwszej klasy - 3x ekonomiczna
* przyjęte spalanie: 3L / pasażer / 100 km
* średnia cena paliwa lotniczego - 7 zł/L
* cena za każdą sztuke bagażu - 100 zł
* rodzaje pogody: dobra (spalanie standardowe), wiatr (+10% do spalania) i burza (+20% do spalania)

## Kawałek kodu dla lepszego początku!

```javascript
class Plane {
  // Ma mieć: id, ilość miejsc w poszczególnych klasach i pojemność baku
}

class Passenger {
  // Ma mieć: id, wybrana klasa, ilość płatnego bagażu (max 2 sztuki)
}

class Flight {
  // Ma mieć: id, samolot, ilość pasażerów w każdej klasie, pogoda, lotnisko wylotu i przylotu, dystans do przebycia
}

// Ma umożliwić:
// - obliczenie paliwa koniecznego do odbycia lotu
// - sprawdzenie czy samolot może przelecieć bez międzylądowania
// - czy pokonanie tej trasy jest opłacalne, czyt. czy przychód jest ponad 3x większy niż koszt paliwa na trasie
```
