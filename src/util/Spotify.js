const clientId = '39edbbf5dbf244abb8e71d530cf9fcb6';
const redirectUri = 'http://localhost:3000/'
let accessToken;

const Spotify = {
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expireIn = Number(expireInMatch[1]);
            // This clears the parameters, allowing us to grab a new access token when it expires.
            window.setTimeout(() => accessToken = '', expireIn*1000);
            window.history.pushState('Acces Token', null, '/')
            return accessToken;
        }else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
            
    }

}

export default Spotify;