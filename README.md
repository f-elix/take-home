## Context

Using the meta framework of your choice (NextJS, SvelteKit, etc), perform the following tasks. If you discover any anomalies, take note of them and let us know 😉 Please note that you are encouraged to use AI productivity tools such as Cursor and GitHub Copilot.

## Task 1

You will be provided with the credentials for an existing Auth0 account. Create a login page along with the associated logic to implement the Authorization Code Flow. If possible, avoid using libraries like next-auth — the goal is to validate your understanding of the protocol. Keep the design of the login page as minimal as possible.

> 📝 You don’t need to implement JWT validation — the logic is already provided in `utils/validate-jwt.ts`

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/login-flow.png" alt="Login flow" width="600">

## Task 2

Create a Dashboard page respecting the following dimensions:

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/dashboard-display.png" alt="Dashboard display" width="600">

## Task 3

Implement the ‘My Profile’ section using the `/profile/{id}` endpoint.

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/my-profile.png" alt="My Profile" width="600">

NOTES:

While implementing this task, I followed the API documentation by removing the auth0| prefix from the user sub and passing the access token as a Bearer token in an Authorization header.
I made sure that the access token’s sub claim matches the user ID being requested, and ensured that only the authenticated user can access their own profile. This check can be found in [`getUserFromCookies`](./src/lib/server/getUserFromCookies.ts).
However, the API consistently returns a message indicating a potential IDOR vulnerability, even when the request seems correct. I believe I have implemented all necessary checks in my code to prevent IDOR issues, so I conclude that this was an intentional anomaly.

## Task 4

Implement the ‘My Friends’ section using the `/friends` endpoint. Note that the developers poorly modeled the social network and that this call is particularly slow.

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/my-friends.png" alt="Login flow" width="600">
