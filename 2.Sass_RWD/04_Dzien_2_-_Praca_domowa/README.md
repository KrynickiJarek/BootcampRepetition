![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


# Zadanie domowe - Wielkości nagłówków

> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `04_Dzien_2_-_Praca_domowa/01_Wielkosci_naglowkow`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**

Na podstawie poniższej mapy (za pomocą odpowiedniej funkcji Sass), zrób listę zawierającą same wartości.
Następnie za pomocą odpowiedniej pętli ustaw wielkości dla nagłówków z pliku `index.html`, od największego do najmniejszego, wykorzystując wartości listy.

```scss
$font-sizes: (
 fs1: 100px,
 fs2: 50px,
 fs3: 6px
);
```


Skorzystaj: [https://sass-lang.com/documentation/modules/map]()

# Zadanie domowe - Jednostki

> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `04_Dzien_2_-_Praca_domowa/02_Jednostki`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**

W pliku `index.html` znajdziesz sekcję o nazwie `test_units`. Przyjrzyj się jej dokładnie. Wewnątrz jest kilka elementów.
Ustaw sekcji `test_units` wielkość tekstu na `30px`, dodaj jej obramowanie i ustaw szerokość na `25em` oraz wysokość na `5em`.
Ustaw również elementowi `header` wielkość tekstu na `50%`. 

Twoim zadaniem jest napisanie jednej reguły css dla elementów span, która ustawi im wielkość tekstu (za pomocą jednostki `em`) w taki sposób, aby:
* span pierwszy był o połowę mniejszy od wielkości tekstu zdefiniowanego dla sekcji `test_units`,
* span drugi miał taką samą wielkość jak tekst zdefiniowany dla sekcji  `test_units`.
