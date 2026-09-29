# IRC Engineering Interview repo

This template comes configured with the bare minimum to get started on anything you need.
We are using [Payload CMS](https://github.com/payloadcms/payload) as the basis for this
interview project to provide a basic framework.

## Quick Start - local setup

To spin up this project locally, follow these steps:

### Clone

You'll want to have standalone copy of this repo on your machine. If you've already cloned
this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables.
2. `cp example.db product-configurator-interview.db` to copy the example database.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser. Follow the on-screen
   instructions to login and create your first admin user.
5. `pnpm run seed` after you've set up your admin user to seed initial data.

## How it works

The Payload config is tailored specifically to the needs this interview. It is
pre-configured in the following ways:

### Collections

See the Payload [Collections docs](https://payloadcms.com/docs/configuration/collections)
for details on how to extend this functionality.

- #### Clients

  In a B2B2C relationship, clients are the direct customers of the business. They have a
  name and sub-groupings called Organizations.

- #### Organizations

  Organizations are arbitrary groupings of locations, usually tied to a Client's business
  structure.

- #### Locations

  Locations are similar to stores or venues, this is where the product is being provided.

- #### Products

  The ecommerce product being sold. Examples: insurance coverage or a t-shirt.

- #### Product Options

  Defines an option for a product, such as size or colour.

- #### Product Option Values

  Defines a specific value of a product option. For example, values for a "colour" product
  option could be "red" or "black", and values for a size option could be "small" or
  "medium".

- #### SKUs

  The individual variants of a product, a unique combination of product option values of
  all of a product's options.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point
  and manual resizing to help you manage your pictures.


## Questions

If you have any issues or questions, please reach out to your interview coordinator.
