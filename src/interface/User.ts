type AuthHeaders = {
    ['Content-Type']: string,
    Authorization: string
}

export default interface User {
    accessToken: string,
    idToken: string,
    username: string,
    // Include a simple method to generate headers with our Authorization info
    authorizationHeaders: (type?: string) => AuthHeaders
}