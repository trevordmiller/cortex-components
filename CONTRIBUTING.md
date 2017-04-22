# Contributing

- Ensure you have [Git](https://git-scm.com/), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed on your machine
- Run `yarn` to install dependencies
- Run `yarn schema` to update the `graphql.schema` to match the latest schema from [cortex-api](https://github.com/trevordmiller/cortex-api)
- Run `yarn relay:watch` to compile Relay components
- Run `yarn build:watch` to compile `src` to `build`
- Run `yarn test:watch` to test
- Run `yarn link` in `cortex-components`, and `yarn link cortex-components` in each of the [cortex-clients](https://github.com/trevordmiller/cortex-clients) to use the components locally in another project as if they were installed from npm
- Submit a pull request to `master`
- Continuous Integration runs `yarn verify` to verify the code can be merged into `master`
- An admin merges your pull request into `master` and runs `yarn release` to release a new version to npm
