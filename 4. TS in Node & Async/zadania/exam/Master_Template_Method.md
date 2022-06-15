<h2 align="center">Opis zadania Master Template Method </h2>

<br>

## Wymagana wiedza

- Jak pracować na plikach
- Czym jest wzorzec projektowy metody szablonowej

## Technologie potrzebne do zadania

- Typescript
- Google API

## Cele główne

- [ ] Rozwiązanie ma korzystać z metody szablonowej
- [ ] Stwórz rozwiązanie które umożliwia wygenerowanie z wejściowego obiektu:
- [ ] Plików rodzaju: yaml, docx, pdf, xlsx, xml
- [ ] Wejściowy obiekt może być strukturą maksymalnie trzywymiarową.
- [ ] Wszystkie pliki powinny zostać skompresowane do archiwum ,,Master.Template.zip"
- [ ] Archiwum powinno zostać wrzucone na twój dysk google

## W jaki sposób obiekty mają być zapisywane do pliku

- Każdy wymiar obiektu powinien posiadać własne oznaczenie w każdym z plików.
- Dla plików yaml powinny być to odpowiednie ułożenie właściwości, zgodnie z przyjętą konwencją dla plików tego rodzaju.
- Dla plików docx i pdf powinny być to opowiednie czcionki (od h1 do h3)
- Dla plików xlsx pierwszy wymiar obiektu powinnien znajdować się na samej górze, najniższy na samym dole.
- Dla plików xml powinno być to odpowiednie zagnieżdżenie obiektów

## Czym jest obiekt trzywymiarowy w rozumieniu twórcy zadania?

Obiekt typu : { name: "greg", work : { company: { name: Localhost, payment: Too small } } age: 21 }
