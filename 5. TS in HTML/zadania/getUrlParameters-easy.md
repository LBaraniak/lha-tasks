<h2 align="center">Get Url Parameters</h2>

<br>

## Wymagana wiedza

- Podstawy html oraz JavaScript


## Technologie potrzebne do zadania

- HTML, Podstawy JavaScript, 

## Cele główne

* [ ] Stwórz funkcję `getUrlParameters(url)` która po zamontowaniu będzie zwracać wszystkie argumenty z adresu url
* [ ] Dla url = `const sample = url.com/post?page=10&id=1`, wynik wywołania `getUrlParameters(sample)` powinien być równy `{page: 10, id:1}`.
* [ ] Funkcja powinna zwracać wynik w takiej samej formie jak w powyższym przykładzie.


## Przydatne linki

- Dokumentacja URL - https://developer.mozilla.org/en-US/docs/Web/API/URL

## Kawałek kodu dla lepszego początku!

```javascript
function getUrlParameters(url){}

const urlString = "url.com/post?colors[2]=red&valid=true&colors[0]=green&user=Jan&age=25";
const result = getUrlParameters(urlString);
// result === { colors: [ 'green', undefined, 'red' ], valid: true, user: 'Jan', age: 25 }
```
