### 1. Kolekcja: `characters` (Postacie)
| Pole | Typ | Opis | Przykład |
| :--- | :--- | :--- | :--- |
| `name` | **String** | Imię lub nazwa postaci (trim) | `"Geralt"` |
| `class` | **String** | Klasa postaci (np. Mage, Warrior) | `"Wiedźmin"` |
| `level` | **Number** | Poziom doświadczenia (default: 1) | `25` |
| `hp` | **Number** | Punkty życia postaci | `150` |

### 2. Kolekcja: `artifacts` (Artefakty)
| Pole | Typ | Opis | Przykład |
| :--- | :--- | :--- | :--- |
| `owner` | **ObjectId** | **Magiczna** referencja do `Character` | `ObjectId("65f1a...")` |
| `name` | **String** | Nazwa artefaktu | `"Srebrny Miecz"` |
| `power` | **Number** | Moc lub obrażenia artefaktu | `85` |
| `type` | **String** | Typ (Weapon, Armor, Jewelry) | `"Weapon"` |