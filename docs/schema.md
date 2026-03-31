### 1. Kolekcja: `characters` (Postacie)
| Pole      | Typ        | Opis                                           | Przykład                                                                                                                                       |
|:----------|:-----------|:-----------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|
| `id`      | **Number** | Id Bohatera                                    | `1`                                                                                                                                            |
| `imie`    | **String** | Imię lub nazwa postaci (trim)                  | `"Geralt z Rivii"`                                                                                                                             |
| `opis`    | **String** | Krótki opis bohatera                           | `"zmutowany łowca potworów, który przemierza świat, rozwiązując problemy ludzi i potworów, często balansując między moralnością a zleceniem."` |
| `gatunek` | **String** | Gatunek postaci                                | `Mutant`                                                                                                                                       |
| `czySpi`   | **String** | Czy postać śpi snem zimowym                    | `tak`                                                                                                                                          |
| `najlepszyPrzyj`   | **String** | Id postaci, która jest najlepszym przyjacielem | `4`                                                                                                                                            |


### 2. Kolekcja: `artifacts` (Artefakty)
| Pole | Typ        | Opis                                   | Przykład          |
| :--- |:-----------|:---------------------------------------|:------------------|
| `wlascicielId` | **Number** | **Magiczna** referencja do `Character` | `1`               |
| `nazwaArtefaktu` | **String** | Nazwa artefaktu                        | `"Srebrny Miecz"` |
| `wlasciwosc` | **String** | Właściwość artefaktu                   | `Zadaje dodatkowe obrażenia potworom, może wykrywać niewidzialne istoty.`                |
