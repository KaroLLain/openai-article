# Aplikacja do przetwarzania artykułów z użyciem OpenAI

## Opis
Aplikacja napisana w JavaScript, która:
1. Łączy się z API OpenAI.
2. Pobiera plik tekstowy z artykułem.
3. Przekazuje treść artykułu do OpenAI w celu przekształcenia na kod HTML.
4. Zapisuje wygenerowany kod HTML w pliku `artykul.html`.

## Pliki
•  `index.js`: Główny plik aplikacji.

•  `artykul.html`: Plik z wygenerowanym kodem HTML artykułu.

•  `szablon.html`: Szablon HTML do podglądu artykułu.

•  `podglad.html`: Plik z pełnym podglądem artykułu.

•  `README.md`: Plik z opisem działania aplikacji i instrukcją uruchomienia.


## Instrukcja uruchomienia
1. Zainstaluj wymagane zależności:
```bash
npm install axios

1. 
Ustaw klucz API OpenAI w pliku index.js:

const apiKey = 'YOUR_OPENAI_API_KEY';

1. 
Uruchom aplikację:

node index.js

1. 
Wygenerowany kod HTML znajdziesz w pliku artykul.html.

Uwagi
•  Upewnij się, że masz dostęp do internetu, aby pobrać plik tekstowy i połączyć się z API OpenAI.

•  Plik artykul.html zawiera tylko zawartość do wstawienia pomiędzy tagami <body> i </body>.

•  Plik szablon.html jest pustym szablonem do wklejenia wygenerowanego kodu HTML.

•  Plik podglad.html zawiera pełny podgląd artykułu z wklejonym kodem HTML.