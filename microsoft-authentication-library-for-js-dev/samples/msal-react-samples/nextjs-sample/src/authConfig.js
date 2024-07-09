// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "3d598371-d18d-400d-9eba-d83894901ad4",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000/profile",
        postLogoutRedirectUri: "http://localhost:3000/profile"
    },
    system: {
        allowNativeBroker: false, // Disables WAM Broker
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read", "b5bfe7fe-28b6-4551-bac2-e64072206fc0/fitness_api"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
