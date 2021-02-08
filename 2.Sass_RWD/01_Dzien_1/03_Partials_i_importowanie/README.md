![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `01_Dzien_1/03_Partials_i_importowanie/01_Zadania`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 1

Stwórz potrzebne foldery i pliki i zorganizuj  według schematu poniżej.
Umieść przykładowe style według opisu:

```
[folder] scss
    [folder] settings
                _all.scss - zmienne przechowujące rozmiar fonta lub szerokości
                _colors.scss - zmienne z kolorami
    [folder] generic
                _reset.scss - style resetujące
    [folder] elements
                _footer.scss - style dla elementu footer, wykorzystaj wcześniej zdefiniowane zmienne
                _header.scss - style dla elementu header, wykorzystaj wcześniej zdefiniowane zmienne
                _content.scss - style dla elementu article, wykorzystaj wcześniej zdefiniowane zmienne
                _base.scss - style dla całej strony
    main.scss - tylko importy wcześniej stworzonych plików
```

## Zadanie do samodzielnego wykonania

### Zadanie 2
W folderze `scss` istnieje plik `main.scss`, w którym są zakomentowane style dla strony. Odkomentuj je, a następnie podziel ten plik według schematu z zadania z wykładowcą.
