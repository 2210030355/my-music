# README

## Spotify 30-Second Player

This application allows users to play a 30-second preview of a song using the Spotify Web API. The project is built using JavaScript, HTML, and CSS.

---

## Features
- Authenticate with Spotify using OAuth tokens.
- Search for a song or artist.
- Play a 30-second preview of the selected song.

---

## Prerequisites
1. A Spotify Developer Account.
2. A registered Spotify app to get `Client ID` and `Client Secret`.
3. A redirect URI configured in the Spotify Developer Dashboard.

---

## Setup Instructions

### 1. Clone the Repository
```bash
# Clone this repository
git clone https://github.com/your-username/spotify-30sec-player.git
cd spotify-30sec-player
```

### 2. Set Up Spotify App
- Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
- Create a new app to get your `Client ID` and `Client Secret`.
- Add a redirect URI (e.g., `http://localhost:3000/callback`).

### 3. Configure Environment Variables
- In your project directory, create a `config.js` file:
  ```javascript
  // config.js
  const CLIENT_ID = '<your_client_id>';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  ```

### 4. Serve the Application
- Open the `index.html` file in a browser.
- Use a local HTTP server if required (e.g., `http-server` for Node.js).

### 5. Authenticate and Play Music
- Log in with your Spotify credentials when prompted.
- Use the search feature to find a song.
- Click on the song to play a 30-second preview.

---

## File Structure
```
spotify-30sec-player/
├── index.html          # Main HTML file
├── style.css           # Styling for the application
├── app.js              # Main JavaScript logic
├── config.js           # Contains Spotify credentials
└── README.md           # Documentation
```

---

## Dependencies
- Spotify Web API
- Fetch API for HTTP requests

---

## Additional Notes
- Make sure to keep your `Client ID` and `Client Secret` secure.
- The application only plays previews available via Spotify.


---

## Thank You
Enjoy using the Spotify 30-Second Player! For issues, please open a GitHub issue in this repository.
