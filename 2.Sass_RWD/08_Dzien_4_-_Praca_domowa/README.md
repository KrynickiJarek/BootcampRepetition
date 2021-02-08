![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)


# Zadanie domowe - Flexbox Shrink

> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `08_Dzien_4_-_Praca_domowa/01_Flexbox_Shrink`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**

W pliku `index.html` znajdziesz sekcję o nazwie `flex-container`.

* dodaj do jej klasy właściwość display: flex oraz ustaw tło. Niech kierunek flexa będzie poziomy.
* następnie dodaj wewnątrz kontenera kilka zdjęć obok siebie o łącznej szerokości, co najmniej 500px, ale nie większej niż 1024px – niech wymiary zdjęć będą takie same.
* ustaw zdjęcia tak, by były wyśrodkowane względem wysokości kontenera
* dodaj odpowiednie właściwości kontenerowi i zdjęciom, tak aby przy zmniejszaniu rozmiaru okna przeglądarki, zdjęcia się nie kurczyły, tylko przewijały
* niezbędne będzie wykorzystanie właściwości `overflow`

![Flexbox](images/flex-shrink.jpg) 

# Zadanie domowe - Flexbox Grow Shrink

> ### Przygotowanie
> Zmodyfikuj plik `gulpfile.js` tak, aby zmienna `entryPath` wskazywała na:
> -  `08_Dzien_4_-_Praca_domowa/02_Flexbox_Grow_Shrink`
>
> **Pamiętaj aby po każdej zmianie w pliku `gulpfile.js` przerwać działanie Gulpa (`CTRL+C`) a następnie włączyć go z powrotem (`gulp`).**

> Włącz widok responsywny przeglądarki i ustaw okno na szerokość mobilną

W pliku `index.html` znajdziesz sekcję o nazwie `flex-container-column`.

* dodaj do jej klasy właściwość display: flex o orientacji pionowej oraz ustaw height: 100vh
* dodaj do kontenera trzy sekcje: header, main oraz footer. Niech każda z nich posiada kolorowe tło.
* określ dowolną wysokość dla headera i footera
* w sekcji main wrzuć kilka paragrafów
* przy pomocy właściwości flex-boxa ustaw header i footer tak, aby zawsze były widoczne w oknie przeglądarki – były przyklejone odpowiednio do góry i dołu okna
* dodaj odpowiednie właściwości aby przy zmniejszaniu wysokości okna przeglądarki, pojawiła się możliwość przewijania tekstu w środkowej sekcji
* niezbędne będzie wykorzystanie właściwości `overflow`

![Flexbox](images/flex-grow-shrink.jpg)
