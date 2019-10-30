# Clean Express

An express boilerplate app build with [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) in mind.
![Clean Architecture diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Comes with:

- Typescript
- Code formatting with [Prettier](https://prettier.io/)
- Database set up with [Knex query builder](http://knexjs.org/) and [Objection ORM](https://vincit.github.io/objection.js/)
- Request logging using [express-winston](https://www.npmjs.com/package/express-winston)
- App config through environment variables with [dotenv](https://github.com/motdotla/dotenv)
- NVM
- Testing framework with:
  - [Jest](https://jestjs.io/)
  - [SuperTest](https://github.com/visionmedia/supertest) for integration tests

All set up in a modular way to allow for easy replacement.

Coming soon:

- More logging with winston
- Dependency injection

## Getting Started

```bash
# Get the most recent revision
git clone --depth 1 https://github.com/atelic/clean-express my-project

# Change directory
cd my-project

# Install NPM packages
yarn install

# Run the app
yarn start
```

## API Documentation

API docs are automatically generated from JSDoc comments. They can be viewed at `/api/v1/docs`.
To add to this documentation, annotate your controller actions with the [OpenAPI 3.0 spec format](https://swagger.io/docs/specification/about/).

## Database

The app is currently set up with a PostgreSQL database, however Knex supports many
other SQL databases. To use them all you'll need to do is install the driver by running

`yarn add [pg|mysql2|oracledb|mssql|sqlite]`

Then update your environment variables or the `knexfile.ts`.

### Migrations

Knex comes with a migrations CLI, allowing you to define schema changes for easy upgrading.
NOTE: Knex doesn't have the best Typescript support so migrations are written in plain JavaScript.

To create a new migration run:

```bash
yarn migration:make -- my_migration_name
```

To update your database to the latest version:

```bash
yarn migration:latest
```

And to rollback a migration:

```bash
yarn migration:rollback
```

Knex has more advanced migration features documented [here](http://knexjs.org/#Migrations)

## Environment variable config

To add configuration through environment variables:

1. Copy the `.env.example` file to `.env`
2. Add your variables
3. Access them in your ap through `process.env.MY_ENV_VAR`

## Tests

Run tests by running `yarn test` from the root folder. To add new tests, simply create a file with the extension `.test.ts` in any directory.

## Additional Resources

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Domain Driven Design](https://airbrake.io/blog/software-design/domain-driven-design)
- [Using Clean Architecture in Node.js with MongoDB and Express (video)](https://www.youtube.com/watch?v=CnailTcJV_U)
