<a href="https://intranet.allianceptp.com/">
  <img alt="Alliance PTP Intranet" src="https://kpifzufhdtskjhvmjorm.supabase.co/storage/v1/object/public/images/intranet-screenshot.png">
  <h1 align="center">Alliance PTP Intranet</h1>
</a>

<p align="center">
 A full-featured application for internal communications.
</p>

<p align="center">
  <a href="#technical-features"><strong>Technical Features</strong></a> ·
  <a href="#live-site"><strong>Live Site</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
</p>
<br/>

## Technical Features

- Next.js Application
  - App Router
  - Middleware
  - Server
- [Supabase](https://supabase.com/dashboard/project/kpifzufhdtskjhvmjorm) Backend
  - Authentication using our Azure AD provider.
  - Database for pages, documents, users, and other content types.
  - Storage for images and files.
- [Editor.js](https://editorjs.io/) for document editing.
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Deployment with [Vercel](https://vercel.com/aptp/intranet)
  - Environment variables available within Vercel project
- Automatic deployment via Vercel and this Github repository.

## Live Site

You can view the fully working site at [intranet.allianceptp.com](https://intranet.allianceptp.com/). (You must have Alliance PTP credentials.)

### Staging Site

There is a staging version of the site available at [intranetstaging.allianceptp.com](https://intranetstaging.allianceptp.com). Please note that the Supabase backend and databases are tied to all versions of the intranet - so content changes are reflected everywhere.

The staging site is deployed automatically from the staging branch.

## Clone and run locally

1. Clone this repository to your local machine.

2. Install all packages with npm.

   ```bash
   npm i
   ```

3. Copy the the environment variables from our Vercel project to a `.env.local file` in the root of the project.

4. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The local version should now be running on [localhost:3000](http://localhost:3000/).

## Feedback and issues

Users are directed to the [Bug Report](https://intranet.allianceptp.com/comment) page for bugs and the [Page Request](https://intranet.allianceptp.com/page-request) page for new pages and document requests.