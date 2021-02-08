![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `01_Dzien_1/04_Mixins/01_Zadanie_1`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**

## Zadanie 1 - rozwiązywane z wykładowcą

Znajdź w pliku `index.html` element `section` o klasie `test-mixin`. Ostyluj elementy wewnątrz zgodnie z opisem ich klas (obramowanie, lewa strona, )
Następnie stwórz prosty mixin, który doda do  odpowiedniego elementu pseudo elementy `:before` i `:after`. Niech mixin ma nazwę **clearfix**.


> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `01_Dzien_1/04_Mixins/02_Zadanie_2`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**

## Zadanie 2

Stwórz mixin, który na podstawie przekazanego do niego parametru - `$font` - ustawi wielkość tekstu dla elementu `header`. Dodatkowo ustawi również `border-radius` na `5px`.


> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `01_Dzien_1/04_Mixins/03_Zadanie_3`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**


## Zadanie 3

Stwórz mixin, o nazwie `dialogBox`, który przyjmuje dwa argumenty - kolor ($backgroundColor) oraz szerokość boksa ($width). Jego zadaniem jest ustawienie styli dla elementu o klasie `dialog`.

```
  width: $width;
  padding: 10px;
  background: $backgroundColor;
  border: 1px solid black;
  margin: 40px auto;
```

Do mixinu dodaj pseudo element `:after`, który stworzy kwadrat o wymiarach 10x10px, dekorujący boks. Końcowy projekt powinien wyglądać następująco:

![Dialog](images/dialog.png)

Zadanie przetestuj dla tła `green` i `lightgray`, oraz dowolnymi szerokościami.

