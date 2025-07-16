# 🌤️ Weather App – React + Node.js

Ez egy egyszerű időjárás-alkalmazás, amely lehetővé teszi a felhasználók számára, hogy lekérdezzék az aktuális időjárási adatokat bármely városra.

Az app két részből áll:

- **Frontend**: React alkalmazás, ahol a felhasználók keresnek és megjelenik az időjárás.
- **Backend**: Node.js + Express szerver, ami továbbítja a lekérést az OpenWeatherMap API felé.

## 🔧 Technológiák

### Frontend

- React (Vite)
- useState, fetch API
- Alap CSS

### Backend

- Node.js + Express
- node-fetch
- dotenv + CORS

## 🚀 Használat

### 1. Klónozás

```bash
git clone https://github.com/vrljaron/weather-app.git
cd weather-app
```

### 2. Backend beállítás

```bash
cd backend
npm install
```

Hozz létre egy `.env` fájlt:

```
OPENWEATHER_API_KEY=ide_jön_az_api_kulcsod
```

Indítsd el a szervert:

```bash
node index.js
```

A szerver alapból a `http://localhost:3001` címen fut.

---

### 3. Frontend beállítás

```bash
cd frontend
npm install
npm run dev
```

Ezután nyisd meg a böngészőben:  
📍 `http://localhost:5173` _(vagy amit Vite kiír)_

## 💡 További ötletek fejlesztéshez

- Mentett városok (`localStorage`)
- További adatok: páratartalom, szél, napkelte
- Responsív design
- Mobil app (React Native) ugyanazzal az API-val

## 📄 Licence

MIT
