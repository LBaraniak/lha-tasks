<h2 align="center">On Delay Href</h2>

<br>

## Wymagana wiedza

- HTML, JavaScript


## Technologie potrzebne do zadania

- HTML, JavaScript

## Cele główne

* [ ] Stwóz customową parę atrybutów `data-delayed` która:
- ma występować TYLKO RAZEM i być dostępna tylko dla tagów `<a>`
- będzie opóźniać przekierowywanie na INNY url o kilkaset milisekund
- wartościa atrybutu `data-delayed-href` nadpisze aktualny href

* [ ] Dodatkowo, wywołaj w czasie przed przekierowaniem funkcję:
```javascript
function onClick(event){
    console.log('kliknięte z opóźnieniem')
}
```

## Kawałek kodu dla lepszego początku!

* [ ] Kod html, który powinien zadziałać w taki sposób:
- odpalić timout na 300ms
- wyświetlić w konsoli 'kliknięte z opóźnieniem' 
- po 300ms przekierować na /contact
```html
<a data-delayed-href="/contact" data-delayed-duration="300">Contact me</a>
```
