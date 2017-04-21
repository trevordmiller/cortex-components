# Contributing

- Ensure you have [Git](https://git-scm.com/), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed on your machine
- Run `yarn` to install dependencies
- Run `yarn build:schema` to create the `graphql.schema` file from the GraphQL API server's schema
- Run `yarn build:relay` to create the `__generated__` Relay directories next to the components with GraphQL operations
- Run `yarn dev` to compile `src` to `lib`
- Run `yarn link` to use changes locally inside [cortex-clients](https://github.com/trevordmiller/cortex-clients)
- Run `yarn test` to test
- Submit a pull request to `master`
- Continuous Integration runs `yarn verify` to verify the code can be merged into `master`
- An admin merges your pull request into `master` and runs `yarn release` to release a new version to npm
