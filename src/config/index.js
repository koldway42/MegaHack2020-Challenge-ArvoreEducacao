export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: 'a83df88a11b7408caa9ff3d766936ac5',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: [
      'user-read-email',
      'user-read-private',
      'streaming'
    ]
  }
}
