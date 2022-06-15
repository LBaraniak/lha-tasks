<h2 align="center">Auto translator</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawowa wiedza o natywnych modułach node.js
- Asynchroniczność(promise, async/await)
 
## Technologie potrzebne do zadania

- Express.js
- Natywny moduł file system 

## Cele główne

* [ ] Integracja z API google translator
* [ ] Przetłumaczenie pól obiektu poprzez API googla translatora podany w requestBody
* [ ] Zapis wszystkich danych we wskazanym języku w formie pliku js o nazwie tego języka (dla angielskiego będzie to en.json)
* [ ] W response zwrócić kompletny obiekt z tekstami

## Cele opcjonalne do wykonania

* [ ] Jeśli przy zapytaniu o tłumaczenie na język angielski istnieje już plik en.json to jego zawartość jest zwracana w response
* [ ] Funkcja translate nie powinna zmieniać struktury danych językowych oraz powinna tłumaczyć cały obiekt jednocześnie

## Przydatne linki

- Czym jest i jak działa moduł 'file system' - https://www.sohamkamani.com/blog/nodejs-file-system-guide/
- Przykładowa apka dla zarysu - https://www.youtube.com/watch?v=Sjl9ilOpHG8

## Kawałek kodu dla lepszego początku!

```javascript
const pl = {
    attention:{
        title:'Dobrze, że jesteś, sprawdź to zadanie',
        subtitle:'Pomoże Ci ogarnąć jak zmieniać język w apkach reacta',
        ctaButton:'Dowiedź się więcej',
    },
    newsletter:{
        title:'Bądź na bieżąco',
        ctaButton:'Idź do repo ->',
        action:'/new-subscriber?lang=pl'
    }
}

// do endpointa leci sobie takie requestBody
const requestBody = {
    lang:'en'
}

function translate(request, response){

}

export default translate
```
