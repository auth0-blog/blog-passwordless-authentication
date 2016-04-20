# Passwordless Authentication Samples

This repo contains code samples for the Passwordless Login with Facebook Account Kit article from the Auth0 blog. There are two NodeJs apps, one for Facebook Account Kit and the other for Auth0 Lock Passwordless showing how you can add passwordless authentication in each.

## Setup Instructions: Facebook Account Kit

Facebook Account Kit requires that you have a Facebook Developer Account with a registered app that has Account Kit enabled.

1) Run `npm install` to install dependencies (NodeJs is a prerequisite)
2) Open the `server.js` file
3) Replace `YOUR_FACEBOOK_APP_ID` and `YOUR_ACCOUNT_KIT_SECRET` with your credentials
4) Open the `login.html` file in the `/dist` directory
5) Replace `YOUR_FACEBOOK_APP_ID` with your credentials
6) Run the app executing `node server`
7) Navigate to `localhost:3000` to see the app


## Setup Instructions: Auth0 Lock Passwordless

Auth0 Lock Passwordless requires that you have an Auth0 account. [Sign up](https://auth0.com) for free if you don't.

1) Run `npm install` to install dependencies (NodeJs is a prerequisite)
2) Open the `login.html` and `callback.html` pages
3) Replace `AUTH0_CLIENT_ID`, `AUTH0_DOMAIN` and `AUTH0_CALLBACKURL` with your credentials in each of the pages
4) Run the app by executing `node server` from the terminal
5) Navigate to `localhost:3000` to see the app

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)
