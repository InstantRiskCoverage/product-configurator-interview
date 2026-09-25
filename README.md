# IRC Engineering Interview repo

This template comes configured with the bare minimum to get started on anything you need.
We are using [Payload CMS](https://github.com/payloadcms/payload) as the basis for this interview project to provide a basic framework.

## Quick Start - local setup

To spin up this project locally, follow these steps:

### Clone

You'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user.

## How it works

The Payload config is tailored specifically to the needs this interview. It is pre-configured in the following ways:

### Collections

See the Payload [Collections docs](https://payloadcms.com/docs/configuration/collections) for details on how to extend this functionality.

- #### Clients
- #### Organizations
- #### Locations
- #### Products
- #### Product Options
- #### Product Option Values
- #### SKUs

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.


## Questions

If you have any issues or questions, please reach out to your interview coordinator
