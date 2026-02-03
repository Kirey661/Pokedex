# POKÉDEX - By Kire Pérez
Detta är en enkel Pokedéx app byggd med React och Vite.

* **API-dokumentation:** [https://pokeapi.co/]
* **Bildkälla:** PokeAPI Sprites (GitHub Raw)
  `const imgUrl = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

# Syfte
Detta projekt skapades som en del av min utbildning för att praktisera och visa mina
kunskaper i React. Målet var att bygga en SPA med tekniska utmaningar som:
* Komponenter
* Routing
* API & Async
* State management
* Styling

# Hur man startar projektet?

1. **Klona projektet**
Kopiera koden från GitHub [koden].

2. **Gå till terminalen och skriv:**
git clone [koden]
cd pokedex

3. Installera alla bibliotek genom att skriva i terminalen:
npm install 

4. Starta appen i terminalen genom att skriva:
npm run dev 


## Krav som uppfylls

### A. SPA + ROUTING
- [x] **React SPA** med React Router.
- [x] **Minst 3 routes**: (Home, Pokedex, About).
- [x] **Navigation**: via React Router using `Link` and `NavLink`.

### B. Komponentstruktur + Props
- [x] **Komponenter**: Footer, Navbar, Pokemoncard.
- [x] **Props**: Skickar data mellan komponenter.

### C. State + Interaktivitet
- [x] **`useState`**: Används för att hantera data som förändras.
- [x] **`pokedex.jsx`**: För att spara listan och för att hålla koll på när datan laddas.

### D. Data + API
- [x] **`useEffect`**: För att hämta data precis när sidan laddas.
- [x] **Fetch**: Riktigt data från en extern [PokeAPI](https://pokeapi.co/).
- [x] **Loading state**: Som visas text medans data hämtas.



























## 🦆🦆 cuack