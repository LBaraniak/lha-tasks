<h2 align="center">Mail with hook </h2>

<br>

## Wymagana wiedza

- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).

## Technologie potrzebne do zadania

- Express.js
- biblioteka nodemailer
- Opcjonalnie bibliotekę mjml

## Cele główne

- [ ] Stwórz endpoint na metodzie GET, który wyślę maila z losową treścią i przyciskiem do kliknięcia
- [ ] Użytkownik w przypadku otworzenia pierszego maila automatycznie powinien otrzymać drugiego maila

## Cele opcjonalne do wykonania

- [ ] Wysyłający dostanie maila, wtedy kiedy osoba do której wysyłamy maila otworzy tego maila

## Przydatne linki

- Jak lepiej zrozumieć metodę GET - https://rapidapi.com/blog/api-glossary/get/
- Świetne źródło wiedzy o nodemailer czyli dokumentacja! - https://nodemailer.com/about/

## Kawałek kodu dla lepszego początku!

```javascript
import express from 'express'
import nodemailer from 'nodemailer'
const router = express.Router();

config nodemailera
router.get('/send-mail', (res,res) => {

  // nodemailer.....
})
```
