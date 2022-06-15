<h2 align="center">Markdown parser</h2>

<br>

## Wymagana wiedza

- TypeScript
- DOM

## Technologie potrzebne do zadania

- TypeScript

## Cele główne

- [ ] Stwórz markdown parser. Niech design strony będzie podobny do strony parsera mjml (https://mjml.io/try-it-live).
      Rzeczy w projekcie z tamtej strony które trzeba uwzględnić: kod po lewej stronie i widok po prawej, środkową linie, zobaczenie kodu w htmlu, widok na telefon i na desktopy.

- [ ] Ściąga odnośnie zapisów markdowna - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet.

- [ ] W projekcie trzeba dodać wszystkie elementy ze ściągi oprócz: Wyświetlania kodu, inline html'a, line breaki, youtubowe filmiki.

- [ ] Dodaj możliwość dodania:

* Składanej sekcji (ang. Collapsible section) w ten sposób:
  `^[Nazwa składanej sekcji]"Tekst który ma się pojawić po kliknięciu na przycisk"^`
  Jeżeli nie wiesz czym jest składana sekcja, to znajduje się ona na stronie akademii w sekcji FAQ: https://academy.localhost-group.com/faq

* Wykresów (do tego użyj zewnętrznej biblioteki np. charts.js):
  `{["Czerwony", 5];["Niebieski",12];["Zielony",2]}`

- [ ] Style mają być napisane w scss i mają się zmieniać się zależnie od widoku telefonu / desktopa.

- [ ] Po odświeżeniu strony kod ma zostać na stronie - do tego użyj locastorage'a.
