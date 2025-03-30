# YMZK Repository
This is the public repository for the YMZKR website, a portfolio website that showcases the works of a writer. </br>
Uses React + TypeScript and Next.js, and connected to a Serverless Neon Postgre database to dynamically display the author's works. </br>
**This repo is for demonstration purposes only, and will produce errors when built** since some of the database/authentication code were obscured for security reasons.

Visit the website here: https://ymzk.vercel.app/

## Building:
**Please note that this build is non-functional**. </br>
Most of the code that deals with the backend is not included and there is no connection to the database, which means sections and pages may not load data or the page itself.

If you really want to build the project, clone the repo and install any missing dependencies and type ``npm run dev`` in the terminal.

## Next.js Middleware
The middleware protects the ``/user`` page from being accessed. If you want it disabled, either go to middlware.ts and 
replace the value of ``"/user"`` from ``const protectedRoutes = ["/user"];``, or set up a GitHub OAuth.

If you'd like to set up a Github OAuth, you can follow these steps:
- Go to your developer settings in Github and setup an OAuth App.
- Get the value from your ClientID and set it in your project .env AND in Vercel's environment variables. </br>
``AUTH_GITHUB_ID=your_github_id``
- Generate a hash and set it in your project .env AND in Vercel's environment variables. </br>
``AUTH_GITHUB_SECRET=your_generated_hash``
- Put the URL of your production website into the GitHub OAuth. If you're only testing on local, use your local url. </br>
- Append ``/api/auth/callback/github`` for your Authorization Callback URL </br>
Example: ``https://your_url/api/auth/callback/github``

If done correctly, ``/user`` should be protected and will only be accessible once you connect to Github. </br>
Please note that the code that checks if the account is authorized is not included from the repo, which means any GitHub account can access the ``/user`` page.

Read more on how to configure the GitHub OAuth with Next.js [here](https://next-auth.js.org/providers/github).

