import axios from 'axios'
const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId="9b8b3e4185ad4c0c910cef3cbfc2969f"
const redirectUri="http://localhost:3001"
const scopes = ["user-library-read", "playlist-read-private"];
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
  const apiClient= axios.create({
    baseURL:"https://api.spotify.com/v1/"
  })
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;