# YMZK Repository
This is the public repository for the YMZKR website. Uses React + TypeScript and Next.js, and connected to a Serverless Neon Postgre database. 
This repo is for demonstration purposes only, and some of the database functions were obscured for security reasons. </br></br>
Visit the website here: https://ymzk.vercel.app/

## How to Build
Clone the repo and install any dependencies. The middleware protects the USER page from being accessed. If you want it disabled, either go to middlware.ts and 
replace the value of ``const protectedRoutes = ["/user"];`` with something else, or set up a GitHub OAuth.

## GitHub OAuth Middleware
If you'd like to set up a Github OAuth, you can follow these steps:
- Go to your developer settings in Github and setup an OAuth App.
- Get the value from your ClientID and set it in your project .env AND in Vercel's environment variables. </br>
``AUTH_GITHUB_ID=your_github_id``
- Generate a hash and set it in your project .env AND in Vercel's environment variables. </br>
``AUTH_GITHUB_SECRET=your_generated_hash``
- Put the URL of your production website into the GitHub OAuth. If you're only testing on local, use your local url. </br>
- Append ``/api/auth/callback/github`` for your Authorization Callback URL </br>
Example: ``https://your_url/api/auth/callback/github``



