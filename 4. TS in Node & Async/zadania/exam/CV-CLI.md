<h2 align="center">Opis zadania CV CLI </h2>

<br>

## Wymagana wiedza

- HTTPS/HTTP
- [Tworzenie aplikacji konsolowej takiej jak npm](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs)

## Technologie potrzebne do zadania

- Typescript

## Cele główne

- [ ] Stworz aplikacje konsolowa do tworzenia CV
- [ ] Ma posiadac nastepujace komendy:
  - CV-CLI define-template: pozwala okreslic plik szablonu dla CV
  - CV-CLI add-personal: dodaje dane personalne do CV (imie, nazwisko, email)
  - CV-CLI add-about: dodaje ogolny opis twojej osoby. Powinna przyjmowac sciezke do pliku tekstowego i go odczytac
  - CV-CLI add-edu: dodaje opis twojej edukacji. Powinna dzialac jak komenda add-about
  - CV-CLI add-skills: dodaje opis twoich umiejetnosci. Powinno przyjmowac argumenty z lini komend, wraz z ich ocena od 1-5. Ocena powinna sluzyc do wygenerowania pustych/zapelnionych gwiazdek.
  - CV-CLI add-image: przyjmuje sciezke do zdjecia ktore ma byc umieszczone w CV
  - CV-CLI clear: usuwa wszystkie zapisane dane
  - CV-CLI send: pozwala na wyslanie z twojego konta Linkedin wiadomosci do rekruterow. Przyjmuje jako argument liste emaili
